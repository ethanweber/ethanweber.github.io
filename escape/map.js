
var infowindow = null;
var points = [];
var info = [];

function load_from_spreadsheet() {
  var my_data = httpGet("https://crossorigin.me/https://docs.google.com/spreadsheets/d/1HCFLANKyy4zEaFinmDFI0tTmK-sdJPzZJAH4AniBnjo/pub?output=csv");
  var matrix = [];

  var columns = my_data.split('\n');
  console.log(columns);
  for (var i = 0; i < columns.length; i++) {
    matrix.push(columns[i].split(','));
  }
  console.log(matrix);

  //create dictionary
  for (var i = 1; i < matrix.length; i++ ) {
    var my_current_dictionary = {};
    for (var j = 0; j < matrix[0].length; j++ ) {
      var current_key = matrix[0][j];
      console.log(current_key);
      my_current_dictionary[current_key] = matrix[i][j];
    }
    info.push(my_current_dictionary);
  }
  console.log(info);
  initMap();
  // $.ajax({
  //     type: "GET",
  //     url: 'https://crossorigin.me/https://docs.google.com/spreadsheets/d/1HCFLANKyy4zEaFinmDFI0tTmK-sdJPzZJAH4AniBnjo/pub?output=csv',
  //     async:true,
  //     crossDomain:true,
  //     success: function(data, status, xhr) {
  //         // alert(data);
  //         var my_data = data;
  //
  //         var matrix = [];
  //
  //         var columns = my_data.split('\n');
  //         console.log(columns);
  //         for (var i = 0; i < columns.length; i++) {
  //           matrix.push(columns[i].split(','));
  //         }
  //         console.log(matrix);
  //
  //         //create dictionary
  //         for (var i = 1; i < matrix.length; i++ ) {
  //           var my_current_dictionary = {};
  //           for (var j = 0; j < matrix[0].length; j++ ) {
  //             var current_key = matrix[0][j];
  //             console.log(current_key);
  //             my_current_dictionary[current_key] = matrix[i][j];
  //           }
  //           info.push(my_current_dictionary);
  //         }
  //         console.log(info);
  //
  //         initMap();
  //
  //     }
  // });

  // $.get("https://docs.google.com/spreadsheets/d/1HCFLANKyy4zEaFinmDFI0tTmK-sdJPzZJAH4AniBnjo/pub?output=csv", function(data, status){
  //     // alert("Data: " + data + "\nStatus: " + status);
  //     var my_data = data;
  //
  //     var matrix = [];
  //
  //     var columns = my_data.split('\n');
  //     console.log(columns);
  //     for (var i = 0; i < columns.length; i++) {
  //       matrix.push(columns[i].split(','));
  //     }
  //     console.log(matrix);
  //
  //     //create dictionary
  //     for (var i = 1; i < matrix.length; i++ ) {
  //       var my_current_dictionary = {};
  //       for (var j = 0; j < matrix[0].length; j++ ) {
  //         var current_key = matrix[0][j];
  //         console.log(current_key);
  //         my_current_dictionary[current_key] = matrix[i][j];
  //       }
  //       info.push(my_current_dictionary);
  //     }
  //     console.log(info);
  //
  //     initMap();
  // });
}

$(document).ready(function(){
    load_from_spreadsheet();
});

function initMap() {

  // load_from_spreadsheet();

  var infowindow = new google.maps.InfoWindow();
  var markers = [];

  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 4,
    center: {lat: 38, lng: -90}
  });

  infowindow = new google.maps.InfoWindow({
    content: "temp"
  });

  for (var i = 0; i < info.length; i++) {
    console.log(info[i]['Date']);
    var html_string = "<div id=\"content\">" + "<span id=\"header\">Location:</span> " + info[i]['Title']
    + "<br><span id=\"header\">Room:</span> " + info[i]['Room']
    + "<br><span id=\"header\">Description:</span> " + info[i]['Description']
    + "<br><span id=\"header\">People:</span> " + info[i]['People']
    + "<br><span id=\"header\">Date:</span> " + info[i]['Date']
    + "</div>";
    markers.push(new google.maps.Marker({
      position: {lat: Number(info[i]['Lat']), lng: Number(info[i]['Lon'])},
      map: map,
      title: info[i]['Title'],
      // html: info[i]['Description']
      html: html_string
    }));

    google.maps.event.addListener(markers[i], 'click', function () {
      infowindow.setContent(this.html);
      infowindow.open(map, this);
    });
  }
}

function httpGet(theUrl)
{
  var xmlHttp = null;
  xmlHttp = new XMLHttpRequest();
  xmlHttp.open( "GET", theUrl, false );
  xmlHttp.withCredentials = true;
  xmlHttp.send( null );
  return xmlHttp.responseText;

  // $.get(theUrl, function(data, status){
  //     alert("Data: " + data + "\nStatus: " + status);
  //     var value = data;
  // });
  // return value;
}
