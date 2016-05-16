var locations = [
  {
    title: "Ketler Hall",
    lat: 41.155373163211394,
    lng: -80.08066769689322,
    des: "Men's Upperclassmen Dorm",
    id: "nav0",
    tag: "Ketler Residence Hall",
    visible: ko.observable(true),
    boolTest: true
  },
  {
    title: "Hall of Arts and Letters",
    lat: 41.15461180369746,
    lng: -80.0773461163044,
    des: "Humanities Building",
    id: "nav1",
    tag: "Hall of Arts and Letters",
    visible: ko.observable(true),
    boolTest: true
  },
  {
    title: "Physical Learning Center",
    lat: 41.156039597968295,
    lng: -80.07789999246597,
    des: "Athletic Facilities and Upperclassmen Dorm",
    id: "nav2",
    tag: "Physical Learning Center",
    visible: ko.observable(true),
    boolTest: true
  },
  {
    title: "Technological Learning Center",
    lat: 41.153915061114986,
    lng: -80.0791472196579,
    des: "Technology Service Center",
    id: "nav3",
    tag: "Technological Learning Center",
    visible: ko.observable(true),
    boolTest: true
  },
  {
    title: "Crawford Hall",
    lat: 41.155715469182816,
    lng: -80.08133556693792,
    des: "Administrative Offices and Concert Hall",
    id: "nav4",
    tag: "Crawford Hall",
    visible: ko.observable(true),
    boolTest: true
  },
  {
    title: "Harbison Chapel",
    lat: 41.156928671969936,
    lng: -80.08067574352026,
    des: "Chapel Facilities",
    id: "nav5",
    tag: "Harbison Chapel",
    visible: ko.observable(true),
    boolTest: true
  },
  {
    title: "Colonial Hall",
    lat: 41.1569776438956,
    lng: -80.08616086095572,
    des: "Co-ed Upperclassmen Dorm",
    id: "nav6",
    tag: "Colonial Hall",
    visible: ko.observable(true),
    boolTest: true
  },
  {
    title: "Carnegie Alumni Center",
    lat: 41.15714121995938,
    lng: -80.0868334248662,
    des: "Administrative Offices and Archive",
    id: "nav7",
    tag: "Carnegie Alumni Center",
    visible: ko.observable(true),
    boolTest: true
  },
  {
    title: "Thorn Field",
    lat: 41.15688070973924,
    lng: -80.08467458188534,
    des: "Football Field",
    id: "nav8",
    tag: "Thorn Field",
    visible: ko.observable(true),
    boolTest: true
  },
  {
    title: "Rainbow Bridge",
    lat: 41.157125064316936,
    lng: -80.0817670673132,
    des: "Historic Footbridge",
    id: "nav9",
    tag: "Rainbow Bridge",
    visible: ko.observable(true),
    boolTest: true
  },
  {
    title: "Memorial Hall",
    lat: 41.155032874972484,
    lng: -80.08209429681301,
    des: "Men's Freshman Dorm",
    id: "nav10",
    tag: "Memorial Residence Hall",
    visible: ko.observable(true),
    boolTest: true
  },
  {
    title: "Hicks Hall",
    lat: 41.15361616637502,
    lng: -80.07832109928131,
    des: "Men's Freshman Dorm",
    id: "nav11",
    tag: "Hicks Residence Hall",
    visible: ko.observable(true),
    boolTest: true
  },
  {
    title: "Hopeman Hall",
    lat: 41.15410287940975,
    lng: -80.08043132722378,
    des: "Men's Upperclassman Dorm",
    id: "nav12",
    tag: "Hopeman Hall",
    visible: ko.observable(true),
    boolTest: true
  },
  {
    title: "Lincoln Hall",
    lat: 41.15471883885829,
    lng: -80.08071631193161,
    des: "Men's Upperclassman Dorm",
    id: "nav13",
    tag: "Lincoln Residence Hall",
    visible: ko.observable(true),
    boolTest: true
  },
  {
    title: "Science, Technology, and Math Building",
    lat: 41.155362055908036,
    lng: -80.0789936631918,
    des: "Labs and Offices",
    id: "nav14",
    tag: "STEM Hall",
    visible: ko.observable(true),
    boolTest: true
  },
  {
    title: "Hoyt Hall of Engineering",
    lat: 41.154680467782995,
    lng: -80.07896684110165,
    des: "Engineering Building",
    id: "nav15",
    tag: "Hoyt Hall",
    visible: ko.observable(true),
    boolTest: true
  },
  {
    title: "Pew Fine Arts Center",
    lat: 41.15288508025434,
    lng: -80.07712550461292,
    des: "Music Facilities and Carnegie Concert Hall",
    id: "nav16",
    tag: "Pew Fine Arts Center",
    visible: ko.observable(true),
    boolTest: true
  },
  {
    title: "Henry Buhl Library",
    lat: 41.154044312472344,
    lng: -80.07944628596306,
    des: "Library and Reference Rooms",
    id: "nav17",
    tag: "Buhl Library",
    visible: ko.observable(true),
    boolTest: true
  },
  {
    title: "Mary Ethel Pew Hall",
    lat: 41.156710064886525,
    lng: -80.07850080728531,
    des: "Women's Upperclassman Dorm",
    id: "nav18",
    tag: "Mary Anderson Pew Residence Hall",
    visible: ko.observable(true),
    boolTest: true
  },
  {
    title: "Helen Harker Hall",
    lat: 41.15601031537129,
    lng: -80.07909290492535,
    des: "Women's Upperclassman Dorm",
    id: "nav19",
    tag: "Harker Residence Hall",
    visible: ko.observable(true),
    boolTest: true
  },
  {
    title: "Breen Student Union",
    lat: 41.15485515697045,
    lng: -80.07791541516781,
    des: "Student Union and Gedunk Snack Bar",
    id: "nav20",
    tag: "Breen Student Union",
    visible: ko.observable(true),
    boolTest: true
  },
  {
    title: "Presidential Residence",
    lat: 41.15462594042684,
    lng: -80.08240610361099,
    des: "College President's Residence",
    id: "nav21",
    tag: "Presidential Residence",
    visible: ko.observable(true),
    boolTest: true
  },
  {
    title: "Rathburn Hall",
    lat: 41.15734922350031,
    lng: -80.0803441554308,
    des: "Religious Administrative Center",
    id: "nav22",
    tag: "Rathburn Hall",
    visible: ko.observable(true),
    boolTest: true
  },
  {
    title: "Phillips Fieldhouse",
    lat: 41.157701616342365,
    lng: -80.08398793637753,
    des: "Athletic Facilities",
    id: "nav23",
    tag: "Phillips Fieldhouse",
    visible: ko.observable(true),
    boolTest: true
  },
  {
    title: "Cunningham Hall",
    lat: 41.156431377663,
    lng: -80.08594125509262,
    des: "Historic Residence",
    id: "nav24",
    tag: "Cunningham House",
    visible: ko.observable(true),
    boolTest: true
  },
  {
    title: "Zerbe Health Center",
    lat: 41.15424929652435,
    lng: -80.08130706846714,
    des: "Medical Facilties and Counseling Center",
    id: "nav25",
    tag: "Zerbe Health Center",
    visible: ko.observable(true),
    boolTest: true
  },
  {
    title: "Walters Tennis Courts",
    lat: 41.15801462845279,
    lng: -80.08506283164024,
    des: "Ten Hard Court Courts",
    id: "nav26",
    tag: "Walters Tennis Courts",
    visible: ko.observable(true),
    boolTest: true
  },
  {
    title: "Rockwell Hall of Science",
    lat: 41.155526645755934,
    lng: -80.07942348718643,
    des: "Historic Sciences Building",
    id: "nav27",
    tag: "Rockwell Hall",
    visible: ko.observable(true),
    boolTest: true
  },
  {
    title: "Hicks Dining Hall",
    lat: 41.153301113687334,
    lng: -80.07855713367462,
    des: "Dining Hall",
    id: "nav28",
    tag: "Hicks Dining Hall",
    visible: ko.observable(true),
    boolTest: true
  },
  {
    title: "Mary Anderson Pew West",
    lat: 41.15688373893379,
    lng: -80.08012488484383,
    des: "Women's Dorm and Dining Hall",
    id: "nav29",
    tag: "West Residence Hall",
    visible: ko.observable(true),
    boolTest: true
  },
  {
    title: "Mary Anderson Pew South",
    lat: 41.156437436093505,
    lng: -80.07996663451195,
    des: "Women's Dorm",
    id: "nav30",
    tag: "South Residence Hall",
    visible: ko.observable(true),
    boolTest: true
  }
];

