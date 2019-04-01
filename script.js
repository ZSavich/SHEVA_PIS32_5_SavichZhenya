"use strict";

const btnRect = document.getElementById('getRect');

btnRect.addEventListener('click', createRectangle);

function createRectangle() {
    const count = prompt('Введите кол-во строк');
    let values = [];
    let newValues = [];

    for(let i = 0; i < count; i++) {
        let string = '';

        for(let j = count; j > i; j--) {
            string+='   ';
        }
        for(let j = 0; j < values.length-1; j++) {
            newValues[j] = +values[j] + +values[j+1];
        }
        for(let j = 1; j < newValues.length+1; j++) {
            values[j] = newValues[j-1];
        }
        values.push(1);
        const numString = values.join('     ');
        console.log(string+numString);
    }

}