const condition = 'no';

var promise = new Promise(function (resolve, reject) {
  if (condition === 'match') {
    resolve('done');
  } else {
    reject(new Error('been reject'));
  }

});
promise.then(function (value) {
  console.log(value);
}).catch(function (error) {
  console.error(error);
});
