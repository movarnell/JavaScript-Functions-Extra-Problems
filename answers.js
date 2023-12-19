// Below are answers to the basic JavaScript exercises for building functions. These are not the only way to solve these problems. If you have a different solution that gets the same answer that is fine. 

// Solution 1
function add(a, b) {
  return a + b;
}

// Solution 2
function hoursToSeconds(hours) {
  return hours * 3600;
}

// Solution 3
function toUpperCase(str) {
  return str.toUpperCase();
}

// Solution 4
function rectangleArea(length, width) {
  return length * width;
}

// Solution 5
function isEven(num) {
  return num % 2 === 0;
}

// Solution 6
function findLargest(a, b, c) {
  return Math.max(a, b, c);
}

// Solution 7
function countVowels(str) {
  let count = 0;
  const vowels = "aeiouAEIOU";
  for (let char of str) {
    if (vowels.includes(char)) {
      count++;
    }
  }
  return count;
}

// Solution 8
function reverseString(str) {
  return str.split("").reverse().join("");
}

// Solution 9
function factorial(num) {
  let result = 1;
  for (let i = 2; i <= num; i++) {
    result *= i;
  }
  return result;
}

// Solution 10
function celsiusToFahrenheit(celsius) {
  return (celsius * 9) / 5 + 32;
}

// Solution 11
function randomNumber() {
  return Math.floor(Math.random() * 10) + 1;
}

// Solution 12
function isPrime(num) {
  if (num <= 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

// Solution 13
function fibonacci(n) {
  let a = 0,
    b = 1,
    c;
  if (n === 0) return a;
  for (let i = 2; i <= n; i++) {
    c = a + b;
    a = b;
    b = c;
  }
  return b;
}

// Solution 14
function binaryToDecimal(binary) {
  return parseInt(binary, 2);
}

// Solution 15
function getCurrentDate() {
  const date = new Date();
  return date.toISOString().split("T")[0];
}

// Solution 16
function circlePerimeter(radius) {
  return 2 * Math.PI * radius;
}

// Solution 17
function arrayOfNumbers(n) {
  const array = [];
  for (let i = 1; i <= n; i++) {
    array.push(i);
  }
  return array;
}

// Solution 18
function isPalindrome(str) {
  return str === str.split("").reverse().join("");
}

// Solution 19
function gcd(a, b) {
  while (b !== 0) {
    let t = b;
    b = a % b;
    a = t;
  }
  return a;
}

// Solution 20
function isDivisibleBy5And11(num) {
  return num % 5 === 0 && num % 11 === 0;
}

// Solution 21
function ageInDays(age) {
  return age * 365;
}

// Solution 22
function stringLength(str) {
  return str.length;
}

// Solution 23
function sumArray(numbers) {
  return numbers.reduce((acc, curr) => acc + curr, 0);
}

// Solution 24
function findLongestWord(sentence) {
  let words = sentence.split(" ");
  let longest = "";
  for (let word of words) {
    if (word.length > longest.length) {
      longest = word;
    }
  }
  return longest;
}

// Solution 25
function startsWith(str, letter) {
  return str.startsWith(letter);
}
