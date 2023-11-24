//CAN DO SOME FUNCTIONS AND IT WILL RETURN A NEW ARRAY

const numbers = [1,2,9,4,5]
 let k=numbers.map((data,index,array) => data*index )
console.log(k);
console.log("\n");


let trys = [10,20,30]
let output = trys.map(callBack)

function callBack(data,index,value) {
 return data * 2
}
console.log(output);