"use strict";

let arr = [
    {value: 100, type: 'USD'},
    {value: 215, type: 'EUR'},
    {value: 7, type: 'EUR'},
    {value: 99, type: 'USD'},
    {value: 354, type: 'USD'},
    {value: 12, type: 'EUR'},
    {value: 77, type: 'USD'},
];

const btn = document.getElementById('start');

btn.addEventListener('click', () => {
    console.log(`Сумма значений = ${checkArray()}`);
    console.log(`Массив EUR:`);
    console.log(returnArray())
});

function checkArray() {
    let countFirst = 0;
    arr.forEach((element) => {
        if(element.type === 'USD' && element.value < 100) {
            countFirst += element.value;
        }
    })
    return countFirst;
}

function returnArray() {
    let euroArray = arr.filter((element) => {
        if(element.type === 'EUR') {
            element.value = element.value *2;
            return true;
        }
    })
    return euroArray.reverse();
}