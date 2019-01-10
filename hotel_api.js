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
        console.log(baseURL)
        $.getJSON(baseURL, (hotel_result)=>{
            hotel_result.data.forEach((hotel, i)=>{
                var name = hotel.hotel.name
                var price = hotel.offers[0].price.total
                var address = hotel.hotel.address.lines[0]
                var city = hotel.hotel.address.cityName
                var state = hotel.hotel.address.stateCode
                var postalCode = hotel.hotel.address.postalCode
                var country = hotel.hotel.address.countryCode
                // var phone = hotel.hotel.contact.phone
                $('#flight-body').append(`
                    <tr>
                    <td id="row">${name}<button id="details${i}" class="details">details</button></td>
                    <td>${price}</td>
                    <td><input type="checkbox"></td>
                    </tr>
                `
                )
                // Get the modal
                var modal = document.getElementById('myModal');
                
                // Get the button that opens the modal
                var btn = document.getElementById("details" + i);
                
                // Get the <span> element that closes the modal
                var span = document.getElementsByClassName("close")[0];
                
                // When the user clicks the button, open the modal 
                btn.onclick = function() {
                  modal.style.display = "block";
                  $('.modal-text').html(`
                    <table id="details-address">
                        <thead>
                            <tr>
                                <th>${address}<br>${city}, ${state} ${postalCode}<br> ${country}</th>
                            </tr>
                        </thead>
                    </table>
                  `)
                }
                
                // When the user clicks on <span> (x), close the modal
                span.onclick = function() {
                  modal.style.display = "none";
                }
                
                // When the user clicks anywhere outside of the modal, close it
                window.onclick = function(event) {
                  if (event.target == modal) {
                    modal.style.display = "none";
                  }
                }
            })
        })
    })