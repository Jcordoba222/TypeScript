class NewPokemon {
    constructor(
        public readonly id:number,
        public name: string

    ){}

    scream() {
        console.log(`No quiero!!`)
    }

    speak() {
        console.log(`No quiero hablar!!`)
    }

}
// Este es un Decorador (Una funcion) que retorna otra funcion
const MyDecorator =()=> {
    return (target: Function)=> {
        // console.log(target)
        return NewPokemon
    }
}
// @MyDecorator es una funcion
@MyDecorator()
export class Pokemon { 
    constructor(
        public readonly id:number,
        public name: string

    ){}
// Esto es un metodo que imprime Charmander en mayuscula
    scream() {
        console.log(`${this.name.toUpperCase()} !!`)
    }
// Esto es un metodo que imprime 2 veces Charmander
    speak() {
        console.log(`${this.name}, ${this.name}`)
    }
}

export const charmander = new Pokemon (4,'Charmander')

charmander.scream();
charmander.speak();
