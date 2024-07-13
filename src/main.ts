// import { nombre, age, isvalid } from  './bases/01-types';
// import { charmander } from './bases/03-classes'
// import { charmander } from './bases/04-injections'
// import { charmander } from './bases/05-decorators'
import { charmander } from './bases/06-decorators2.js'
import './style.css'


const app = document.querySelector<HTMLDivElement>('#app')!;

app.innerHTML = `
 <h1> Hello vite ${charmander.name} ${charmander.id}</h1>
 <a href="https://vitejs.dev./guide/features.html"></a>



`;




//<h1> Hello ${pokemonIds.join(',') }!!</h1>