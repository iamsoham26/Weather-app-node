console.log('Starting App');

setTimeout( () => {
  console.log('Inside of a callback')
}, 2000)

setTimeout( () => {
  console.log('Inside of a callback returns')
}, 0)

console.log('Finishing App');
