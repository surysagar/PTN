// get-url-parameters-using-javascript

//Store the URI in variable
var url = 'https://example.com/page?one=two&three=four';

//The query
var query = url.split('?')[1].split('&');

query.forEach(function(key) {
  var pair = key.split('=');
  console.log('Key: ' + pair[0] + ' _ Value: ' + pair[1]);
});