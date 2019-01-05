var parameters = new URLSearchParams(window.location.search);
var originParam = parameters.get('origin');
var destinationParam = parameters.get('destination');
var departDateParam = parameters.get('departureDate');
var returnDateParam = parameters.get('returnDate');
var carRentalParam = parameters.getAll('searchType');
var searchURL = "http://cm.ridiculous-inc.com/flight/lowest/?" + "origin=" + originParam + "&destination=" + destinationParam + "&departureDate=" + departDateParam + "&returnDate=" + returnDateParam;

$('#search-body').append(
    `
    <tr>
        <td>${originParam}</td>
        <td>${destinationParam}</td>
        <td>${departDateParam} - ${returnDateParam}</td>
    </tr>
    `
)
$.getJSON(searchURL,function(searchResults){
    console.log(searchResults);
    console.log(searchURL);
    console.log(carRentalParam);
   
    searchResults.data.forEach((flight)=>{
        var depart = flight.offerItems[0].services[0].segments[0].flightSegment.departure.at
        var arrival = flight.offerItems[0].services[0].segments[0].flightSegment.arrival.at
        var newDepart = depart.substring(11, 16)
        var newArrival = arrival.substring(11, 16)
        var airline = flight.offerItems[0].services[0].segments[0].flightSegment.carrierCode
        function newAirline(input){
            if (airline === 'AA'){
                return ("American Airlines")
            } else if (airline === "DL"){
                return ("Delta Airlines")
            } else if (airline === "F9"){
                return ('Frontier Airlines')
            } else if (airline === "NK"){
                return ('Spirit Airlines')
            } else if (airline === "UA"){
                return ('United Airlines')
            } else if (airline === "B6"){
                return ('JetBlue')
            } else if (airline === "AS"){
                return ('Alaska Airlines')
            }
        }
        airline = newAirline(airline)

        function convert(input) {
            return moment(input, 'HH:mm').format('h:mm A');
        }
        newDepart = convert(newDepart)
        newArrival = convert(newArrival)
       
        $('#flight-body').prepend(`
            <tr>
                <td>${airline}</td>
                <td>${newDepart}</td>
                <td>${newArrival}</td>
                <td>${flight.offerItems[0].price.total}</td>
            </tr>
            <tr>
                <td>${airline}</td>
                <td>${newDepart}</td>
                <td>${newArrival}</td>
                <td>${flight.offerItems[0].price.total}</td>
            </tr>
        `
        
        )
    })
})

