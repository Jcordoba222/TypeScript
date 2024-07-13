const Deprecated = (deprecationReason: string) => {
    return (target: any, memberName: string, propertyDescriptor: PropertyDescriptor) => {
      // console.log({target})
      return {
        get() {
          const wrapperFn = (...args: any[]) => {
            console.warn(`Method ${ memberName } is deprecated with reason: ${ deprecationReason }`);
            //! Llamar la función propiamente con sus argumentos
            propertyDescriptor.value.apply(this, args); 
          }
          return wrapperFn;
        }
      }
    }   
}

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
// @Deprrcated para mostrar que esta opsoleto el c
// EStoy usando el metodo de speak 
@Deprecated('Most use speak2 method instead')
    speak() {
        console.log(`${this.name}, ${this.name}`)
    }
    speak2(){
        console.log(`${this.name},${this.name}!!!`);
     }
}


export const charmander = new Pokemon (4,'Charmander')

charmander.speak2()