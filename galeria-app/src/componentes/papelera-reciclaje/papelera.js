import React, { useEffect, useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import axios from 'axios';
import './papelera.css'; // Asegúrate de que esto apunte a tu archivo CSS

const PapeleraReciclaje = () => {
  const [fotos, setFotos] = useState([]);
  const URL = 'http://localhost:9000/app';

  // Método inicializador para cargar las fotos
  const fetchFotos = async () => {
    try {
      const response = await axios.get(`${URL}/papeleras`);
      setFotos(response.data);
    } catch (error) {
      console.error('Error al cargar las fotos:', error);
    }
  };

  // useEffect para llamar al método inicializador
  useEffect(() => {
    fetchFotos();
  }, []);

  const handleRestaurarFoto = async (id,titulo,foto,descripcion) => {
    try {
        const reciclaje = {
            titulo,
            foto,
            descripcion
          };
      await axios.post(`${URL}/foto-restaurada`, reciclaje);
      await axios.delete(`${URL}/papelera/${id}`);
      const updatedFotos = fotos.filter((foto) => foto._id !== id);
      setFotos(updatedFotos);
      alert('Se restauro la imagen');
    } catch (error) {
      console.error('Error al eliminar la foto:', error);
    }
  };



  return (
    <div className="photo-app">
      {/* Listado de fotos */}
      <div className="photo-list row mt-4">
        {fotos.map((foto) => (
          <div className="photo-card col-md-3 col-sm-6 mb-4" key={foto._id}>
            <img src={foto.foto} alt={foto.titulo} className="photo-image" />
            <p className="photo-title">{foto.titulo}</p>
            <p className="photo-description">{foto.descripcion}</p>
            <Button className="primary-btn" onClick={() => handleRestaurarFoto(foto._id,foto.titulo,
                foto.foto,
                foto.descripcion
            )}>
             Restaurar imagen
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PapeleraReciclaje;