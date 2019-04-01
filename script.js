"use strict";

const btnStart = document.getElementById('start');

btnStart.addEventListener('click', buttleGame);

function buttleGame() {
    let value = parseInt(prompt('Введите кол-во бутылок'));
    let count = 0;

    while(value>1) {
        value--;
        count++;

        let first = `${value} бутыл${value===1? 'ка' : (value> 1 && value< 5? 'ки' : 'ок')} стоит на стене, `;
        let second = `${counter(count)} упал${count===1?'а':'о'}`;

        console.log(first+second);
    }
}

function counter(value) {
    const number = value.toString().split('');
    let string = '';

    const once = ['', 'одна', 'две','три','четыре','пять','шесть','семь','восемь','девять','десять','одинадцать','двенадцать','тринадцать','четырнадцать','пятнадцать','шестнадцать','семнадцать','восемнадцать','девятнадцать'];
    const ten = ['двадцать','тридцать','сорок','пятдесят','шестьдесят','семдесят','восемьдесят','дев\'яносто'];

    if(value >= 10 && value < 20) {
        return once[value];
    }
    for(let i = 0; i < number.length; i++) {
        if(number[i] > 1 && number.length > 1 && i === 0)
            string += `${ten[number[i]-2]}`;
        else if (number.length > 1 && i === 0)
            string += `${once[number[i]]} `;
        if(number.length === 1)
            string += once[number[i]];
        if(number.length > 1 && i === 1) {
            string += ` ${once[number[i]]}`;
        }
    }
    return string;
}