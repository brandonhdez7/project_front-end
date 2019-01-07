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
        <td>${departDateParam}</td>
    </tr>
    `
)
$('#search-body2').append(
    `
    <tr>
        <td>${destinationParam}</td>
        <td>${originParam}</td>
        <td>${returnDateParam}</td>
    </tr>
    `
)



$.getJSON(searchURL,function(searchResults){
    console.log(searchResults);
    console.log(searchURL);

   
   
    searchResults.data.forEach((flight)=>{
        var depart = flight.offerItems[0].services[0].segments[0].flightSegment.departure.at
        var newDepart = depart.substring(11, 16)
        var depart2 = flight.offerItems[0].services[1].segments[0].flightSegment.departure.at
        var newDepart2 = depart2.substring(11, 16)
        var arrival = flight.offerItems[0].services[0].segments[0].flightSegment.arrival.at
        var newArrival = arrival.substring(11, 16)
        var arrival2 = flight.offerItems[0].services[1].segments[0].flightSegment.arrival.at
        var newArrival2 = arrival2.substring(11, 16)
        var airline = flight.offerItems[0].services[0].segments[0].flightSegment.carrierCode
        var airline2 = flight.offerItems[0].services[1].segments[0].flightSegment.carrierCode
        function newAirline(input){
            if (input === 'AA'){
                return ("American Airlines")
            } else if (input === "DL"){
                return ("Delta")
            } else if (input === "F9"){
                return ('Frontier')
            } else if (input === "NK"){
                return ('Spirit')
            } else if (input === "UA"){
                return ('United Airlines')
            } else if (input === "B6"){
                return ('JetBlue')
            } else if (input === "AS"){
                return ('Alaska Airlines')
            }
        }
        airline = newAirline(airline)
        airline2 = newAirline(airline2)

        function convert(input) {
            return moment(input, 'HH:mm').format('h:mm A');
        }
        newDepart = convert(newDepart)
        newDepart2 = convert(newDepart2)
        newArrival = convert(newArrival)
        newArrival2 = convert(newArrival2)
       
        $('#flight-body').prepend(`
            <tr>
                <td>${airline}</td>
                <td>${newDepart}</td>
                <td>${newArrival}</td>
            </tr>
        `
        )
        $('#flight-body2').prepend(`
            <tr>
                <td>${airline2}</td>
                <td>${newDepart2}</td>
                <td>${newArrival2}</td>
                <td><input type="checkbox"></td>
            </tr>
        `
        )
        $('#total-price').prepend(`
            <tr>
                <td>$${flight.offerItems[0].price.total}</td>
            </tr>
        `
        
        )
        
    })
})