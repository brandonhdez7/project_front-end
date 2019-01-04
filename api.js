var parameters = new URLSearchParams(window.location.search);
var destinationParam = parameters.get('destination');
var originParam = parameters.get('origin');
var departDateParam = parameters.get('departureDate');
var returnDateParam = parameters.get('returnDate');
var searchURL = "http://cm.ridiculous-inc.com/flight/lowest/?" + "destination=" + destinationParam + "&origin=" + originParam + "&departureDate=" + departDateParam + "&returnDate=" + returnDateParam;
let resultsBox = document.querySelector('#results');
resultsBox.innerHTML = destinationParam;

$.getJSON(searchURL,function(searchResults){
    console.log(searchResults);
    console.log(searchURL);
})