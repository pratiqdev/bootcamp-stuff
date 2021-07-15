var requestUrl = 'https://api.github.com/orgs/nodejs/repos';
// hmmmm - something might be wrong with our base API endpoint
var badRequestUrl = 'https://api.github.com/orgs/nodejddd/repad';

fetch(requestUrl)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
  });

fetch(badRequestUrl)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
  });
