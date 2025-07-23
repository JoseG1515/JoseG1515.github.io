const nuevoUsuario = {
  name: 'Juan Pérez',
  username: 'juanp',
  email: 'juan@example.com'
};

const respuesta = await fetch('https://jsonplaceholder.typicode.com/users', {
  method: 'POST', // Método HTTP
  headers: {
    'Content-Type': 'application/json' // Indicamos que enviamos JSON
  },
  body: JSON.stringify(nuevoUsuario) // Convertimos el objeto a JSON
});

const datos = await respuesta.json();
console.log(datos);