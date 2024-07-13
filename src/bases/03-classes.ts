import axios from 'axios';
import { PokeapiResponse } from '../interfaces/pokeapi-response.interface';



export class pokemon {


    get imagenUrl(): string{
        return `https://pokemon.com${this.id}.jpg`
    }


    constructor(
        public readonly id: number,
        public name: string,
        //public imageUrl: string,
    ){}
    scream(){
        
        console.log(`${this.name.toUpperCase()}`)
       
    }

    speak(){
        console.log(`${this.name}, ${this.name}`)
    }
    async getMoves(){
        // const moves =10
        const {data} = await axios.get<PokeapiResponse>('https://pokeapi.co/api/v2/pokemon/4');
        console.log( data.moves);

        return data.moves;

     
    }
}
export const charmander = new pokemon( 5, 'Charmander')

// charmander.scream()
// charmander.speak()

// console.log(charmander.getMoves())

charmander.getMoves()

