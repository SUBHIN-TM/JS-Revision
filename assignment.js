// 1.Write a function to find the maximum element in a array
var a = [1,2,3]
console.log(a.length);


//2.Write a function to reverse a string 
var a ='ABC'
let reverse = (a) => a.split("").reverse().join("")
console.log(reverse(a));


//3.Write a function to sort a array in ascending order
var a = [8,20,2,3]
let ascending = (a) =>  a.sort((a,b) => a-b)
console.log(ascending(a));



//4.Write a function to calculate the sum of all even numbers between 1 and n.
var a=4
function evenSum(n) {
    let sum=0
    for(let i=2;i<=n; i +=2){
       sum +=i;
    }
    return sum;
    
}

console.log(evenSum(7));




// 5.Write a function to check if a given number is prime.
var a=2
console.log(primeCheck(a));
function primeCheck(n) {
    for(let i=2; i<=(n/2); i++){
        if(n%i==0){
          return  "not prime number"
        }
    }
    return "prime number"    
}



// 6.Write a function to find the second largest number in a array
var a =[10,8,1,2,3,4,9]
let secondLargest= (a) =>a.sort((a,b) =>b-a)[1] 
console.log(secondLargest(a));



// 7.Write a function to remove duplicates from a array
var a = [1,2,3,3,4,5,5]
let duplicates = (n) => {
    let result = []
    n.map((data) => {  
     if(!result.includes(data)){
       result.push(data)
     }
    })
     
    return result;
}


console.log(duplicates(a));


//8.Write a function to calculate the sum of all numbers in a array
var a= [1,2,3,4]
let sum =a.reduce((total,data) => total+ data,0)
console.log(sum);




//9.Write a function to generate all prime numbers up to a given limit
var a=5
function primeNumbers(number) {
   
    for (let i =2 ; i <= number; i++){
        let controller=true
        for (let j = 2; j < i ; j++) {
           
            if(i % j == 0){
                controller=false
                break;
            }
        }
        if(controller){
            console.log(i);
        }
       
    }
}

primeNumbers(a)



//10.Write a program to find the maximum and minimum   elements in an array of integers.
var a =[1,2,5,3,10,40,7]
function maxAndMin(x) {

   let array= x.sort((a,b) => a-b)
    console.log("minimum Number is" ,array[0],"Maximum number is" , array[(array.length)-1]);
   
}

maxAndMin(a)
