var parameters = new URLSearchParams(window.location.search);
var originParam = parameters.get('origin');
var destinationParam = parameters.get('destination');
var departDateParam = parameters.get('departureDate');
var returnDateParam = parameters.get('returnDate');
var carRentalParam = parameters.getAll('searchType');
var searchURL = "http://cm.ridiculous-inc.com/flight/lowest/?" + "origin=" + originParam + "&destination=" + destinationParam + "&departureDate=" + departDateParam + "&returnDate=" + returnDateParam;
let resultsBox = document.querySelector('#flight-body');
var resultsTable = `
<tr>
<td>${originParam}</td>
<td>${destinationParam}</td>
<td>${departDateParam}</td>
<td>${returnDateParam}</td>


</tr>
`
resultsBox.innerHTML = resultsTable;

$.getJSON(searchURL,function(searchResults){
    console.log(searchResults);
    console.log(searchURL);
    console.log(carRentalParam);
    console.log(searchResults.result.data[0].offerItems[0].price.total)
    let i = 0;
    // searchResults.map((item)=>{
    //     console.log(item);
    // })
    // for(item in searchResults){
    //     console.log(searchResults[item][i].offerItems[0].price.total);
    //     i++;
    // }
    searchResults.data.forEach((flight)=>{
        console.log(flight.offerItems[0].price.total);
    })


    // $('#search-form').submit((event)=>{
    //     event.preventDefault();
    //     // searchResults.
    //     $('#flight-body').append(`
    //         <tr>
    //             <td>${originParam}</td>
    //             <td>${destinationParam}</td>
    //             <td>${departDateParam}</td>
    //             <td>${returnDateParam}</td>
    //         </tr>
    //     `)
    // })
})

