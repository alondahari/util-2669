// load fb sdk
window.fbAsyncInit = function() {
  FB.init({
    appId      : '{your-app-id}',
    cookie     : true,
    xfbml      : true,
    version    : '{latest-api-version}'
  });

  FB.AppEvents.logPageView();
};

(function(d, s, id){
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) {return;}
  js = d.createElement(s); js.id = id;
  js.src = "https://connect.facebook.net/en_US/sdk.js";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));


//check login status
FB.getLoginStatus(function(response) {
  statusChangeCallback(response);
});

//this is how the response looks like:

// {
//   status: 'connected',
//   authResponse: {
//     accessToken: '...',
//       expiresIn:'...',
//       signedRequest:'...',
//       userID:'...'
//   }
// }

//login button
// <fb:login-button
//   scope="public_profile,email"
//   onlogin="checkLoginState();">
// </fb:login-button>

// callback
// function checkLoginState() {
//   FB.getLoginStatus(function(response) {
//     statusChangeCallback(response);
//   });
// }