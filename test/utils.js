import { compareNumbers } from '../compare-numbers.js';

const test = QUnit.test;

test('compare-numbers should take in two same numbers and return 0', (expect) => {
    const guess = 50;
    const correct = 50;
    const expected = 0;
    
    const actual = compareNumbers(guess, correct);

    expect.equal(actual, expected);
});

test('compare-numbers should take in two numbers and return 1', (expect) => {
    const guess = 50;
    const correct = 47;
    const expected = 1;
    
    const actual = compareNumbers(guess, correct);


    expect.equal(actual, expected);
});

test('compare-numbers should take in two numbers and return -1', (expect) => {
    const guess = 6;
    const correct = 47;
    const expected = -1;
    
    const actual = compareNumbers(guess, correct);

   
    expect.equal(actual, expected);
});