"use strict";

const btnDivin = document.getElementById('getDivin');

btnDivin.addEventListener('click', getDivination);

function getDivination() {
    const names = ['Татьяной','Ольгой','Ириной'];
    const professions = ['бухгалтер','маркетолог','программист'];
    const countries = ['США','Канаду','Россию'];
    const children = Math.floor((Math.random() * 3) + 2);
    const name = prompt("Введите ваше имя",'Имя')
    const divinantion = confirm("Вас интересует успех в личной жизни?");
    const list = document.getElementById('history');

    if(divinantion) {
        alert(`Вы заключите брак с ${names[Math.floor(Math.random() * names.length)]} и у вас будет ${children} детей.`);
        let li = document.createElement('li');
        li.appendChild(document.createTextNode(`Вы заключите брак с ${names[Math.floor(Math.random() * names.length)]} и у вас будет ${children} детей.`));
        list.appendChild(li);
    } else {
        confirm("Вас интересует успех в карьере?");
        alert(`Вы переедете в ${countries[Math.floor(Math.random() * countries.length)]} на должность ${professions[Math.floor(Math.random() * professions.length)]}`);
        let li = document.createElement('li');
        li.appendChild(document.createTextNode(`Вы переедете в ${countries[Math.floor(Math.random() * countries.length)]} на должность ${professions[Math.floor(Math.random() * professions.length)]}`));
        list.appendChild(li);
    }



}
