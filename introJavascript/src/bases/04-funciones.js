//Tipos de funciones

const saludar = function (nombre) {
  return `Hola, ${nombre}`;
};

const saludar2 = (nombre, apellido) => {
  return `Hola, ${nombre} ${apellido}`;
};

const saludar3 = (nombre) => `Hola, ${nombre}`;

const saludar4 = () => `Hola Dragon Ball`;

console.log(saludar("Goku"));
console.log(saludar2("Gohan", "Son"));
console.log(saludar3("Vegeta"));
console.log(saludar4());

const getUser = () => {
  return {
    uid: "ABC123",
    username: "El_Papi1502",
  };
};

const getUser2 = () => ({
  uid: "ABC123",
  username: "El_Papi1502",
});

console.log(getUser());
console.log(getUser2());

// Tarea

const getUsuarioActivo = (nombre) => ({
  uid: "ABC567",
  username: nombre,
});

function getUsuarioActivo2(nombre) {
  return {
    uid: "ABC567",
    username: nombre,
  };
}
const usuarioActivo = getUsuarioActivo("Clever");
console.log(usuarioActivo);
