// Función que lee el contenido de un archivo y lo inserta en un elemento
// // HTML. Esta función se usará para cargar el menú y el pie de página. 
function cargarFragmento(idElemento, archivo) {
    fetch(archivo) 
        .then(respuesta => respuesta.text())
        .then(contenido => {
            document.getElementById(idElemento).innerHTML = contenido; 
        })
        .catch(error => console.error(`Error cargando ${archivo}:`, error));
    }


document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contacto');
  const submitButton = document.getElementById('form-button');
  const toast = document.getElementById('toast');

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const nombre = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const motivo = document.getElementById('subject').value;
    const mensaje = document.getElementById('message').value;

    console.log('Nombre:', nombre);
    console.log('Email:', email);
    console.log('Motivo:', motivo);
    console.log('Mensaje:', mensaje);

    submitButton.disabled = true;
    submitButton.textContent = 'Enviando...';

    setTimeout(() => {
      toast.textContent = '✨ ¡Gracias, ' + nombre + '! Hemos recibido tu mensaje. ✨';
      toast.classList.add('show');

      setTimeout(() => {
        toast.classList.remove('show');
      }, 2500);

      form.reset();

      setTimeout(() => {
        submitButton.disabled = false;
        submitButton.textContent = 'Enviar';
      }, 2600);

    }, 400);
  });
});
