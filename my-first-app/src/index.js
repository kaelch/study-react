import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';


import foods from './projects/fruits_modules/foods';
import { choice, remove } from "./projects/fruits_modules/helpers";


// let foods = foods;
console.log(foods)
let fruit = choice(foods);
console.log(`I\`d like one ${fruit}, please`);
console.log(`Here you go: ${fruit}`);

let remaining = remove(foods, fruit);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);