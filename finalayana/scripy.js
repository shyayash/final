$(document).ready(function() {
  $('form').submit(function(event) {
    event.preventDefault(); 

    
    var name = $('#name').val();
    var email = $('#email').val();
    var message = $('#message').val();

    var notification = 'Name: ' + name + '\nEmail: ' + email + '\nMessage: ' + message;
    alert(notification);

   
    $('form')[0].reset();
  });
});

function initMap() {

  var kazakhstanBounds = new google.maps.LatLngBounds(
    new google.maps.LatLng(40.9362, 46.4663), 
    new google.maps.LatLng(55.4183, 87.3452)  
  );


  const map = new google.maps.Map(document.getElementById("map"), {
    center: kazakhstanBounds.getCenter(), 
    zoom: 5,
    restriction: {
      latLngBounds: kazakhstanBounds,
      strictBounds: false
    }
  });

 
  const marker = new google.maps.Marker({

    map: map,
    title: "Astana"
  });
}