// Modified from http://stackoverflow.com/questions/6588549/make-google-maps-plugin-black-white-or-with-sepia-filter
// Courtesy of Allan Breyes, Github
var roadAtlasStyles = [
  {
    "featureType": "all",
    "elementType": "all",
    "stylers": [
      {
        "saturation": "-100"
      },
      {
        "gamma": "0.50"
      },
      {
        "lightness": "-10"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "all",
    "stylers": [
      { "color": "#C0C0C0" },
    ]
  },
  {
    "featureType": "poi",
    "elementType": "all",
    "stylers": [
      { "saturation": -100 },
      { "visibility": "off" }
    ]
  },
  {
    "featureType": "water",
    "elementType": "labels",
    "stylers": [
      { "visibility": "off" }
    ]
  }
];

//Assorted global variables.
var map;
var mapOptions;
var marker, i;
var infowindow;
var station;
var flickrJSON;
var fullImageArray = [];
var imageDict = {};
var bounds;

//Throws an alert if Google Maps doesn't load correctly.
function googleError() {
  alert("Google Maps API failed to load");
}

//Initialize a new map object, with screen size variables.
function initialize() {
  mapOptions = {
    center: new google.maps.LatLng(41.15585784370655, -80.08137613534927),
    mapTypeControlOptions: {
      mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'usroadatlas']
    },
    mapTypeControl: false,
    panControl: false,
    streetViewControl: false,
    zoomControl: false,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };

  infowindow = new google.maps.InfoWindow({
    maxWidth: 250
  });

  //Instantiate a new map and assign style and loop parameters.
  map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
  var styledMapOptions = {};
  var usRoadMapType = new google.maps.StyledMapType(roadAtlasStyles, styledMapOptions);
  map.mapTypes.set('usroadatlas', usRoadMapType);
  map.setMapTypeId('usroadatlas');

  //Call all associated functions
  addImages();
  addMarkers(locations);
  setAll();
}

window.onload = initialize;

//This function loads an album from the official GCC flickr account.
function getImages() {
  var flickrUrl = "https://api.flickr.com/services/rest/?format=json&method=flickr.photosets.getPhotos&photoset_id=72157649823372172&api_key=e04b29ace4aaa8f99246a1d19934bf0c&jsoncallback=?";
  $.ajax({
    url: flickrUrl,
    dataType: 'jsonp',
    jsonp: 'jsoncallback',
    error: function() {
      viewModel.showError(true);
      viewModel.showFlickrError(true);
    }
  }).done(function(data) {
      var photo = data.photoset.photo;
      flickrJSON = photo;
  }).fail(function() {
      viewModel.showError(true);
      viewModel.showFlickrError(true);
  });
}

//This function takes the data from the previous function, assembles it into a URL, and passes it to a dictionary.
function addImages() {
  for (var i=0; i < flickrJSON.length; i++) {
    var photo = 'https://farm' + flickrJSON[i].farm + '.staticflickr.com/' + flickrJSON[i].server + '/' + flickrJSON[i].id + '_' + flickrJSON[i].secret + '.jpg';
    fullImageArray.push(photo);
    imageDict[flickrJSON[i].title] = fullImageArray[i];
  }
}

//Sets markers on map through the initialize function
function addMarkers(location) {
  //Various marker-related variables
  var image = {
    url: 'images/marker.png',
    size: new google.maps.Size(25, 39),
    origin: new google.maps.Point(0, 0),
    anchor: new google.maps.Point(0, 32)
  };
  var shape = {
    coords: [1, 25, -40, -25, 1],
    type: 'poly'
  };
  bounds = new google.maps.LatLngBounds();

  //Sets infowindows and attaches them to markers via for loop
  for (i = 0; i < location.length; i++) {
    var myLatLng = new google.maps.LatLng(location[i].lat, location[i].lng);
    location[i].marker = new google.maps.Marker({
      position: myLatLng,
      animation: google.maps.Animation.DROP,
      title: location[i].title,
      icon: image,
      shape: shape,
      map: map
    });
    bounds.extend(myLatLng);

    //The previously assembled URL is passed to the contentString
    if (location[i].tag in imageDict) {
      location[i].contentstring = '<img id="photos" src="' + imageDict[location[i].tag] + '" alt="Image of ' + location[i].title + '"><br><hr style="margin-bottom: 5px"><strong>' + location[i].title + '</strong>';
    } else {
      location[i].contentstring = '<img id="photos" src="images/noimage.png" alt="No image found"><br><hr style="margin-bottom: 5px"><strong>' + location[i].title + '</strong>';
    }

    //Infowindow is opened with click
    //Camera zooms and marker is animated, zoom determined by window size.
    google.maps.event.addListener(location[i].marker, 'click', (function(marker, i) {
      return function() {
        infowindow.setContent(location[i].contentstring);
        infowindow.open(map, this);
        map.panTo(marker.position);
        var windowWidth = $(window).width();
        if(windowWidth <= 1080) {
          map.setZoom(17);
        } else if(windowWidth > 1080) {
          map.setZoom(18);
        }
        marker.setAnimation(google.maps.Animation.BOUNCE);
        setTimeout(function () {
          marker.setAnimation(null);
        }, 1420);
      };
    })(location[i].marker, i));
    
    google.maps.event.addListener(map, "click", function(event) {
      infowindow.close();
    });
  }
  map.fitBounds(bounds);
}

//Determines whether markers should be set/visible
function setAll() {
  for (var i = 0; i < locations.length; i++) {
    if(locations[i].boolTest === true) {
      locations[i].marker.setVisible(true);
    } else {
      locations[i].marker.setVisible(false);
    }
  }
}

//Weather data is obtained from appropriate weather station
function retrieveData() {
  var self = this;
  station = "KPAGROVE1"; //KPASLIPPA4 alternate channel

  var url = "http://stationdata.wunderground.com/cgi-bin/stationlookup?station=" 
    + station + "&format=json&max-age=40&callback=?";

  self.getData = function() {
    return $.ajax({
      url: url,
      type: "GET",
      cache: false,
      dataType: "json",
      crossDomain: true,
      error: function() {
        viewModel.showError(true);
        viewModel.showWuError(true);
      }
    }).fail(function() {
      viewModel.showError(true);
      viewModel.showWuError(true);
    });
  };
}

//Takes data and displays it, updating it every few seconds.
function weatherData(id, data) {
  var self = this;

  self.showChanges = ko.observable(true);
  self.id = id || '-1';
  self.curTemp = ko.observable(data.tempf || 0);
  self.prevTemp = ko.observable(0);
  self.curWind = ko.observable(data.windchillf || 0);
  self.prevWind = ko.observable(0);
  self.stationName = ko.observable(station);

  self.compareProperties = function(cur, prev) {
    if(prev === 0 || !self.showChanges())
      return false;
    else {
      var notEqual = cur != prev;
      return notEqual;
    }
  };

  self.tempChanged = ko.computed(function() {
    return self.compareProperties(self.curTemp(), self.prevTemp());
  });

  self.windChanged = ko.computed(function() {
    return self.compareProperties(self.curWind(), self.prevWind());
  });

  //Replaces old forecast with newly obtained data
  self.update = function(newData) {
    self.prevTemp(self.curTemp());
    self.prevWind(self.curWind());

    self.curTemp(newData.tempf || 0);
    self.curWind(newData.windchillf || 0);
  };

  self.showHideChanges = function(showHide) {
    self.showChanges(showHide);
  };
}

//Viewmodel for markers and weather models
var viewModel = {
  query: ko.observable(''),
  conds: ko.observableArray([]),
  showNav: ko.observable(false),
  showWeather: ko.observable(false),
  showError: ko.observable(false),
  showFlickrError: ko.observable(false),
  showWuError: ko.observable(false),
};

viewModel.weather = ko.dependentObservable(function() {
  var self = this;
  var dataRet = new retrieveData();
  this.getData = function() {
    dataRet.getData().then(function(data) {
      for(var cond in data.conds) {
        addUpdate(cond, data.conds[cond]);
      }
      setTimeout(self.getData, 5000);
    });
  };

  var addUpdate = function (id, cond) {
    var match = viewModel.conds().filter(function(e) {
      return e.id === id;
    })[0];

    if(!match) {
      var wd = new weatherData(id,cond);
      viewModel.conds.push(wd);
    }
    else {
      match.update(cond);
    }
  };

  self.getData();
}, viewModel);

//Function filters markers based on input text
viewModel.locations = ko.dependentObservable(function() {
  var self = this;
  var search = self.query().toLowerCase();
  return ko.utils.arrayFilter(locations, function(marker) {
  if (marker.title.toLowerCase().indexOf(search) >= 0) {
      marker.boolTest = true;
      return marker.visible(true);
    } else {
      marker.boolTest = false;
      setAll();
      return marker.visible(false);
    }
  });
}, viewModel);

//Resets the map to the original center on click, changing zoom based on window size
viewModel.resetMap = function() {
  map.fitBounds(bounds);
  infowindow.close();
  for (var i = 0; i < locations.length; i++) {
    locations[i].marker.setVisible(true);
  }
};

//On list item clicks, the infowindow is opened and image displayed.
viewModel.clickMarker = function(location) {
  google.maps.event.trigger(location.marker, 'click');
};

//On button click, the weather is displayed or hidden.
viewModel.toggleWeather = function() {
  var self = this;
  self.showWeather(!self.showWeather());
};

//On button click, the nav  is displayed or hidden.
viewModel.toggleNav = function() {
  var self = this;
  self.showNav(!self.showNav());
};

//On button click, the error screen and button are displayed or hidden.
viewModel.toggleError = function() {
  var self = this;
  self.showError(!self.showError());
};

ko.applyBindings(viewModel);

$(document).ready(function() {
  $('#wrapper').fadeIn();
});
