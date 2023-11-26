var a=[1,2,3,4] //REST
const [one,two,...rest]=a
console.log(rest);

var b = [1,2,3,4,5,6] //SPREAD
console.log([...b]);




// PASS BY VALUE 
function increment(x) {
    x++;
    console.log(x); // Output: 6
  }
  
  let num = 5;
  increment(num);
  console.log(num); // Output: 5 (original value is unchanged)
  




//CHANGING OF TYPES
  let a=10
  console.log(typeof(a));
  let b= a.toString()
  console.log(b);
  console.log(typeof(b));



  let cV = "100"
  console.log(typeof(cV));
  let d= parseFloat(c)
  console.log(typeof(d));
  let e = parseInt(cV)
  console.log(typeof(e));



//CONCAT
  var z= [1,2,3,4,5]
  var y =[6,7,8,9]
  var x=z.concat(y)
  console.log(x);




  
  var z= "hai"
  var y ="manoj"
  var x=z.concat(y)
  console.log(x);




  //REPLACE AND REPLACE ALL
  var z="haai"
  var x=z.replaceAll("a","k")
  console.log(x);


  var z="haai"
  var x=z.replaceAll("a","k")
  console.log(x);



  //FIND
  let array =[1,2,{name:'subhin',age:30},4]
 let findObject = array.find((search) => search.name ==='subhin' )
 console.log(findObject);
 if(findObject){
    let age=findObject.age
    console.log(age);
 }



//PASS BY VALUE .NON PRIMITIVE ,IT AFFECT PARENT FIELD ALSO
const a= {name:'subhin',age:30}
const b=a //JUST GIVE THE REFFERENCE 
b.name="jeeva"
console.log(b);
console.log(a);
console.log('\n');


//HERE WE ARE NOT REEFFERENING JUST CREATE NEW OBJECT SAME AS PARENT USING SPREAD OPERAOTR
const z= {name:'subhin',age:30}
const c= {...z} //MAKE IT AS NEW 
c.name="chithu"
console.log(z);
console.log(c);
console.log('\n');




//HERE EVEN CREATING NEW OBJECT .CANT EDIT BECS USED FREEZE ,IT AVOID ALTERION, MAKE AN OBJECT IMMUTABLE
const x={name:'david',age:30}
const y=Object.freeze({...x})
y.name='david john kurishingal'
console.log(x);
console.log(y);
