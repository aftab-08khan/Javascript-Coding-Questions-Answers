// 1) Write a function to reverse a string.
// console.log("Write a function to reverse a string Method 1");

// function reverseAString(str) {
//   let reverseStr = "";

//   for (let i = str.length - 1; i >= 0; i--) {
//     reverseStr += str[i];
//   }
//   return reverseStr;
// }
// console.log(reverseAString("Hello"));
// console.log("Write a function to reverse a string Method 2");
// function reverseAString2(str) {
//   let rerverseStr = str.split("").reverse().join("");
//   return rerverseStr;
// }
// console.log(reverseAString2("Aftab"));

// 2. Write a function to find the largest number in an array.
// console.log("2. Write a function to find the largest number in an array.");

// function largestNum(arr) {
//   let largest = -Infinity;
//   let secondLargest = -Infinity;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > largest) {
//       secondLargest = largest;
//       largest = arr[i];
//     }
//   }
//   return largest;
// }
// console.log(largestNum([1, 23, 65, 732, 23, -900]));

// 3. Write a program to remove duplicate values from an array.

// console.log("3. Write a program to remove duplicate values from an array.");

// function removeDuplicate(arr) {
//   let duplicateArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (!duplicateArr.includes(arr[i])) {
//       duplicateArr.push(arr[i]);
//     }
//   }
//   return duplicateArr;
// }
// console.log(removeDuplicate([2, 3, 23, 2, 34, 12, 34, 43, 43, 12, 34, 12]));

// function removeDuplicate2(arr) {
//   let duplicate = new Set(arr);

//   return [...duplicate];
// }
// console.log(removeDuplicate2([2, 3, 23, 2, 34, 12, 34, 43, 43, 12, 34, 12]));

// 4. Write a function to check if a string is a palindrome.
// console.log("4. Write a function to check if a string is a palindrome.");

// function palindrome(str) {
//   let reverseStr = "";

//   for (let i = str.length - 1; i >= 0; i--) {
//     reverseStr += str[i];
//   }
//   return reverseStr === str;
// }
// console.log(palindrome("ada"));

// 5. Write a program to find the factorial of a given number.

// console.log("5. Write a program to find the factorial of a given number.");

// function factorial(num) {
//   let output = 1;
//   for (let i = 1; i <= num; i++) {
//     console.log(i);

//     output *= i;
//   }
//   return output;
// }
// console.log(factorial(4));

// 6. Write a function to generate Fibonacci series up to n terms

// console.log("6. Write a function to generate Fibonacci series up to n terms");

// function Fibonacci(num) {
//   let num1 = 0;
//   let num2 = 1;
//   let sum;
//   for (let i = 1; i < num; i++) {
//     sum = num1 + num2;
//     num1 = num2;
//     num2 = sum;
//   }
//   return sum;
// }
// console.log(Fibonacci(10));

// 7. Sum of all numbers in an array.
// console.log("7. Sum of all numbers in an array.");

// function sum(arr) {
//   let sumArr = arr.reduce((acc, curr) => acc + curr);
//   return sumArr;
// }
// console.log(sum([1, 2, 34, 3, 45, 56654, 89]));

// function sum(arr) {
//   let output = null;
//   for (let i = 0; i < arr.length; i++) {
//     output += arr[i];
//   }
//   return output;
// }
// console.log(sum([1, 12, 2, 3, 4, 5, 6, 7, 7, 8, 10]));

// 8. Find the second largest number in an array.

// console.log("8. Find the second largest number in an array.");

// function secondLargest(arr) {
//   let largest = -Infinity;
//   let secondLargest = -Infinity;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > largest) {
//       secondLargest = largest;
//       largest = arr[i];
//     } else if (secondLargest < largest && secondLargest <= arr[i]) {
//       secondLargest = arr[i];
//     }
//   }
//   return secondLargest;
// }
// console.log(secondLargest([1, 2, 43, 432, 5346, 7562, 7]));

// 9. Write a function to check if a number is prime.

// console.log("9. Write a function to check if a number is prime.");

