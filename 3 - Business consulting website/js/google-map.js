function initialize() {

    var center = new google.maps.LatLng(-0.9938000, -77.8128600);

    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 16,
        center: center,
        mapTypeControl: false,
        streetViewControl: false,
        fullscreenControl:false,
        mapId: "8a0cf2a13bcb98c5"
        
    });
    const image = "../img/icon-map.png";
    for (var i = 0; i < 100; i++) {
        var dataPhoto = data.photos[i];
        var latLng = new google.maps.LatLng(
            dataPhoto.latitude,
            dataPhoto.longitude
        );
        var marker = new google.maps.Marker({
            position: latLng,
            map: map,
            icon: image,
        });
    };
}
google.maps.event.addDomListener(window, "load", initialize);