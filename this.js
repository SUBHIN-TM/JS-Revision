// var j=200
// function prints(params) {
//     let j=this.j
//     return j
// }

// console.log(prints());



// const some ={
//     name:'salm',
//     age:200,
//     trys:function name(params) {
//         console.log(this.name);
        
//     }
// }

// some.trys()



var a = [1, 2, 2, 3, 4];
var b = [2, 4, 6];

function union(a, b) {
  let m=a.concat(b)
  let result = new Set ([...m])

  return Array.from(result)
}

console.log(union(a, b));




 // 7.Write a function to remove duplicates from a array
// var a = [1,2,3,3,4,5,5]
// let duplicates = (n) => {
//  let k= new Set([...n])
//  let final=Array.from(k)
//  console.log(final);
// }
// duplicates(a)
