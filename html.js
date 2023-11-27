// console.log(KKKK);
// var KKKK = 100



// HHHH()
// function HHHH(params) {
//     let TTTT = 100
//     var ZZZZ=800
//     const XXXX=90
//     console.log(TTTT);
    
// }


// CCCC()

// var CCCC=function () {
//      var SSSS=200
//      let QQQQ=300
//      console.log(SSSS,QQQQ);
    
// }

// let GGGG= ()=> {
//     var OOOO=900
//     console.log(OOOO);
// } 


// (() => {
//     console.log("function printed");
// })();

// (function () {
//     console.log("heoolo");
// })()


// var a=10
// var b=20
// a=a+b
// b=a-b
// a=a-b
// console.log("a =",a);
// console.log("b =",b);





function divide(x, y) {
    if (y === 0) {
        throw new Error("Cannot divide by zero");
    }
    return x / y;
}






try {
    let result = divide(10, 0);
    console.log(result); // This line won't be executed if an exception is thrown
} catch (error) {
    console.error(error.message); // Outputs: "Cannot divide by zero"
}
