import React, { useEffect, useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import axios from 'axios';
import './form.css';

const Formulariogaleria = () => {
  const [fotos, setFotos] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [titulo, setTitulo] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [file, setFile] = useState(null);
  const URL = 'http://localhost:9000/app';

  // Método inicializador para cargar las fotos
  const fetchFotos = async () => {
    try {
      const response = await axios.get(`${URL}/fotos`);
      setFotos(response.data);
    } catch (error) {
      console.error('Error al cargar las fotos:', error);
    }
  };

  // useEffect para llamar al método inicializador
  useEffect(() => {
    fetchFotos();
  }, []);

  const handleDeleteFoto = async (id, titulo, foto, descripcion) => {
    try {
      const reciclaje = {
        titulo,
        foto,
        descripcion,
      };
      await axios.post(`${URL}/papelera`, reciclaje);
      await axios.delete(`${URL}/foto/${id}`);
      const updatedFotos = fotos.filter((foto) => foto._id !== id);
      setFotos(updatedFotos);
      alert('Se movió a la papelera de reciclaje');
    } catch (error) {
      console.error('Error al eliminar la foto:', error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'titulo') setTitulo(value);
    else if (name === 'descripcion') setDescripcion(value);
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('titulo', titulo);
    formData.append('descripcion', descripcion);
    formData.append('foto', file);

    try {
      await axios.post(`${URL}/foto`, formData);
      fetchFotos(); // Actualiza la lista de fotos
      setShowModal(false); // Cierra el modal
      // Limpiar el formulario
      setTitulo('');
      setDescripcion('');
      setFile(null);
    } catch (error) {
      console.error('Error al subir la foto:', error);
    }
  };

  // Función para cerrar sesión
  const handleLogout = () => {
    localStorage.removeItem('token-galeria');
    // Redirigir a la página de inicio de sesión
    window.location.href = '/'; 
  };

  return (
    <div className="photo-app">
      <div className="d-flex justify-content-between mb-3">
        <Button variant="primary" onClick={() => setShowModal(true)}>
          Subir Nueva Foto
        </Button>
        <Button variant="danger" onClick={handleLogout}>
          Cerrar Sesión
        </Button>
      </div>

      {/* Modal para el formulario */}
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Subir Nueva Foto</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleOnSubmit}>
            <Form.Group controlId="titulo">
              <Form.Label>Título</Form.Label>
              <Form.Control
                type="text"
                name="titulo"
                value={titulo}
                placeholder="Título de la imagen"
                onChange={handleInputChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="descripcion" className="mt-3">
              <Form.Label>Descripción</Form.Label>
              <Form.Control
                as="textarea"
                name="descripcion"
                rows={2}
                value={descripcion}
                placeholder="Descripción de la imagen"
                onChange={handleInputChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="foto" className="mt-3">
              <Form.Label>Subir Foto</Form.Label>
              <Form.Control
                type="file"
                name="foto"
                accept="image/*"
                onChange={handleFileChange}
                required
              />
            </Form.Group>

            <Button variant="primary" type="submit" className="mt-3">
              Guardar
            </Button>
          </Form>
        </Modal.Body>
      </Modal>

      {/* Listado de fotos */}
      <div className="photo-list row mt-4">
        {fotos.map((foto) => (
          <div className="photo-card col-md-3 col-sm-6 mb-4" key={foto._id}>
            <img src={foto.foto} alt={foto.titulo} className="photo-image" />
            <p className="photo-title">{foto.titulo}</p>
            <p className="photo-description">{foto.descripcion}</p>
            <Button
              className="delete-btn"
              onClick={() => handleDeleteFoto(foto._id, foto.titulo, foto.foto, foto.descripcion)}
            >
              Mover a Papelera
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Formulariogaleria;
