
export let nombre: string  = 'Camilo' ;
export const age: number = 20; 
export const isvalid: boolean = true; 

nombre = 'Camilo_Cordoba';
// nombre = 123;
//nombre = true;

export const templateString = ` Esto es un string 
multilinea 
que pueden tener
 " dobles
 , simple
 inyectar valores ${nombre}
 expresiones ${1+1}
 numeros:${age}
 bolonleanos: ${isvalid}
 ` 

 console.log(templateString);