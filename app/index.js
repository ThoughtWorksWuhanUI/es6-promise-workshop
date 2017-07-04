const condition = 'promise';

function matchCondition(condition) {
  return condition === 'promise';
}
var promise = new Promise(function (resolve, reject) {
  if (matchCondition(condition)) {
    resolve('done');
  } else {
    reject('been reject');
  }
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
