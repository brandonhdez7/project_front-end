var parameters = new URLSearchParams(window.location.search);
var checkInParam = parameters.get('checkInDate');
var checkOutParam = parameters.get('checkOutDate');
var occupancyParam = parameters.get('adults');
var location1 = parameters.get('location')
var location2 = location1.slice(0, -3)
location1 = location1.slice(-3)
location1 = location1.trim()
location1 = "%20" + location1
location1 = location2 + location1
var locationURL = `https://maps.googleapis.com/maps/api/geocode/json?address=${location1}&key=AIzaSyB1TSCiV6L80P0PdYJ0QuYEdLKBpr-AgUk`

$('#search-body').append(
    `
    <tr>
        <td>${checkInParam}</td>
        <td>${checkOutParam}</td>
    </tr>
    `
)

$.getJSON(locationURL, function(location_result){
    var longitude = location_result.results[0].geometry.location.lng
    var latitude = location_result.results[0].geometry.location.lat
    const baseURL = `http://cm.ridiculous-inc.com/hotels/get?latitude=${latitude}&longitude=${longitude}&checkInDate=${checkInParam}&checkOutDate=${checkOutParam}&adults=${occupancyParam}&radius=20`
    $.getJSON(baseURL, (hotel_result)=>{
        hotel_result.data.forEach((hotel)=>{
            var name = hotel.hotel.name
            var price = hotel.offers[0].price.total
            $('#flight-body').prepend(`
                <tr>
                    <td>${name}</td>
                    <td>${price}</td>
                    <td><input type="checkbox"></td>
                </tr>
            `
            )
        })
    })
})