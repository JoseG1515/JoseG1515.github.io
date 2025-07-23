async function obtenerUsuarios() {
  const respuesta = await fetch('https://jsonplaceholder.typicode.com/users');
  const usuarios = await respuesta.json();

  // se itera sobre la variable que contiene la data "usuarios" clave para llamar dentro del forEach"usuario" para acceder a un campo del api se coloca la clave seguido de un punto . y el nombre del campo. Ejemplo: usuario.Nombre
  usuarios.forEach(usuario => {
    console.log(' Nombre:', usuario.name);
    console.log(' Email:', usuario.email);
    console.log('************************');
  });
}

obtenerUsuarios();