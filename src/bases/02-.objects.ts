//import { nombre } from "./01-types";

export const pokemonIds = [1,10,30,40,50,19];

//pokemonIds.push(+'1')


//console.log(pokemonIds)

interface Pokemon {
    id: number;
    nombre: string;
    age: number | undefined;
}


export const bulbasaur:Pokemon = {
    id:1,
    nombre:'Bulbasaur',
    age : undefined
}

export const charmander: Pokemon={
    id:4,
    nombre:'Charmander',
    age:1
}

export const pokemons:Pokemon[] = [];

pokemons.push(charmander, bulbasaur)
console.log(pokemons)

