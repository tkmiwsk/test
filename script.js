// script.js

const grid = document.getElementById('grid');

// Initialize a 9x9 Sudoku grid
const sudokuGrid = Array.from({ length: 9 }, () => Array(9).fill(0));

// Generate the grid on the webpage
function createGrid() {
    for (let row = 0; row < 9; row++) {
        for (let col = 0; col < 9; col++) {
            const cell = document.createElement('input');
            cell.type = 'text';
            cell.maxLength = 1;
            cell.classList.add('cell');
            cell.dataset.row = row;
            cell.dataset.col = col;

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
        if (sudokuGrid[row][col] !== 0) {
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
