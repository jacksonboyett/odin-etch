let grid = document.querySelector('.grid');
let length = 10;
let rows = length;
let cols = length;
let currentColor = 'blue';

// Create grid of variable size
for (let i = 0; i < rows; i++) {
    const row = document.createElement('div');
    grid.appendChild(row)
    row.classList.add('row');
    for (let j = 0; j < cols; j++) {
        const squares = document.createElement('div');
        squares.classList.add('square');
        row.appendChild(squares);
    }
};

// // Check to see if mouse is down over grid
// let mouseDown = false;
// document.body.onmousedown = () => {
//   mouseDown = true;
// };
// document.body.onmouseup = () => {
//   mouseDown = false;
// };

const square = document.querySelectorAll(`.square`);

square.forEach( function(element){
    element.addEventListener(`mouseover`,function (event){
        event.target.style.backgroundColor = 'blue';
    });
});