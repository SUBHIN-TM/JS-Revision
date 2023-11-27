//PROMISE ALL

// const promise1 = Promise.resolve(1);
// const promise2 = Promise.resolve(2);
// const promise3 = Promise.resolve(3);

// Promise.all([promise1, promise2, promise3])
//   .then(values => console.log(values))
//   .catch(error => console.error(error));



//PROMISE RACE  OP IS DEPEND WHICH ONE 1ST SETTELED THE OUTPUT IS THAT
// const promise1 = new Promise(resolve => setTimeout(resolve, 5000, 'one'));
// const promise2 = new Promise(resolve => setTimeout(resolve, 100000, 'two'));

// Promise.race([promise1, promise2])
//   .then(result => console.log(result))
//   .catch(error => console.error(error));



//PROMISE ANY
const promise1 = new Promise((resolve, reject) => setTimeout(reject, 500, 'one'));
const promise2 = new Promise((resolve,reject) => setTimeout(reject, 1000, 'two'));

Promise.any([promise1, promise2])
  .then(result => console.log(result))
  .catch(error => console.error(error));