// function checkPrime(num) {
//   let isPrime = true;
//   if (num === 2) {
//     isPrime = true;
//   } else if (num <= 1) {
//     console.log("Neither Prime nor Composite");
//   }
//   for (let i = 2; i < num; i++) {
//     if (i % num === 0) {
//       isPrime = false;
//     }
//   }
//   if (isPrime === true) {
//     isPrime = true;
//   }
//   return isPrime;
// }
// console.log(checkPrime(3));

// 10. Write a function to calculate the power of a number (x^n).
// console.log("10. Write a function to calculate the power of a number (x^n).");

// let input = [1, 1, 1, 2, 2, 3, 3, 3, 3, 4, 5, 555, 555];
// // output=[1,1,2,2,3,3,4,5]
// function check(arr) {
//   let obj = {};
//   let opt = [];
//   for (let i = 0; i < input.length; i++) {
//     if (obj[arr[i]]) {
//       obj[arr[i]] += 1;
//     } else {
//       obj[arr[i]] = 1;
//     }
//   }

//   for (let key in obj) {
//     if (obj[key] >= 2) {
//       for (let i = 0; i < 2; i++) {
//         opt.push(Number(key));
//       }
//     } else if (obj[key] === 1) {
//       opt.push(Number(key));
//     }
//   }
//   return opt;
// }
// console.log(check(input));

// 11. Write a function to find the smallest number in an array.
// console.log("11. Write a function to find the smallest number in an array.");

// function smallestNum(arr) {
//   arr.sort((a, b) => a - b);
//   return arr[0];
// }

// console.log(smallestNum([2, 1, 3, 23, 4, 4, 43, 9]));

// function smallestNum(arr) {
//   let prev = Infinity;
//   for (let i = 0; i < arr.length; i++) {
//     if (prev > arr[i]) {
//       prev = arr[i];
//     }
//   }
//   return prev;
// }
// console.log(smallestNum([2, 3, -1, 34, 32, 535, 5, 6456, 456]));

// 12. Write a function to count the number of words in a string.
// console.log("12. Write a function to count the number of words in a string.");

// function countNumOfWords(str) {
//   let arr = str.split(" ");

//   let count = 0;
//   for (let i = 0; i < arr.length; i++) {
//     count++;
//   }
//   return count;
// }
// console.log(countNumOfWords("hello Javascript Hello React"));

// 13. Write a function to check if a given year is a leap year.
// console.log("13. Write a function to check if a given year is a leap year.");

// function leapYear(year) {
//   if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
//     console.log(`${year} is a leap year`);
//   } else {
//     console.log(`${year} is not a leap year`);
//   }
// }
// console.log(leapYear(2024));

// 14. Write a function to remove vowels from a string.
// console.log("14. Write a function to remove vowels from a string.");

// function vowels(str) {
//   let vowels = "aeiou".split("");
//   let result = [];
//   for (let i = 0; i < str.length; i++) {
//     if (vowels.includes(str[i])) {
//       result.push(str[i]);
//     }
//   }
//   return result;
// }

// console.log(vowels("aftabe khan"));

// 15. Write a function to check if a string contains only digits.
// console.log("15. Write a function to check if a string contains only digits.");

// function digits(str) {
//   return str !== " " && str.split("").every((chr) => chr >= "0" && chr <= "9");
// }
// console.log(digits("122344"));
// function digits(str) {
//   return str !== "" && parseInt(str).toString() === str;
// }
// console.log(digits("122344"));

// 16. Write a function to find the sum of digits of a number.
// console.log("16. Write a function to find the sum of digits of a number.");

// function sumOfDigits(num) {
//   let toStr = num.toString();
//   let result = 0;
//   for (let i = 0; i < toStr.length; i++) {
//     result += Number(toStr[i]);
//   }
//   return result;
// }
// console.log(sumOfDigits(12341455));

// 17. Write a function to check if all elements in an array are unique.
// console.log(
//   "17. Write a function to check if all elements in an array are unique."
// );

// function uniqueElement(arr) {
//   let duplicate = [];
//   let res = true;
//   for (let i = 0; i < arr.length; i++) {
//     if (!duplicate.includes(arr[i])) {
//       duplicate.push(arr[i]);
//       res = true;
//     } else {
//       return false;
//     }
//   }
//   return res;
// }
// console.log(uniqueElement([1, 2, 3, 2, 4, 55]));

