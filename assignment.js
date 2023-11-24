// // 1.Write a function to find the maximum element in a array
// var a = [1,2,3]
// console.log(a.length);

// //2.Write a function to reverse a string
// var a ='ABC'
// let reverse = (a) => a.split("").reverse().join("")
// console.log(reverse(a));

// //3.Write a function to sort a array in ascending order
// var a = [8,20,2,3]
// let ascending = (a) =>  a.sort((a,b) => a-b)
// console.log(ascending(a));

// //4.Write a function to calculate the sum of all even numbers between 1 and n.
// var a=4
// function evenSum(n) {
//     let sum=0
//     for(let i=2;i<=n; i +=2){
//        sum +=i;
//     }
//     return sum;

// }

// console.log(evenSum(7));

// // 5.Write a function to check if a given number is prime.
// var a=2
// console.log(primeCheck(a));
// function primeCheck(n) {
//     for(let i=2; i<=(n/2); i++){
//         if(n%i==0){
//           return  "not prime number"
//         }
//     }
//     return "prime number"
// }

// // 6.Write a function to find the second largest number in a array
// var a =[10,8,1,2,3,4,9]
// let secondLargest= (a) =>a.sort((a,b) =>b-a)[1]
// console.log(secondLargest(a));

// // 7.Write a function to remove duplicates from a array
// var a = [1,2,3,3,4,5,5]
// let duplicates = (n) => {
//     let result = []
//     n.map((data) => {
//      if(!result.includes(data)){
//        result.push(data)
//      }
//     })

//     return result;
// }

// console.log(duplicates(a));

//METHORD 2
// // 7.Write a function to remove duplicates from a array
// var a = [1,2,3,3,4,5,5]
// let duplicates = (n) => {
//  let k= new Set([...n])
//  console.log(k);
// }
// duplicates(a)

// //8.Write a function to calculate the sum of all numbers in a array
// var a= [1,2,3,4]
// let sum =a.reduce((total,data) => total+ data,0)
// console.log(sum);

// //9.Write a function to generate all prime numbers up to a given limit
// var a=5
// function primeNumbers(number) {

//     for (let i =2 ; i <= number; i++){
//         let controller=true
//         for (let j = 2; j < i ; j++) {

//             if(i % j == 0){
//                 controller=false
//                 break;
//             }
//         }
//         if(controller){
//             console.log(i);
//         }

//     }
// }

// primeNumbers(a)

// //10.Write a program to find the maximum and minimum   elements in an array of integers.
// var a =[1,2,5,3,10,40,7]

// function maxAndMin(x) {
//    let array= x.sort((a,b) => a-b)
//     console.log("minimum Number is" ,array[0],"Maximum number is" , array[(array.length)-1]);
// }

// maxAndMin(a)

// //11.Write a function to calculate the factorial of a given number n

// var a=5
// function factorial(n) {
//     let result=1
//     for(i=1;i<=n;i++){
//      result *=i
//     }
//     console.log(result);

// }
// factorial(a)

// //12.Write a function to check given string is palindrome or not
// var a="malayalam"
// function palindrome(n) {
// let reverse = n.split("").reverse().join("")
// reverse === n ? console.log("palindrome"):console.log("not palindrome");
// }
// palindrome(a)

// 13.Write a function to check if a given number is an Armstrong number.
// var a= 153
// function Armstrong(a) {
//  let k =a.toString().split("").map(Number) //converted to arrayb as numbers
//   k.map((data) => Math.pow(data,k.length)).reduce((total,value) => total + value ,0) === a ? console.log("armstrong Number"):console.log("not amstriong number");
// };
// Armstrong(a)

//14.A program to print the Fibonacci series
// var a = 10
// function Fibonacci(a) {
//   let fb =[0,1]
//   for(let i=2;i<a;i++){
//     fb[i]=fb[i-1] + fb[i-2]
//   }
//   console.log(fb);

// }
// Fibonacci(a)

//15.Write a program to find the sum of all prime numbers up to a given limit.
// var a=5
// function primeNumbers(number) {
//   let result =[]

//     for (let i =2 ; i <= number; i++){
//         let controller=true
//         for (let j = 2; j < i ; j++) {

//             if(i % j == 0){
//                 controller=false
//                 break;
//             }
//         }
//         if(controller){
//            result.push(i)
//         }

//     }
//     console.log(result.reduce((total,value) => total + value ,0));
// }

// primeNumbers(a)

//16.Write a program to find the sum of all the multiples of 3 or 5 below a given number.
// function sumOfMultiples(n, limit) {
//   let sum =0;
// for (let i = 1; i <=limit; i++) {
//   i%n==0?sum += i:null;
// }
// return sum
// }

// console.log(sumOfMultiples(3, 3));

//17.Write a program to find the sum of all the even or odd numbers below a given number.
// function sumOfOddOrEven(limit) {
//   let evenSum=0
//   let oddSum=0
//   for(let i=1;i<=limit;i++){
//     i%2===0? evenSum +=i:oddSum +=i
//   }
//  return {evenSum,oddSum}
// }

// let result= sumOfOddOrEven(5)
// console.log(result);
// console.log(`sum of even number is ${result.evenSum} \n sum of odd number is ${result.oddSum}`);

// 18.Write a program to find the union of two arrays of integers.
// var a = [1, 2, 2, 3, 4];
// var b = [2, 4, 6];

// function union(a, b) {
//   let result = [];
//   a.map((data) => {
//     b.map((value) => {
//       if (value === data) {
//         if (!result.includes(value)) result.push(value);
//       }
//     });
//   });
//   return result;
// }

// console.log(union(a, b));

//19.Write a program to find the sum of the digits of a given number.
// function sumOfDigits(number) {
//   return number
//     .toString()
//     .split("")
//     .map(Number)
//     .reduce((total, data) => total + data, 0);
// }
// console.log(sumOfDigits(1234));


//20.Write a program to count the number of vowels in a given string.
// function vowels(a) {
//   let count = 0;
//   let vowels = ["a", "e", "i", "o", "u"];
//   a.split("").map((data) => {
//     vowels.map((value) => {
//       if (value === data) {
//         count++;
//       }
//     });
//   });
//   return count;
// }
// var a = "aaaei";
// console.log(vowels(a));


//METHOD 2
var a= 'hello'
function vowels(a) {
  let array = ["a", "e", "i", "o", "u"]
  return a.split("").filter((data) => array.includes(data)).length
}
console.log(vowels(a));

