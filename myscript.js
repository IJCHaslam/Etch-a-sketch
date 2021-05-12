// Variables
let gridBox
let container
let button = document.getElementById('button');
let header = document.querySelector('h1');

// Initial input
window.onload = newGrid

// Check the input is correct
function newGrid() {
    let size = prompt("Pick a number between 1-64")
    if (size < 0 || size > 64 || !size)  {
    alert("THAT\'S NOT WHAT I TOLD YOU DO");
    newGrid();
    } else if (isNaN(size)) {
        alert("PICK A PROPER NUMBER, YOU CRETIN");
        newGrid()
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
           gridBox.addEventListener('mouseover', mouseOver);
           gridBox.addEventListener('mouseout', mouseLeave);
        }    
    } 
}

// Mouseover    
    function mouseOver(e) {
        const randomR = Math.floor(Math.random() * 256);
        const randomG = Math.floor(Math.random() * 256);
        const randomB = Math.floor(Math.random() * 256);
        e.target.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})`;
        document.body.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})`;
        header.style.cssText = `transform: scale(1.3); color: pink`
  }

  function mouseLeave(e) {
      header.style.cssText = "transform: scale(1)"
  }
