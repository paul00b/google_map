// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require rails-ujs
//= require activestorage
//= require turbolinks
//= require_tree .
      function initMap() {
        var map = new google.maps.Map(document.getElementById('map'), {
            /* Création de la map dans la div 'map' */
          zoom: 10,
          center: {lat: 48.484211, lng: -4.245702}
        /* Initialisation de la map, avec un zoom de 10 et centré sur les lat et lgn donnée */
          
        });
        var geocoder = new google.maps.Geocoder;
        /* Création d'un géocoder pour transformer des lat et long en données */
        var infowindow = new google.maps.InfoWindow;

        document.getElementById('submit').addEventListener('click', function() {
          geocodeLatLng(geocoder, map, infowindow);
          /* Lorsque je clique sur submit je lance la fonction geocodeLatLng qui se trouve en dessous */
        });
      }
    
      /* Fonction qui va récupérer les coordonées */
      function geocodeLatLng(geocoder, map, infowindow) {
        var input = document.getElementById('latlng').value;
        /* Récupération de ma valeur latlng, qui sont les coordonnées */
        var latlngStr = input.split(',', 2);
        /* Séparation en données lisible par le geocoder */
        var msg = document.getElementById('msg').value;
        /* Récupération du message */

        var latlng = {lat: parseFloat(latlngStr[0]), lng: parseFloat(latlngStr[1])};
        geocoder.geocode({'location': latlng}, function(results, status) {
          if (status === 'OK') {
            if (results[0]) {
              map.setZoom(11);
              var marker = new google.maps.Marker({
                position: latlng,
                map: map,
                draggable: true, /* Rend le point draggable */
              });
              infowindow.setContent(msg);/* Affiche le message dans une petite fenetre OKLM */
              infowindow.open(map, marker); /* Met le marqueur */
            } else {
              window.alert('No results found');
            }
          } else {
            window.alert('Geocoder failed due to: ' + status);
          }


        });
      }