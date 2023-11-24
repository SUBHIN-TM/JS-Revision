// var a=[1,2,3,4] //REST
// const [one,two,...rest]=a
// console.log(rest);

// var b = [1,2,3,4,5,6] //SPREAD
// console.log([...b]);




// PASS BY VALUE 
function increment(x) {
    x++;
    console.log(x); // Output: 6
  }
  
  let num = 5;
  increment(num);
  console.log(num); // Output: 5 (original value is unchanged)
  





  let a=10
  console.log(typeof(a));
  let b= a.toString()
  console.log(b);
  console.log(typeof(b));



  let c = "100"
  console.log(typeof(c));
  let d= parseFloat(c)
  console.log(typeof(d));
  let e = parseInt(c)
  console.log(typeof(e));




  var z= [1,2,3,4,5]
  var y =[6,7,8,9]
  var x=z.concat(y)
  console.log(x);




  
  var z= "hai"
  var y ="manoj"
  var x=z.concat(y)
  console.log(x);



  var z="haai"
  var x=z.replaceAll("a","k")
  console.log(x);


  var z="haai"
  var x=z.replaceAll("a","k")
  console.log(x);



  
  let array =[1,2,{name:'subhin',age:30},4]
 let findObject = array.find((search) => search.name ==='subhin' )
 console.log(findObject);
 if(findObject){
    let age=findObject.age
    console.log(age);
 }