// function uniqueElement(arr) {
//   return new Set(arr).size === arr.length;
// }
// console.log(uniqueElement([1, 2, 3, 4, 5, 6]));

// 21. Write a function to find the longest word in a string.
// console.log("21. Write a function to find the longest word in a string.");

// function longestWord(word) {
//   let arr = word.split(" ");
//   let length = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (length < arr[i].length) {
//       length = arr[i].length;
//     }
//   }
//   return length;
// }
// console.log(longestWord("hellossssssss this javascript code"));

// 22. Write a function to implement a basic calculator (add, subtract, multiply, divide).

// console.log(
//   "22. Write a function to implement a basic calculator (add, subtract, multiply, divide)."
// );

// // 23. Write a function to flatten a nested array.
// console.log("23. Write a function to flatten a nested array.");
// let arr = [12, [2, 2, 2, [2, 333343, 545], [45, 2, 5, 3, 2]]].flat(Infinity);
// console.log(arr);

// function flattenArray(arr) {
//   let result = [];
//   innerArrayFlatten(arr);
//   function innerArrayFlatten(arr) {
//     for (let i = 0; i < arr.length; i++) {
//       if (Array.isArray(arr[i])) {
//         innerArrayFlatten(arr[i]);
//       } else {
//         result.push(arr[i]);
//       }
//     }
//   }
//   return result;
// }
// console.log(flattenArray([12, [2, 2, 2, [2, 333343, 545], [45, 2, 5, 3, 2]]]));

// // 24. Write a function to check for anagrams between two strings.

// console.log("24. Write a function to check for anagrams between two strings.");

// function anagrams(str1, str2) {
//   let sort1 = str1.split("").sort();
//   let sort2 = str2.split("").sort();
//   if (sort1.length === sort2.length) {
//     if (sort1.join("") === sort2.join("")) {
//       console.log("is an anagrams");
//     } else {
//       console.log("not an anagrams");
//     }
//   }
//   // return sort1.join("") === sort2.join("");
// }
// console.log(anagrams("mug", "gum"));

// 25. Write a program to find the missing number in an array.
// console.log("25. Write a program to find the missing number in an array.");

// function missingNumber(arr) {
//   let sort = arr.sort((a, b) => a - b);
//   // console.log(sort[0], sort[sort.length - 1]);

//   for (let i = 0; i < sort.length - 1; i++) {
//     if (sort[i] + 1 !== sort[i + 1]) {
//       return sort[i] + 1;
//     }
//   }
//   return null;
// }
// console.log(missingNumber([1, 3, 2, 4, 5, 6, 8, 7, 10, 9]));

// 26. Write a function to sort an array without using sort().

// console.log("26. Write a function to sort an array without using sort().");

// function bubbleSort(arr) {
//   let n = arr.length;

//   for (let i = 0; i < n - 1; i++) {
//     let swapped = false;
//     for (let j = 0; j < n - 1 - i; j++) {
//       if (arr[j] > arr[j + 1]) {
//         let temp = arr[j];
//         arr[j] = arr[j + 1];
//         arr[j + 1] = temp;
//         swapped = true;
//       }
//     }
//     if (!swapped) {
//       break;
//     }
//   }
//   return arr;
// }
// console.log(bubbleSort([2, 5, 1, 9, 6, 4]));

// 26. Rotate an array to the right by k steps.
// console.log(" Rotate an array to the right by k steps.");

// function rotateAnArray(k, arr) {
//   let n = arr.length;
//   k = k % n;
//   let last = arr.slice(0, n - k);

//   let first = arr.slice(n - k);
//   return [...first, ...last];
// }

// console.log(rotateAnArray(4, [5, 6, 7, 8, 0, 1, 2, 3]));

// 28. Count occurrences of each element in an array.
// console.log("28. Count occurrences of each element in an array.");

// function countOccOfArr(arr) {
//   let obj = {};
//   for (let i = 0; i < arr.length; i++) {
//     if (obj[arr[i]]) {
//       obj[arr[i]] += 1;
//     } else {
//       obj[arr[i]] = 1;
//     }
//   }
//   return obj;
// }

// console.log(countOccOfArr([1, 2, 3, 4, "hello", 5, 6, "aftab0", "aftab0"]));
