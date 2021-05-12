
// Function to create a grid with a default size of 16x16
function insertGrid(size = 16) {
    const container = document.getElementById('container');
    container.style.gridTemplateRows = `repeat(${size}, 1fr)`
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`
    for (let i = 1; i <= size; i++) {    
        for (let j = 0; j <= size; j++) {
           const gridBox = document.createElement('div');
           container.appendChild(gridBox)
           gridBox.style.cssText = `grid-column: ${i}/ span 1; grid-row: ${j}/ span 1; border: 1px solid black;`
           gridBox.classList.add('gridBox'); 
        }    
    } 
}

insertGrid()