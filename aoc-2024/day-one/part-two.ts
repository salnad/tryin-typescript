import assert from 'assert';
import { readFileSync } from 'fs';

const data = readFileSync('aoc-2024/day-one/input-one.txt', 'utf-8');
const lines = data.split('\n');

const pairs: [number, number][] = lines.map((line) => {
    const vals = line.split('   ');
    assert(vals.length === 2);
    return [+vals[0], +vals[1]];
});

const firstVals = pairs.map((pair) => pair[0]);
const secondValsCounts: Map<number, number> = new Map();
pairs.forEach((pair) => {
    const prevCount = secondValsCounts.get(pair[1]) ?? 0;
    secondValsCounts.set(pair[1], prevCount + 1);
});

const simScore = firstVals.reduce((acc, currVal) => acc + currVal * (secondValsCounts.get(currVal) ?? 0), 0);

console.log(simScore);