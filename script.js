// script.js

const grid = document.getElementById('grid');

// Predefined Sudoku puzzle (0 represents an empty cell)
const initialPuzzle = [
    [5, 3, 0, 0, 7, 0, 0, 0, 0],
    [6, 0, 0, 1, 9, 5, 0, 0, 0],
    [0, 9, 8, 0, 0, 0, 0, 6, 0],
    [8, 0, 0, 0, 6, 0, 0, 0, 3],
    [4, 0, 0, 8, 0, 3, 0, 0, 1],
    [7, 0, 0, 0, 2, 0, 0, 0, 6],
    [0, 6, 0, 0, 0, 0, 2, 8, 0],
    [0, 0, 0, 4, 1, 9, 0, 0, 5],
    [0, 0, 0, 0, 8, 0, 0, 7, 9]
];

// Copy the predefined puzzle to the working grid
const sudokuGrid = initialPuzzle.map(row => [...row]);

// Generate the grid on the webpage
function createGrid() {
    grid.style.display = 'grid';
    grid.style.gridTemplateRows = 'repeat(9, 1fr)';
    grid.style.gridTemplateColumns = 'repeat(9, 1fr)';
    grid.style.width = '360px';
    grid.style.height = '360px';
    grid.style.margin = '50px auto';
    grid.style.border = '2px solid black';

    for (let row = 0; row < 9; row++) {
        for (let col = 0; col < 9; col++) {
            const cell = document.createElement('input');
            cell.type = 'text';
            cell.maxLength = 1;
            cell.classList.add('cell');
            cell.dataset.row = row;
            cell.dataset.col = col;

            if (initialPuzzle[row][col] !== 0) {
                cell.value = initialPuzzle[row][col];
                cell.disabled = true;
                cell.classList.add('fixed');
            } else {
                // Handle input validation
                cell.addEventListener('input', (e) => {
                    const value = parseInt(e.target.value, 10);
                    if (isNaN(value) || value < 1 || value > 9) {
                        e.target.value = '';
                    } else {
                        sudokuGrid[row][col] = value;
                        if (isValid(row, col, value)) {
                            e.target.classList.add('highlight');
                        } else {
                            e.target.classList.remove('highlight');
                        }
                    }
                });
            }

            cell.style.border = '1px solid gray';
            cell.style.textAlign = 'center';
            cell.style.fontSize = '18px';
            grid.appendChild(cell);
        }
    }
}

// Check if a number is valid in a specific cell
function isValid(row, col, num) {
    // Check row and column
    for (let i = 0; i < 9; i++) {
        if (sudokuGrid[row][i] === num && i !== col) return false;
        if (sudokuGrid[i][col] === num && i !== row) return false;
    }

    // Check 3x3 subgrid
    const startRow = Math.floor(row / 3) * 3;
    const startCol = Math.floor(col / 3) * 3;
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (
                sudokuGrid[startRow + i][startCol + j] === num &&
                (startRow + i !== row || startCol + j !== col)
            ) {
                return false;
            }
        }
    }

    return true;
}

// Solve the Sudoku using backtracking
function solveSudoku() {
    for (let row = 0; row < 9; row++) {
        for (let col = 0; col < 9; col++) {
            if (sudokuGrid[row][col] === 0) {
                for (let num = 1; num <= 9; num++) {
                    if (isValid(row, col, num)) {
                        sudokuGrid[row][col] = num;
                        if (solveSudoku()) return true;
                        sudokuGrid[row][col] = 0;
                    }
                }
                return false;
            }
        }
    }
    return true;
}

// Populate the grid with the solution
function fillGrid() {
    const cells = document.querySelectorAll('.cell');
    cells.forEach((cell) => {
        const row = parseInt(cell.dataset.row, 10);
        const col = parseInt(cell.dataset.col, 10);
        if (sudokuGrid[row][col] !== 0 && !cell.classList.contains('fixed')) {
            cell.value = sudokuGrid[row][col];
            cell.classList.add('highlight');
        }
    });
}

// Add event listeners to buttons
document.getElementById('hint-button').addEventListener('click', () => {
    solveSudoku();
    fillGrid();
});

document.getElementById('solve-button').addEventListener('click', () => {
    if (solveSudoku()) {
        fillGrid();
    } else {
        alert('No solution exists!');
    }
});

// Initialize the game
createGrid();
