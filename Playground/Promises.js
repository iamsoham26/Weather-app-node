var simpleAddition = (a, b) => {
  return new Promise((resolve, reject) => {
    setTimeout(() =>{
      if(typeof a === 'number' && typeof b === 'number'){
        resolve(a + b);
      } else{
        reject('Must insert numbers');
      }
    }, 1500)
  });
};

simpleAddition(26, 4).then((res) => {
  console.log('Result', res);
  return simpleAddition(res, 'c');
}).then((res) => {
  console.log('Result again', res);
}).catch((errorMessage)=>{
  console.log(errorMessage);
});

// var somePromise = new Promise((resolve, reject) => {
//     resolve('It works');
// });

// somePromise.then((message) => {
//   console.log('hey', message);
// }, (errorMesage)=>{
//   console.log('hi');
// });
