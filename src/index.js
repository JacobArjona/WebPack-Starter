
/*
FUNCION DE SALUDAR NO DEBERIA ESTAR EN EL INDEX

La pasamos a componentes.js

const saludar = (nombre) =>{

    console.log('Creando etiqueta H1');

    const h1 = document.createElement('h1');
    h1.innerText = `Hola ${nombre} <3`;

    document.body.append(h1);
};
*/

//VAMOS A IMPORTAR MODULOS

import {saludar } from './js/componentes.js';

import './styles.css';

const nombre = 'Jacobo';

saludar(nombre);