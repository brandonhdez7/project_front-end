// $('#service_link').click(function(){
//   $( "#service_link" ).load( "index.html #service" );

// })
// const baseUrl = `http://cm.ridiculous-inc.com/?`


$(function(){
  var overlay = $('<div id="overlay"></div>');
  overlay.show();
  overlay.appendTo(document.body);
  $('.popup').show();
  $('.close').click(function(){
    $('.popup').hide();
    overlay.appendTo(document.body).remove();
    return false; 
  });
  
  $('.x').click(function(){
    $('.popup').hide();
    overlay.appendTo(document.body).remove();
    return false;
  });

  $('.sign_up_button').click(function(){
    $('.popup').hide();
    overlay.appendTo(document.body).remove();
    return false;
  });
});








window.onload=function(){
  document.getElementById("flight_button").click();
};

$('#flight_button').click(function(){
  console.log("some clicked on change html")
  $('#flight_button').css({
    "background-color": "#087cc4"
  });
  $('#car_button,#hotel_button,#things_button').css({
    "background-color": "lightskyblue"
  });
  // $('.buttons_bundle').html(`
  // <button id="car_bundle" type="checkbox"><i class="fas fa-car fa-1x"></i><br>Car Rental<br></button><input name="searchType" value="CarRental" type="checkbox">
  // <button id="hotel_budle" type="checkbox"><i class="fas fa-hotel fa-1x"></i><br>Hotel<br></button><input name="searchType" value="Hotel" type="checkbox">
  // <button id="things_bundle" type="checkbox"><i class="fas fa-funnel-dollar fa-1x"></i><br>Things to do<br></button><input name="searchType" value="ThingsToDo" type="checkbox">
  // `)
  $('#label').html(`<div class="fli"><input id="pin" type="text" placeholder="Flying from" name="origin"><span>Location</span></input><i class="fas fa-map-marker-alt"></i></div>  <div class="fli"><input id="pin2" type="text" placeholder="Flying to" name="destination"><span>Location</span></input><i class="fas fa-map-marker-alt"></i></div><br>
  <div class="fli"><input id="date" type="date" name="departureDate"><span>Departure</span></input><i class="fas fa-calendar-alt"></i></div> <div class="fli"><input id="date" type="date" name="returnDate"><span>Returning</span></input><i class="fas fa-calendar-alt"></i></div> `);
  $('.label_button1').html(`
      <a href="results.html"><button type="submit">Search</button></a>
  `)
  $('#pin, #pin2').autocomplete({
    source: function( request, response ) {
      var matcher = new RegExp( "^" + $.ui.autocomplete.escapeRegex( request.term ), "i" );
      response( $.grep( airports, function( item ){
          return matcher.test( item );
      }) );
  }
  })

})

$('#car_button').click(function(){
  console.log("some clicked on change html")
  $('#car_button').css({
    "background-color": "#087cc4"
  });
  $('#flight_button,#hotel_button,#things_button').css({
    "background-color": "lightskyblue"
  });
  // $('.buttons_bundle').html(`<button id="flight_bundle"><i class="fas fa-plane fa-1x"></i><br>Flight<br><input type="checkbox"></button>
  // <button id="hotel_budle" type="checkbox"><i class="fas fa-hotel fa-1x"></i><br>Hotel<br><input type="checkbox"></button>
  // <button id="things_bundle" type="checkbox"><i class="fas fa-funnel-dollar fa-1x"></i><br>Things to do<br><input type="checkbox"></button>
  // `)
  $('#label').html(`<div class="fli"><input id="pin" type="text" placeholder="Picking Up Location"><span>Location</span></input><i class="fas fa-map-marker-alt"></i></div> <div class="fli"><input id="pin" type="text" placeholder="Dropping Off Location"><span>Location</span></input><i class="fas fa-map-marker-alt"></i></div><br>
  <div class="fli"><input placeholder="Pick up date" id="date" type="date"><span>Pick Up</span></input><i class="fas fa-calendar-alt"></i></div> <div class="fli"><input id="date" type="date" placeholder="Drop of date"><span>Drop off</span></input><i class="fas fa-calendar-alt"></i></div> `);
  $('.label_button1').html(`
      <a href="car_result.html"><button value="car results" formaction="car_result.html" type="submit">Search</button></a>
  `);
})



$('#hotel_button').click(function(){
  console.log("some clicked on change html")
  $('#hotel_button').css({
    "background-color": "#087cc4"
  });
  $('#car_button,#flight_button,#things_button').css({
    "background-color": "lightskyblue"
  });
  // $('.buttons_bundle').html(`<button id="flight_bundle"><i class="fas fa-plane fa-1x"></i><br>Flight<br><input type="checkbox"></button>
  // <button id="car_bundle" type="checkbox"><i class="fas fa-car fa-1x"></i><br>Car Rental<br><input type="checkbox"></button>
  // <button id="things_bundle" type="checkbox"><i class="fas fa-funnel-dollar fa-1x"></i><br>Things to do<br><input type="checkbox"></button>
  // `)
  $('#label').html(`<div class="fli"><input id="pin" name=location type="text" placeholder="Destination"><span>Location</span></input><i class="fas fa-map-marker-alt"></i></div> <div class="fli"><input id="people" name="adults" type="number" maxlength="4" placeholder="Occupancy"><span>Occupancy</span></input><i class="fas fa-user-alt"></i></div><br>
  <div class="fli"><input id="date" name="checkInDate" type="date" placeholder="Check in"><span>Check In</span></input><i class="fas fa-calendar-alt"></i></div> <div class="fli"><input id="date" name="checkOutDate" type="date" placeholder="Check out"><span>Check Out</span></input><i class="fas fa-calendar-alt"></i></div>
  `);
  $('.label_button1').html(`
      <a href="hotel_results.html"><button value="hotel results" formaction="hotel_results.html" type="submit">Search</button></a>
  `);
})


$('#things_button').click(function(){
  console.log("some clicked on change html")
  
  $('#things_button').css({
    "background-color": "#087cc4"
  });
  $('#car_button,#hotel_button,#flight_button').css({
    "background-color": "lightskyblue"
  });
  // $('.buttons_bundle').html(`<button id="flight_bundle"><i class="fas fa-plane fa-1x"></i><br>Flight<br><input type="checkbox"></button>
  // <button id="car_bundle" type="checkbox"><i class="fas fa-car fa-1x"></i><br>Car Rental<br><input type="checkbox"></button>
  // <button id="hotel_budle" type="checkbox"><i class="fas fa-hotel fa-1x"></i><br>Hotel<br><input type="checkbox"></button>
  // `)
  $('#label').html(`<div class="fli"><input id="pin" type="text" placeholder="Destination"><span>Location</span></input><i class="fas fa-map-marker-alt"></i></div><br>
  <div class="fli"><input id="date" type="date" placeholder="Check in"><span>Check In</span></input><i class="fas fa-calendar-alt"></i></div> <div class="fli"><input id="date" type="date" placeholder="Check out"><span>Check Out</span></input><i class="fas fa-calendar-alt"></i></div>`)
  $('.label_button1').html(`
      <a href="things_result.html"><button value="things results" formaction="things_result.html" type="submit">Search</button></a>
  `);
});
var myVar;
            
$(document).ready(function() {
    myVar = setTimeout(showPage, 6500);
});

function showPage() {
    document.getElementById("loader").style.display = "none";
    document.getElementById("myDiv").style.display = "block";
}