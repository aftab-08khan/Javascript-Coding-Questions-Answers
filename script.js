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

let input = [1, 1, 1, 2, 2, 3, 3, 3, 3, 4, 5, 555, 555];
// output=[1,1,2,2,3,3,4,5]
function check(arr) {
  let obj = {};
  let opt = [];
  for (let i = 0; i < input.length; i++) {
    if (obj[arr[i]]) {
      obj[arr[i]] += 1;
    } else {
      obj[arr[i]] = 1;
    }
  }

  for (let key in obj) {
    if (obj[key] >= 2) {
      for (let i = 0; i < 2; i++) {
        opt.push(Number(key));
      }
    } else if (obj[key] === 1) {
      opt.push(Number(key));
    }
  }
  return opt;
}
console.log(check(input));
