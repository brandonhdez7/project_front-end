var parameters = new URLSearchParams(window.location.search);
// var checkInParam = parameters.get('checkInDate');


var location1 = parameters.get('location')
var location2 = location1.slice(0, -3)
location1 = location1.slice(-3)
location1 = location1.trim()
location1 = "%20" + location1
location1 = location2 + location1
var locationURL = `https://maps.googleapis.com/maps/api/geocode/json?address=${location1}&key=AIzaSyB1TSCiV6L80P0PdYJ0QuYEdLKBpr-AgUk`

console.log(locationURL);
$.getJSON(locationURL, function(location_result){
    var longitude = location_result.results[0].geometry.location.lng
    var latitude = location_result.results[0].geometry.location.lat
    const baseURL = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${latitude},${longitude}&radius=1500&type=restaurant&key=AIzaSyB1TSCiV6L80P0PdYJ0QuYEdLKBpr-AgUk`
    console.log(baseURL);
    $.getJSON(baseURL, (things_result)=>{
        console.log(things_result);
        // things_result.data.forEach((things)=>{
        //     var name = things.name
        //     var restaurantLoc = things.results[0].vicinity
        //     console.log(name);
        //     $('#things-body').prepend(`
        //         <tr>
        //             <td>${name}</td>
        //             <td>${restaurantLoc}</td>
        //             <td><input type="checkbox"></td>
        //         </tr>
        //     `
        //     )
        // })
    })
})