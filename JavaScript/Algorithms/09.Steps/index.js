// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n, row = 0, stair = '') {
    // if (row === n) then we have hit the end of the problem
    if(n === row) {
        return;
    }
    // if stair.length string === n then we its the end of the row
    if (n === stair.length) {
        console.log(stair)
        return steps(n, row + 1);
    }

    // if length of the stair string is
    // less than or equal to row (s <= r)
    // add # else ' '
    if (stair.length <= row) {
        stair += '#';
    }
    else {
        stair += ' ';
    }

    steps(n, row, stair);
}

module.exports = steps;
// MINE
// function steps(n) {
//     let hash = '#'
//     let space = ' ';
//     for(let i = 1; i <= n; i++) {
//       console.log(hash.repeat(i) + space.repeat(n - i));
//     }
// }

// IF NOT CONFIDENT ON RECURSIONS THEN THIS
// function steps(n) {
//     for(let row = 0; row < n; row++) {
//         let step = '';
//         for(let column = 0; column < n; column++) {
//             if(column <= row) {
//                 step += '#';
//             }
//             else {
//                 step += ' ';
//             }
//         }
//         console.log(step);
//     }
// }