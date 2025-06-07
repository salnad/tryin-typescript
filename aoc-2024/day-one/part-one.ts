import assert from 'assert';
import { readFileSync } from 'fs';

const data = readFileSync('aoc-2024/day-one/input-one.txt', 'utf-8');
const lines = data.split('\n');

const pairs: [number, number][] = lines.map((line) => {
    const vals = line.split('   ');
    console.log(vals);
    assert(vals.length === 2);
    return [+vals[0], +vals[1]];
});

let firstValsSorted = pairs.map((pair) => pair[0]).sort();
let secondValsSorted = pairs.map((pair) => pair[1]).sort();

const diff = firstValsSorted.reduce((acc, currVal, idx) => acc + Math.abs(currVal - secondValsSorted[idx]), 0);

console.log(diff);

// let firstVals: number[] = [];
// let secondVals: number[] = [];

// for (let line of lines) {
//     const vals = line.split('   ');
//     console.log(line);
//     console.log(vals);
//     assert(vals.length === 2);
//     firstVals = firstVals.concat([+vals[0]]);
//     secondVals = secondVals.concat([+vals[1]]);
// }

// const firstValsSorted = firstVals.sort();
// const secondValsSorted = secondVals.sort();

// let difference = 0;
// for (let i = 0; i < firstValsSorted.length; i++) {
//     console.log(`for idx ${i} diff is ${Math.abs(firstValsSorted[i] - secondValsSorted[i])}`);
//     difference += Math.abs(firstValsSorted[i] - secondValsSorted[i]);
// }

// console.log(difference);