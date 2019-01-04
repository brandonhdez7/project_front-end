var parameters = new URLSearchParams(window.location.search);
const destinationParam = parameters.get('destination');
const originParam = parameters.get('origin');
const departDateParam = parameters.get('departureDate');
var destinationURL = "http://cm.ridiculous-inc.com/?" + destinationParam;

let resultsBox = document.querySelector('#results');
resultsBox.innerHTML = destinationParam;

$.getJSON(destinationURL,function(searchResults){
    console.log(searchResults);
})