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
  $('.buttons_bundle').html(`
  <button id="car_bundle" type="checkbox"><i class="fas fa-car fa-1x"></i><br>Car Rental<br></button><input name="searchType" value="CarRental" type="checkbox">
  <button id="hotel_budle" type="checkbox"><i class="fas fa-hotel fa-1x"></i><br>Hotel<br></button><input name="searchType" value="Hotel" type="checkbox">
  <button id="things_bundle" type="checkbox"><i class="fas fa-funnel-dollar fa-1x"></i><br>Things to do<br></button><input name="searchType" value="ThingsToDo" type="checkbox">
  `)
  $('#label').html(`<div class="fli"><input id="pin" type="text" placeholder="Flying from" name="origin"></input><i class="fas fa-map-marker-alt"></i></div>  <div class="fli"><input id="pin" type="text" placeholder="Flying to" name="destination"></input><i class="fas fa-map-marker-alt"></i></div><br>
  <div class="fli"> <input placeholder="departing" id="date" type="date" name="departureDate"></input><i class="fas fa-calendar-alt"></i></div> <div class="fli"><input id="date" type="date" name="returnDate"></input><i class="fas fa-calendar-alt"></i></div> `);
  $('.label_button1').html(`
      <a href="results.html"><button type="submit">Search</button></a>
  `)

})

$('#car_button').click(function(){
  console.log("some clicked on change html")
  $('#car_button').css({
    "background-color": "#087cc4"
  });
  $('#flight_button,#hotel_button,#things_button').css({
    "background-color": "lightskyblue"
  });
  $('.buttons_bundle').html(`<button id="flight_bundle"><i class="fas fa-plane fa-1x"></i><br>Flight<br><input type="checkbox"></button>
  <button id="hotel_budle" type="checkbox"><i class="fas fa-hotel fa-1x"></i><br>Hotel<br><input type="checkbox"></button>
  <button id="things_bundle" type="checkbox"><i class="fas fa-funnel-dollar fa-1x"></i><br>Things to do<br><input type="checkbox"></button>
  `)
  $('#label').html(`<div class="fli"><input id="pin" type="text" placeholder="Picking Up Location"></input><i class="fas fa-map-marker-alt"></i></div> <div class="fli"><input id="pin" type="text" placeholder="Dropping Off Location"></input><i class="fas fa-map-marker-alt"></i></div><br>
  <div class="fli"><input placeholder="Pick up date" id="date" type="date"></input><i class="fas fa-calendar-alt"></i></div> <div class="fli"><input id="date" type="date" placeholder="Drop of date"></input><i class="fas fa-calendar-alt"></i></div> `);
})


$('#hotel_button').click(function(){
  console.log("some clicked on change html")
  $('#hotel_button').css({
    "background-color": "#087cc4"
  });
  $('#car_button,#flight_button,#things_button').css({
    "background-color": "lightskyblue"
  });
  $('.buttons_bundle').html(`<button id="flight_bundle"><i class="fas fa-plane fa-1x"></i><br>Flight<br><input type="checkbox"></button>
  <button id="car_bundle" type="checkbox"><i class="fas fa-car fa-1x"></i><br>Car Rental<br><input type="checkbox"></button>
  <button id="things_bundle" type="checkbox"><i class="fas fa-funnel-dollar fa-1x"></i><br>Things to do<br><input type="checkbox"></button>
  `)
  $('#label').html(`<div class="fli"><input id="pin" name=location type="text" placeholder="Destination"></input><i class="fas fa-map-marker-alt"></i></div> <div class="fli"><input id="people" name="adults" type="number" maxlength="4" placeholder="Occupancy"></input><i class="fas fa-user-alt"></i></div><br>
  <div class="fli"><input id="date" name="checkInDate" type="date" placeholder="Check in"></input><i class="fas fa-calendar-alt"></i></div> <div class="fli"><input id="date" name="checkOutDate" type="date" placeholder="Check out"></input><i class="fas fa-calendar-alt"></i></div>
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
  $('.buttons_bundle').html(`<button id="flight_bundle"><i class="fas fa-plane fa-1x"></i><br>Flight<br><input type="checkbox"></button>
  <button id="car_bundle" type="checkbox"><i class="fas fa-car fa-1x"></i><br>Car Rental<br><input type="checkbox"></button>
  <button id="hotel_budle" type="checkbox"><i class="fas fa-hotel fa-1x"></i><br>Hotel<br><input type="checkbox"></button>
  `)
  $('#label').html(`<div class="fli"><input id="pin" type="text" placeholder="Destination"></input><i class="fas fa-map-marker-alt"></i></div><br>
  <div class="fli"><input id="date" type="date" placeholder="Check in"></input><i class="fas fa-calendar-alt"></i></div> <div class="fli"><input id="date" type="date" placeholder="Check out"></input><i class="fas fa-calendar-alt"></i></div>`)

});
var myVar;
            
$(document).ready(function() {
    myVar = setTimeout(showPage, 6500);
});

function showPage() {
    document.getElementById("loader").style.display = "none";
    document.getElementById("myDiv").style.display = "block";
}