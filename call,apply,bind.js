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
