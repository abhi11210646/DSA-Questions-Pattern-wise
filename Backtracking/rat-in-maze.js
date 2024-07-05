// Given a square matrix of size 4*4 (i.e. here 'N' = 4):
// 1 0 0 0
// 1 1 0 0
// 1 1 0 0
// 0 1 1 1 
// Expected Output:
// DDRDRR DRDDRR 
// i.e. Path-1: DDRDRR and Path-2: DRDDRR

// https://www.geeksforgeeks.org/rat-in-a-maze-problem-when-movement-in-all-possible-directions-is-allowed/


function rat_in_maze(board) {
    const solution = [];
    const ROW = board.length, COLUMN = board[0].length;
    function maze(i, j, state) {
        if (i == ROW - 1 && j == COLUMN - 1) {
            solution.push(state);
            return true;
        }
        // check valid case
        if (i < 0 || j < 0 || i >= ROW || j >= COLUMN || arr[i][j] != 1) {
            return false;
        }

        board[i][j] = 0; // mark as visited

        maze(i + 1, j, state + "D")
        maze(i - 1, j, state + "U")
        maze(i, j + 1, state + "R")
        maze(i, j - 1, state + "L")

        board[i][j] = 1 // backtrack
        return solution;
    }
    return maze(0, 0, "");
}

const arr = [
    [1, 0, 0, 0, 0],
  [1, 1, 1, 1, 1],
  [1, 1, 1, 0, 1],
  [0, 0, 0, 0, 1],
  [0, 0, 0, 0, 1],
]
console.log(rat_in_maze(arr))


