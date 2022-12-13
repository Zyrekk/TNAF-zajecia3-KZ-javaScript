const counter = document.querySelector('#count');
const addButton = document.querySelector('#add');
const colorButton = document.querySelector('#colorSwitch');
const resetButton = document.querySelector('#reset');
let ColorNow = '#A18276';

function reset(){
    counter.innerText = 0;
    counter.style.color = "#A18276";
    ColorNow = '#A18276';
}

function counterIteration(){
    let value = +counter.innerText;
    counter.innerText = value + 1;
}

function colorSwitch(){
    if(ColorNow === '#A18276') {
        counter.style.color = "#02394A";
        ColorNow = '#02394A';
    }
    else if(ColorNow === '#02394A') {
        counter.style.color = "#A18276";
        ColorNow = '#A18276';
    }
}

addButton.addEventListener('click', counterIteration);
colorButton.addEventListener('click', colorSwitch);
resetButton.addEventListener('click', reset);