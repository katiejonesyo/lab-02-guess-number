// import { example } from '../example.js';
import { compareNumbers } from '../compare-numbers.js';

const test = QUnit.test;

test('compare-numbers should take in two same numbers and return 0', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const guess = 10;
    const correct = 10;
    const expected = 0;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = compareNumbers(guess, correct);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('compare-numbers should take in two numbers and return 1', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const guess = 10;
    const correct = 8;
    const expected = 1;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = compareNumbers(guess, correct);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('compare-numbers should take in two numbers and return -1', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const guess = 3;
    const correct = 8;
    const expected = -1;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = compareNumbers(guess, correct);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});