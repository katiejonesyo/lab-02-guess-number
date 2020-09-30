import { compareNumbers } from '../compare-numbers.js';

const test = QUnit.test;

test('compare-numbers should take in two same numbers and return 0', (expect) => {
    const guess = 20;
    const correct = 20;
    const expected = 0;

    const actual = compareNumbers(guess, correct);
    expect.equal(actual, expected);
});

test('compare-numbers should take in two numbers and return 1', (expect) => {
    const guess = 20;
    const correct = 19;
    const expected = 1;
   
    const actual = compareNumbers(guess, correct);
    expect.equal(actual, expected);
});

test('compare-numbers should take in two numbers and return -1', (expect) => {
    const guess = 2;
    const correct = 7;
    const expected = -1;

    const actual = compareNumbers(guess, correct);
    expect.equal(actual, expected);
});