// Variables
let gridBox
let container
let button = document.getElementById('button');

// Initial input
window.onload = newGrid

// Check the input is correct
function newGrid() {
    let size = prompt("Pick a number between 1-64")
    if (size < 0 || size > 64 || !size)  {
    alert("Pick a proper number, you cretin");
    return;
    } else if (isNaN(size)) {
        alert("Pick a proper number, you cretin");
        return;
    } else insertGrid(size)
}

// Reload button functionality
button.addEventListener('click', reload);
function reload(){
    window.location.reload();
}

// Function to create a grid with a default size of 16x16
function insertGrid(size = 16) {
    container = document.getElementById('container');
    container.style.gridTemplateRows = `repeat(${size}, 1fr)`
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`
    for (let i = 1; i <= size; i++) {    
        for (let j = 0; j <= size; j++) {
            gridBox = document.createElement('div');
           container.appendChild(gridBox)
           gridBox.style.cssText = `grid-column: ${i}/ span 1; grid-row: ${j}/ span 1; border: 1px solid black;`
           gridBox.classList.add('gridBox'); 
           gridBox.addEventListener('mouseover', changeColor)
        }    
    } 
}

//Change colour
function changeColor(e) {
    const randomR = Math.floor(Math.random() * 256);
    const randomG = Math.floor(Math.random() * 256);
    const randomB = Math.floor(Math.random() * 256);
    e.target.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})`;
    document.body.style.backgroundColor = "rgb("+e.offsetX+",50, "+e.offsetY+")";
  }
