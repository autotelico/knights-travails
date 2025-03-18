/*
    Define a board
*/ 

const board = [];
const boardSize = 8**2;

// Populate board
for (let i = 0; i < 8; i++) {
    const row = [];
    for (let j = 0; j < 8; j++) {
        row.push([i, j]);
    }
    board.push(row);
}

// Knight starting point: [2,1]

console.log(board);
console.log(board[2][1]);

/**
 * 
 * @param {number[]} startPlace - Knight's current place. 
 * @param {number[]} moveTo - Place where the knight will move to.
 * @returns {void}
 */
function knightMoves(startPlace, moveTo) {

}


/**
 * Pseudocode
 * 
 * Knight starts at [2,1]
 * Find all moves from that position
 * Find out how many moves it'll take to get to (e.g.) [6,3]
 */
