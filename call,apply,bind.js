//CALL METHORD
const data = {name:'salman',age:23,place:'malappuram'}

function trys(x) {
    console.log(x,this.name,this.place);  
}
trys.call(data,"hello")



// NORMAL METHORD 
function normal(x,y,z) {
    console.log(x,y,z);   
}

normal("hello",data.name,data.place)




//APPPLY METHORD IT ARGUMENTS ACCEPT AS AN ARRAY
function sayHello(message) {
    console.log(message + ' ' + this.name);
  }
  
  var person = { name: 'John' };
  
  sayHello.apply(person, ['Hello']); // Output: Hello John
  


  //BIND METHOD
  function sayHello(message) {
    console.log(message + ' ' + this.name);
  }
  
  var person = { name: 'John' };
  const sayHelloToJohn = sayHello.bind(person);
  
  sayHelloToJohn('Hello'); // Output: Hello John
  