var markers;
var map;
    function initMap() {
        var geocoder = new google.maps.Geocoder;
        var infowindow = new google.maps.InfoWindow;
        var pinColor = "EEC238";
        var green = '27C24C';
        var orange = 'FCB322';
        var red = 'FF6C60';
        var pinImage = new google.maps.MarkerImage("http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|" + pinColor,
            new google.maps.Size(30, 40),
            new google.maps.Point(0,0),
            new google.maps.Point(10, 34));
        var greenImage = new google.maps.MarkerImage("http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|" + green,
            new google.maps.Size(30, 40),
            new google.maps.Point(0,0),
            new google.maps.Point(10, 34));
        var redImage = new google.maps.MarkerImage("http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|" + red,
            new google.maps.Size(30, 40),
            new google.maps.Point(0,0),
            new google.maps.Point(10, 34));
        var orangeImage = new google.maps.MarkerImage("http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|" + orange,
            new google.maps.Size(30, 40),
            new google.maps.Point(0,0),
            new google.maps.Point(10, 34));

        var pinShadow = new google.maps.MarkerImage("http://chart.apis.google.com/chart?chst=d_map_pin_shadow",
            new google.maps.Size(40, 37),
            new google.maps.Point(0, 0),
            new google.maps.Point(12, 35));
        map = new google.maps.Map(document.getElementById('map'), {
          zoom: 11,
          center: {lat: 6.6244, lng: 3.3692}
        });

        // Create an array of alphabetical characters used to label the markers.
        var labels = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

        // Add some markers to the map.
        // Note: The code uses the JavaScript Array.prototype.map() method to
        // create an array of markers based on a given "locations" array.
        // The map() method here has nothing to do with the Google Maps API.
        markers = locations.map(function(location, i) {
            let marker;
            if(i % labels.length <10){
           marker =  new google.maps.Marker({
            position: location,
            label: labels[i % labels.length],
            animation: google.maps.Animation.DROP,
            icon:greenImage,
            shadow:pinShadow
          });
        }
        else if(i % labels.length <17){
           marker =  new google.maps.Marker({
            position: location,
            label: labels[i % labels.length],
            animation: google.maps.Animation.DROP,
            icon:redImage,
            shadow:pinShadow
          });
        }else {
           marker =  new google.maps.Marker({
            position: location,
            label: labels[i % labels.length],
            animation: google.maps.Animation.DROP,
            icon:orangeImage,
            shadow:pinShadow
          });
        }
          marker.addListener('click', function() {
            map.setZoom(12);
            console.log(this.icon.url);
            console.log(this.position.lat());
            console.log(this.position.lng());
            console.log(this.label);
            $('.bin-label').text(this.label);
            $('.bin-loc').text(this.position.lat()+ ', '+this.position.lng());
            let latlng = {lat:this.position.lat() , lng:this.position.lng()};
            geocoder.geocode({'location': latlng}, function(results, status) {
            if (status === 'OK') {
                if (results[0]) {
                map.setZoom(11);
                infowindow.setContent(results[0].formatted_address);
                infowindow.open(map, marker);
                $('.bin-loc').text(results[0].formatted_address);
                } else {
                window.alert('No results found');
                }
            } else {
                window.alert('Geocoder failed due to: ' + status);
            }
            });
            $('aside').css('display','block');
            map.setCenter(marker.getPosition());
            if (marker.getAnimation() !== null) {
                marker.setAnimation(null);
            } else {
                marker.setAnimation(google.maps.Animation.BOUNCE);
                setTimeout(function(){
                    marker.setAnimation(null);
                },2000);
            }
            });
            return marker;
        });

        // Add a marker clusterer to manage the markers.
        //var markerCluster = new MarkerClusterer(map, markers,  {imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'});
        markers.forEach(function(item){
            item.setMap(null);
        });
        markers.forEach(function(item){
            item.setMap(map);
        });
    }
      var locations = [
          {lat: 6.5144, lng: 3.3792},
        {lat: 6.5244, lng: 3.3192},
        {lat: 6.5005, lng: 3.3666},
        {lat: 6.6154, lng: 3.3238},
        {lat: 6.4698, lng: 3.5852},
        {lat: 6.6018, lng: 3.3515},
        {lat: 6.5113, lng: 3.662905},
        {lat: 6.4572, lng: 3.699196},
        {lat: 6.728611, lng: 3.790222},
        {lat: 6.650000, lng: 3.116667},
        {lat: 6.559859, lng: 3.128708},
        {lat: 6.465015, lng: 3.133858},
        {lat: 6.770104, lng: 3.143299},
        {lat: 6.773700, lng: 3.145187},
        {lat: 6.774785, lng: 3.137978},
        {lat: 6.819616, lng: 3.968119},
        {lat: 6.630766, lng: 3.695692},
        {lat: 6.927193, lng: 3.053218},
        {lat: 6.530162, lng: 3.865694},
        {lat: 6.734358, lng: 3.439506},
        {lat: 6.734358, lng: 3.501315},
        {lat: 6.735258, lng: 3.438000},
        {lat: 6.999792, lng: 3.463352}
      ]

function closePanel(){
    $('#marker-panel').css('display','none');
}
function removeMarker(marker) {
    marker.setMap(null);
  }
function showMarker(marker) {
    marker.setMap(map);
  }

$(document).ready(function(){
    $(document).on('click','.bin-filter',function(){
        var color = $(this).attr('data-color');
        console.log(color);
        console.log(markers);
        markers.forEach(function(item){
            if(!item.icon.url.includes(color)){
                removeMarker(item);
            }
            else{
                showMarker(item);
            }
        });
    });

    $(document).on('click','.show-all-markers',function(){
        markers.forEach(function(item){
            item.setMap(null);
        });
        markers.forEach(function(item){
            item.setMap(map);
        });
    })
});
