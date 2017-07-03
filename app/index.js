const condition = 'match';

var promise = new Promise(function (resolve, reject) {
  setTimeout(function () {
    if (condition === 'match') {
      resolve('done');
    } else {
      reject('been reject');
    }
  }, 2000);
});

promise.then(function (value) {
  var messageEle = document.getElementById('message');
  messageEle.style.color = 'green';
  messageEle.innerText = value;
}).catch(function (errorMessage) {
  var messageEle = document.getElementById('message');
  messageEle.style.color = 'red';
  messageEle.innerText = errorMessage;
});
