function fetchData(URL) {
  return new Promise(function (resolve, reject) {
    var req = new XMLHttpRequest();
    req.open('GET', URL, true);
    req.onload = function () {
      if (req.status === 200) {
        resolve(req.responseText);
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

fetchData("https://raw.githubusercontent.com/benweizhu/es6-promise-workshop/master/data/books.json")
  .then(function (data) {
    var books = JSON.parse(data);
    var booksPromise = books.map(function (book) {
      return fetchData(book.url);
    });
    return Promise.all(booksPromise);
  })
  .then(function (bookDetailsList) {
    bookDetailsList.forEach(function (bookDetails) {
      var img = document.createElement("img");
      img.src = bookDetails.imageUrl;
    });
  })
  .catch(function (error) {
    console.error(error);
  });
