import heroes, { owners } from "./data/heroes";

console.log(heroes);

// FIND solo devuelve el primer elemento que cumple la condición
const getHeroeById = (id) => {
  return heroes.find((heroe) => heroe.id === id);
};
console.log(getHeroeById(2));

// FILTER devuelve un nuevo arreglo con todos los elementos que cumplan la condición
const getHeroesByOwner = (owner) => {
  return heroes.filter((heroe) => heroe.owner === owner);
};
console.log(getHeroesByOwner("DC"));
console.log(owners);
