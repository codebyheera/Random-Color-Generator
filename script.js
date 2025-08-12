function random() {
    return Math.floor(Math.random() * 255)
}
function getcolors() {
    const r = random();
    const g = random();
    const b = random();
    return `rgb(${r},${g},${b})`
}
const output1 = getcolors();
document.getElementById(`one`).style.backgroundColor = output1;
document.getElementById(`one`).innerHTML = output1;

const output2 = getcolors();
document.getElementById(`two`).style.backgroundColor = output2;
document.getElementById(`two`).innerHTML = output2;

const output3 = getcolors();
document.getElementById(`three`).style.backgroundColor = output3;
document.getElementById(`three`).innerHTML = output3;

const output4 = getcolors();
document.getElementById(`four`).style.backgroundColor = output4;
document.getElementById(`four`).innerHTML = output4;

const output5 = getcolors();
document.getElementById(`five`).style.backgroundColor = output5;
document.getElementById(`five`).innerHTML = output5;

const output6 = getcolors();
document.getElementById(`six`).style.backgroundColor = output6;
document.getElementById(`six`).innerHTML = output6;

const output7 = getcolors();
document.getElementById(`seven`).style.backgroundColor = output7;
document.getElementById(`seven`).innerHTML = output7;

const output8 = getcolors();
document.getElementById(`eight`).style.backgroundColor = output8;
document.getElementById(`eight`).innerHTML = output8;

const output9 = getcolors();
document.getElementById(`nine`).style.backgroundColor = output9;
document.getElementById(`nine`).innerHTML = output9;

const output10 = getcolors();
document.getElementById(`ten`).style.backgroundColor = output10;
document.getElementById(`ten`).innerHTML = output10;

// Heading 
const output11 = getcolors();
document.getElementById(`eleven`).style.backgroundColor = output11;
// document.getElementById(`eleven`).innerHTML = output11;

const output12 = getcolors();
document.getElementById(`thirteen`).style.backgroundColor = output12;
document.getElementById(`thirteen`).innerHTML = output12;

const output13 = getcolors();
document.getElementById(`twelve`).style.backgroundColor = output13;
document.getElementById(`twelve`).innerHTML = output13;
