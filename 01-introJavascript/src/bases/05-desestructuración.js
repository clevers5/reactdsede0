// Desestructuración de objetos

const persona = {
  nombre: "Tony",
  edad: 45,
  clave: "Ironman",
};

const { nombre: nombreHeroe, edad, clave } = persona;

console.log(nombreHeroe + " " + edad + " Años: " + clave);

const useContext = ({ nombre, edad, clave, rango = "Capitan" }) => {
  return {
    nombreClave: clave,
    anios: edad,
    latlng: {
      lat: 14.1232,
      lng: -12.3232,
    },
  };
};
// eslint-disable-next-line react-hooks/rules-of-hooks
const {
  nombreClave,
  anios,
  latlng: { lat, lng },
  // eslint-disable-next-line react-hooks/rules-of-hooks
} = useContext(persona);

console.log(nombreClave, anios);
console.log(lat, lng);

// desestructuración de arreglos

const personajes = ["Goku", "Vegeta", "Trunks"];

const [, , p3] = personajes;

console.log(p3);

const retornaArreglo = () => {
  return ["ABC", 123];
};

const [letras, numeros] = retornaArreglo();

console.log(letras, numeros);

// Tarea

const useState = (valor) => {
  return [
    valor,
    () => {
      console.log("Hola Mundo");
    },
  ];
};

// eslint-disable-next-line react-hooks/rules-of-hooks
const arr = useState("Goku");
const [nombre, setNombre] = arr;

console.log(nombre);
setNombre();
