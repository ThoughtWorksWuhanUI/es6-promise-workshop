function fetchData(URL) {
  return new Promise(function (resolve, reject) {
    var req = new XMLHttpRequest();
    req.open('GET', URL, true);
    req.onload = function () {
      if (req.status === 200) {
        resolve(this.responseText);
      } else {
        reject(new Error(req.statusText));
      }
    };
    req.onerror = function () {
      reject(new Error(req.statusText));
    };
    req.send();
  });
}

var promise = fetchData('https://raw.githubusercontent.com/benweizhu/es6-promise-workshop/master/data/books.json');

promise.then(function (responseText) {
  document.getElementById('json').innerHTML = responseText;
  console.log(JSON.parse(responseText))
}).catch(function (error) {
  console.log(error)
})
