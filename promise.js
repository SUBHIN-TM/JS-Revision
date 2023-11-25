var myFunction = (x) => {
  return new Promise((resolve, reject) => {
    try {
      console.log(
        "Hello",
        x,
        "your payament processing ID will get in 5 seconds"
      );
      setTimeout(() => {
        let k = "id numbert is 2255";
        resolve(k);
      }, 5000);
    } catch (error) {
      console.log(error);
      reject(error);
    }
  });
};

// METHOD 1

myFunction("subhin")
  .then((k) => {
    //promise resolve state
    try {
      console.log(k);
    } catch (error) {
      //insiode this block any error occur then this catch will took
      console.error(`error due to the inside then block ${error}`);
    }
  })
  .catch((error) => {
    //HERE THIS CATCH WILL FIND THE PROMISE CHAIN ERRORS,promise reject content
    console.error(`error dueto promise function ${error}`);
  })(
    // OR   METHOD 2

    async () => {
      try {
        console.log("writing inside aync function");
        let result = await myFunction("subhin");
        console.log(result);
      } catch (error) {
        console.error("due to", error);
      }
    }
  )();

//OR METHOD 3

async function calling() {
  try {
    console.log("writing inside aync function");
    let result = await myFunction("subhin");
    console.log(result);
  } catch (error) {
    console.error(error);
  }
}

calling();

// ARAFFU Promise

const p = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("ok");
  }, 5000);
});

async function a() {
  console.log("hii");
  const c = await p;
  console.log("gwfd");
  console.log(c);
}
a();

function sum(a,b) {
 try {
  return a + b

 } catch (error) {
  console.error(error);
 }

}

let result =sum(10,10)
console.log(result);

function model (a,b){
  return new Promise((resolve,reject) => {
   try{
    setTimeout(() => {
      resolve(a+b)
    },5000)

   }catch(error){
    console.error(error)
    reject(error)
   }

  })

}

async function call (){
  try {
    let result = await model(10,20)
    console.log(result);

  } catch (error) {
    console.error(error)
  }
}
call()

let hai = new Promise((resolve, reject) => {
  setTimeout(() => {
    try {
      resolve("collected");
    } catch (error) {
      reject(error);
    }
  }, 2000);
});


(async () => {
  try {
    let result = await hai;
    console.log(result);
  } catch (error) {
    console.error(error);
  }
})();


//methord call
async function h() {
  try {
   let result = await hai
   console.log(result);

  } catch (error) {
    console.error(error);
  }

}

h()
