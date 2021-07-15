var badRequestUrl = 'https://api.github.com/unicorns';
var redirectUrl = './404.html';

//We send the fetch() request (badRequestUrl)
fetch(badRequestUrl).then(function (response) {
  // Check the response value is equal to 404.
  //We check the response.status to see whether it equals 404
  //If the response.status equals 404, we pass the redirectURL variable as an argument into the document.location.replace method
  if (response.status === 404) {
    // If the page is not on the 404 page, redirect to it.
    //We set the redirect URL to a variable. This is the URL that the replace() method will use
    setTimeout(function(){
      document.location.replace(redirectUrl);
    }, 2000);
  } else {
  	//If the response.status does not equal 404, we return response.json()	
    return response.json();
  }
});
//This time we did not return response.json() after the if statement, because we are changing the document.location based on the response.status.
