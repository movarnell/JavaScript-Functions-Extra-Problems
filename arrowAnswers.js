// The following are the same answers, but converted into arrow functions. Notice how much shorter the code is. This is one of the benefits of using arrow functions. Arrow functions are called in the same way as regular functions. The only difference is the syntax.

// Solution 1
const add = (a, b) => a + b;

// Solution 2
const hoursToSeconds = hours => hours * 3600;

// Solution 3
const toUpperCase = str => str.toUpperCase();

// Solution 4
const rectangleArea = (length, width) => length * width;

// Solution 5
const isEven = num => num % 2 === 0;

// Solution 6
const findLargest = (a, b, c) => Math.max(a, b, c);

// Solution 7
const countVowels = str => {
    let count = 0;
    const vowels = "aeiouAEIOU";
    for (let char of str) {
        if (vowels.includes(char)) {
            count++;
        }
    }
    return count;
};

// Solution 8
const reverseString = str => str.split('').reverse().join('');

// Solution 9
const factorial = num => {
    let result = 1;
    for (let i = 2; i <= num; i++) {
        result *= i;
    }
    return result;
};

// Solution 10
const celsiusToFahrenheit = celsius => (celsius * 9/5) + 32;

// Solution 11
const randomNumber = () => Math.floor(Math.random() * 10) + 1;

// Solution 12
const isPrime = num => {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
};

// Solution 13
const fibonacci = n => {
    let a = 0, b = 1, c;
    if (n === 0) return a;
    for (let i = 2; i <= n; i++) {
        c = a + b;
        a = b;
        b = c;
    }
    return b;
};

// Solution 14
const binaryToDecimal = binary => parseInt(binary, 2);

// Solution 15
const getCurrentDate = () => {
    const date = new Date();
    return date.toISOString().split('T')[0];
};

// Solution 16
const circlePerimeter = radius => 2 * Math.PI * radius;

// Solution 17
const arrayOfNumbers = n => {
    const array = [];
    for (let i = 1; i <= n; i++) {
        array.push(i);
    }
    return array;
};

// Solution 18
const isPalindrome = str => str === str.split('').reverse().join('');

// Solution 19
const gcd = (a, b) => {
    while (b !== 0) {
        let t = b;
        b = a % b;
        a = t;
    }
    return a;
};

// Solution 20
const isDivisibleBy5And11 = num => num % 5 === 0 && num % 11 === 0;

// Solution 21
const ageInDays = age => age * 365;

// Solution 22
const stringLength = str => str.length;

// Solution 23
const sumArray = numbers => numbers.reduce((acc, curr) => acc + curr, 0);

// Solution 24
const findLongestWord = sentence => {
    let words = sentence.split(' ');
    let longest = '';
    for (let word of words) {
        if (word.length > longest.length) {
            longest = word;
        }
    }
    return longest;
};

// Solution 25
const startsWith = (str, letter) => str.startsWith(letter);
