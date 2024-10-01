# Observaciones

- usar el .gitignore para no commitear archivos que no queremos como el node_modules o las variables de entorno
- no commitear el package-lock.json por diferencias de versiones en los paquetes
- usar ingles en el nombre de los archivos, codigo, variables, etc
- recomendable usar un linter para el codigo y formateador para los archivos
- revisar vite ya que es un empaquetador mas rapido
- eliminar archivos innecesarios como el App.js de el frontend que no se esta usando
- rutas con datos sensibles no estan protegidos por ejm: /app/fotos, si ponemos eso desde cualquier navegador o cliente nos devolvera la informacion sin antes verificar si tenemor autorizacion
- al subir imagenes a pesar de estar subiendolo a un servidor externo como cloudinary y guardar la ruta en la base de datos, se genera archivos innecesarios en la carpeta uploads
- abstraer logica para no tener duplicados de codigo, como la logica de hacer peticiones usando axios
- mejorar ui y estilos del frontend
- revisar consolas y resolver errores o advertencias que puedan aparecer
- en frontend manejar la autenticacion con persistencia de datos, ya que si logueo y recargo la pagina me sale que inicie sesion nuevamente
- los componentes de la libreria react-bootstrap no me cargaron bien, revisar versiones
