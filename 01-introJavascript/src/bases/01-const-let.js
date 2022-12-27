// Variables y constantes

const nombre = "Clever";

const apellido = "Arnez";

let valorDado = 5;
valorDado = 8;

console.log(nombre, apellido, valorDado);

// Scope
if (true) {
  const nombre = "Peter";
  let valorDado = 5;

  console.log(valorDado, nombre);
}

console.log(valorDado);
