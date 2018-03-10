// set up the namespace object
var EO = {};

// ***** CONFIGURATION ****************************************************
EO.Config = {
  googleMapsApiKey: "AIzaSyCKiyPHKgXBotpudiahLDfLh2LimVdSZmg",
  googleMapsMarker: "https://eoimg.s3.amazonaws.com/concepts/pindrop.png",
  googleMaps: {
      zoom: 6,
      center: {lat: 51.51842, lng: -0.07739},
      styles: [
        {
            elementType: 'geometry',
            stylers: [{color: '#f5f5f5'}]
          },
          {
            elementType: 'labels.icon',
            stylers: [{visibility: 'off'}]
          },
          {
            elementType: 'labels.text.fill',
            stylers: [{color: '#616161'}]
          },
          {
            elementType: 'labels.text.stroke',
            stylers: [{color: '#f5f5f5'}]
          },
          {
            featureType: 'administrative.land_parcel',
            elementType: 'labels.text.fill',
            stylers: [{color: '#bdbdbd'}]
          },
          {
            featureType: 'poi',
            elementType: 'geometry',
            stylers: [{color: '#eeeeee'}]
          },
          {
            featureType: 'poi',
            elementType: 'labels.text.fill',
            stylers: [{color: '#757575'}]
          },
          {
            featureType: 'poi.park',
            elementType: 'geometry',
            stylers: [{color: '#e5e5e5'}]
          },
          {
            featureType: 'poi.park',
            elementType: 'labels.text.fill',
            stylers: [{color: '#9e9e9e'}]
          },
          {
            featureType: 'road',
            elementType: 'geometry',
            stylers: [{color: '#ffffff'}]
          },
          {
            featureType: 'road.arterial',
            elementType: 'labels.text.fill',
            stylers: [{color: '#757575'}]
          },
          {
            featureType: 'road.highway',
            elementType: 'geometry',
            stylers: [{color: '#dadada'}]
          },
          {
            featureType: 'road.highway',
            elementType: 'labels.text.fill',
            stylers: [{color: '#616161'}]
          },
          {
            featureType: 'road.local',
            elementType: 'labels.text.fill',
            stylers: [{color: '#9e9e9e'}]
          },
          {
            featureType: 'transit.line',
            elementType: 'geometry',
            stylers: [{color: '#e5e5e5'}]
          },
          {
            featureType: 'transit.station',
            elementType: 'geometry',
            stylers: [{color: '#eeeeee'}]
          },
          {
            featureType: 'water',
            elementType: 'geometry',
            stylers: [{color: '#c9c9c9'}]
          },
          {
            featureType: 'water',
            elementType: 'labels.text.fill',
            stylers: [{color: '#9e9e9e'}]
          }
      ],
      hiding: [
        {
          featureType: 'poi.business',
          stylers: [{visibility: 'off'}]
        },
        {
          featureType: 'transit',
          elementType: 'labels.icon',
          stylers: [{visibility: 'off'}]
        }
      ]
    }
};

// ***** DEALER DATA ******************************************************
EO.Data = {
  Dealers: [
    {
      code: "ABA",
      name: "Abacus Office Direct",
      url: "https://www.abacusofficedirect.co.uk",
      address: "Unit I, Lammas Courtyard, Weldon Industrial Estate, Corby, NN17 5EZ",
      phone: "08452309714",
      email: "sales@abacusofficesupplies.co.uk",
      lat: 52.50276,
      lng: -0.6459
    },
    {
      code: "ABB",
      name: "Abbotts Office Solutions",
      url: "http://www.abbotts-office.com",
      address: "2D STATION YARD, Thame, Oxfordshire, OX9 3UH",
      phone: "01844268360",
      email: "sales1@abbotts-office.com",
      lat: 51.74104, 
      lng: -0.96712
    },
    {
      code: "AWH",
      name: "Admin Warehouse",
      url: "https://www.admin-warehouse.co.uk",
      address: "Unit 6, Seawall Court, Seawall Road, Cardiff, CF24 5PQ",
      phone: "02920373355",
      email: "awh@admin-warehouse.co.uk",
      lat: 51.48133,
      lng: -3.14261
    },
    {
      code: "BBO",
      name: "Big Box Office",
      url: "http://www.bigboxofficeproducts.com",
      address: "49 Old Town Road, Bellaghy, Magherafelt, County Derry, BT45 8LQ",
      phone: "07855772274",
      email: "jw@bigboxoffice.co.uk",
      lat: 54.80132,
      lng: -6.52729
    },
    {
      code: "BOS",
      name: "Boss Office",
      url: "https://www.boss-ltd.co.uk",
      address: "7 Howe Street, Edinburgh, Midlothian, EH3 6TE",
      phone: "0808 1686 397",
      email: "stephen@boss-ltd.co.uk",
      lat: 55.9558,
      lng: -3.20169
    },
    {
      code: "DOS",
      name: "Discount Office Supplies",
      url: "https://www.discountofficesupplieslimited.co.uk",
      address: "5D Moorfields, Blackpool, Lancashire, FY2 0JY",
      phone: "08454592500",
      email: "dave@discountofficesupplieslimited.co.uk",
      lat: 53.85036,
      lng: -3.02303
    },
    {
      code: "DSL",
      name: "Direct Stationery",
      url: "https://www.directstationery.co.uk",
      address: "Unit 17, Castle Road, Tech Centre, Sittingbourne, ME10 3RG",
      phone: "08081687184",
      email: "sales@directstationery.co.uk",
      lat: 51.34929,
      lng:  0.75551
    },
    {
      code: "ESS",
      name: "Essex Stationery",
      url: "https://www.essexstationery.co.uk",
      address: "10 BRIARFIELDS, KIRBY LE SOKEN, FRINTON ON SEA, CO13 0HE",
      phone: "01255671125",
      email: "sales@essexstationery.co.uk",
      lat: 51.85206,
      lng: 1.22389
    },
    {
      code: "GDN",
      name: "Guardian Office Supplies",
      url: "https://www.guardianoffice.co.uk",
      address: "16 Maybrook Road, Maybrook Business Park, Minworth, Sutton Coldfield, B76 1AL",
      phone: "01213130123",
      email: "sarah@guardianoffice.co.uk",
      lat: 52.52954,
      lng: -1.78988
    },
    {
      code: "IDL",
      name: "Ideal Office Supplies",
      url: "https://www.idealofficesupplies.co.uk",
      address: "Ideal Office Supplies, Dome House, 48 Artillery Lane, London, E1 7LS",
      phone: "0844 238 0008",
      email: "sshaw@officepower.net",
      lat: 51.51842,
      lng: -0.07739
    },
    {
      code: "JLG",
      name: "J L Group Ltd",
      url: "https://www.jl-officesupplies.co.uk",
      address: "1 Knowsley Park Way, Haslingden, Rossendale, BB4 4RS",
      phone: "01706833633",
      email: "officesupplies@jl-group.co.uk",
      lat: 53.69238,
      lng: -2.32341
    },
    {
      code: "JST",
      name: "Just Office",
      url: "https://www.just-office.co.uk",
      address: "Unit 8 Brannam Crescent, Roundswell Business Park, Barnstaple, Devon, EX31 3TD",
      phone: "01271375089",
      email: "sales@just-office.co.uk",
      lat: 51.06561,
      lng: -4.0878
    },
    {
      code: "LIM",
      name: "Lime",
      url: "https://www.limeofficesupplies.co.uk",
      address: "The Business Centre, Edward Street, Redditch, Worcestershire, B97 6HA",
      phone: "07891194159",
      email: "sales@limeoffice.net",
      lat: 52.30734,
      lng: -1.94665
    },
    {
      code: "MEM",
      name: "Memorandum Ltd",
      url: "https://www.memorandum.co.uk",
      address: "4 HIGH STREET, BERKELEY, GLOUCESTERSHIRE, GL13 9BJ",
      phone: "08009553553",
      email: "sarah@memorandum.co.uk",
      lat: 51.69114,
      lng: -2.45838
    },
    {
      code: "NGO",
      name: "Nice Guys Office Supplies",
      url: "http://www.niceguysofficesupplies.com",
      address: "Sun Pier House, Sun Pier, Medway Street, Chatham, ME4 4HF",
      phone: "08082810285",
      email: "jeff@niceguysofficesupplies.com",
      lat: 51.38413,
      lng: 0.52073
    },
    {
      code: "OFW",
      name: "Office World",
      url: "http://www.officeworld.uk.com",
      address: "10 Park Road, Selsey, West Sussex, PO20 0PR",
      phone: "03454081145",
      email: "ales@officeworld.uk.com",
      lat: 50.73843,
      lng: -0.772
    },
    {
      code: "OOP",
      name: "Burke One",
      url: "https://www.burkeone.co.uk",
      address: "Unit 28 Ormeau Business Park, 8 Cromac Avenue, Belfast, BT7 2JA",
      phone: "02890835847",
      email: "sales@burkeone.co.uk",
      lat: 54.58925,
      lng: -5.9244
    },
    {
      code: "OSB",
      name: "Osbourne's Stationers",
      url: "https://www.osbornestationersdirect.co.uk",
      address: "142 High Street, Harborne, Birmingham, B17 9NN",
      phone: "01214283711",
      email: "help@osbornestationerdirect.co.uk",
      lat: 52.45918,
      lng: -1.94743
    },
    {
      code: "OSW",
      name: "Office Solutions Wales",
      url: "http://www.osw.co",
      address: "Bank House, East Street, Rhayader, Powys, LD6 5DL",
      phone: "01597811111",
      email: "sales@osw.co",
      lat: 52.30078,
      lng: -3.50999
    },
    {
      code: "RET",
      name: "Retrospect Office",
      url: "https://www.retrospectoffice.co.uk",
      address: "118 Wallace Court, 44 Tizzard Grove, Blackheath, London, SE3 9EQ",
      phone: "08081781704",
      email: "reece@retrospectoffice.co.uk",
      lat: 51.45991,
      lng: 0.0245
    },
    {
      code: "ROS",
      name: "Rainbow Office Supplies",
      url: "https://www.rainbowofficekendal.co.uk",
      address: "31 NATLAND ROAD, KENDAL, CUMBRIA, LA9 7LR",
      phone: "01539729998",
      email: "steve@rainbowos.co.uk",
      lat: 54.3123,
      lng: -2.74118
    },
    {
      code: "RPL",
      name: "Red Planet Office Supplies",
      url: "https://www.redplanet4u.co.uk",
      address: "8 Ranelagh Road, Weymouth, Dorset, DT4 7JD",
      phone: "01305231333",
      email: "debbie@redplanet4u.co.uk",
      lat: 50.61594,
      lng: -2.45434
    },
    {
      code: "RSL",
      name: "Riverside",
      url: "https://www.riversideofficesupplies.co.uk",
      address: "Stuart House, Eskmills Business Park, Station Road, Musselburgh, EH21 7PB",
      phone: "08081781649",
      email: "sales@riversideofficesupplies.co.uk",
      lat: 55.93819,
      lng: -3.05985
    },
    {
      code: "SOS",
      name: "Stationery On Screen",
      url: "https://www.stationeryonscreen.co.uk",
      address: "16 New Forest Way, Daventry, NN11 9RL",
      phone: "08455050095",
      email: "richard@stationeryonscreen.co.uk",
      lat: 52.27037,
      lng: -1.16807
    },
    {
      code: "STK",
      name: "Office Stock",
      url: "https://officestock.org.uk",
      address: "3 Pledges Yard, 63 Falkland Road, Dorking, Surrey, London, Surrey, RH4 3AD",
      phone: "08082810279",
      email: "steve.baskett@officestock.org.uk",
      lat: 51.2255,
      lng: -0.33579
    },
    {
      code: "STY",
      name: "Stylus Stationers",
      url: "https://www.stylus.co.uk",
      address: "Little Paddock, Maidstone Road, Seal, SEVENOAKS, Kent, TN15 0EH",
      phone: "02036213263",
      email: "sales@stylus.co.uk",
      lat: 51.28811,
      lng: 0.22715
    },
    {
      code: "TOR",
      name: "Torch Office Supplies Ltd",
      url: "https://www.torchofficesuppliesltd.co.uk",
      address: "Innovation House, Daleside Road, Nottingham, NG2 4DH",
      phone: "01158372420",
      email: "tinabyford@torchofficesuppliesltd.co.uk",
      lat: 52.94628,
      lng: -1.12491
    },
    {
      code: "TSW",
      name: "The Stationery Warehouse",
      url: "https://www.thestationerywarehouse.co.uk",
      address: "Unit 2, Higham’s Lodge Business Centre, Blackhorse Lane, London, E17 6SH",
      phone: "08081686389",
      email: "sales@thestationerywarehouse.co.uk",
      lat: 51.59109,
      lng: -0.03942
    },
    {
      code: "TWS",
      name: "Tom Woods Stationery",
      url: "https://www.tomwoodsstationery.co.uk",
      address: "83 Drennan Road, Boardmills, Lisburn, County Antrim, BT27 6UR",
      phone: "02890763444",
      email: "sales@tomwoodsstationery.co.uk",
      lat: 54.46314,
      lng: -5.94167
    },
    {
      code: "USA",
      name: "Usave Business",
      url: "https://www.usavebusiness.co.uk",
      address: "20 Burns St, Ilkeston, Derbyshire, DE7 8AA",
      phone: "07908624158",
      email: "louise@usavebusiness.co.uk",
      lat: 52.97181,
      lng: -1.31018
    },
    {
      code: "WOS",
      name: "Winters Office Supplies",
      url: "https://www.wintersofficesupplies.co.uk",
      address: "28 OSPREY GARDENS, GOWANBANK, FORFAR, FORFAR, DD8 2UU",
      phone: "01382737227",
      email: "pamela@wintersofficesupplies.co.uk",
      lat: 56.64948,
      lng: -2.86743
    },
    {
      code: "WTS",
      name: "WT Supplies",
      url: "https://www.wtsupplies.co.uk",
      address: "C/O Kirk Newsholme, 4315 Park Approach, Thorpe Park, Leeds, Yorkshire, LS15 8GB",
      phone: "01274397420",
      email: "sales@wtsupplies.co.uk",
      lat: 53.79862,
      lng: -1.42797
    }
  ]
};

// ***** GOOGLE MAP *******************************************************
EO.GoogleMap = function()
{
  // ----- PRIVATE VARIABLES ----------------------------------------------
  var _apiKey = "",
      _map = {},
      _mapMarkers,
      _dealerData = {},
      _mapConfig = {},
      _mapBounds = {};
  
  // ----- PRIVATE FUNCTIONS ----------------------------------------------
  function _loadGoogleMapsScript(apiKey, mapConfig, dealerData)
  {
    // set the private data
    this._apiKey = apiKey;
    this._mapConfig = mapConfig;
    this._dealerData = dealerData;

    // get the Google Maps script & run callback on success
    $.getScript("https://maps.googleapis.com/maps/api/js?key=" + 
                this._apiKey +
                "&callback=EO.GoogleMap.plotDealerLocations");
  }
  
  function _drawMap()
  {
    if(this._map === undefined)
    {
      // load the intial google map view
      this._map = new google.maps.Map(document.getElementById('map'), this._mapConfig);
    }
  }
  
  function _plotDealerLocations()
  {
    var mapMarkers = [];
    
    // loop through each dealer location to create map markers
    for(var i = 0; i < this._dealerData.length; i++)
    {
      mapMarkers[i] = new google.maps.Marker(
      {
        position: {
          lat: this._dealerData[i].lat,
          lng: this._dealerData[i].lng
        },
        map: this._map,
        title: this._dealerData[i].name,
        icon: EO.Config.googleMapsMarker,
        dealerCode: this._dealerData[i].code
      });
    }
    
    this._mapMarkers = mapMarkers;
  }
  
  function _setMapBounds()
  {
    this._mapBounds = new google.maps.LatLngBounds();
    
    // loop through each marker to find the extents of the view
    for(var i = 0; i < this._mapMarkers.length; i++)
    {
      // extend the bounds to include each marker's position
      this._mapBounds.extend(this._mapMarkers[i].position);
    }
    
    // fit the map to the inclusive bounds of the markers
    this._map.fitBounds(this._mapBounds);
  }
  
  function _initMapMarkerInteraction()
  {
    for(var i = 0; i < this._mapMarkers.length; i++)
    {
      /* immediate function to ensure "i" remains the correct
       * value when the listener call is run on marker click
       * (otherwise it ends up as the value of "i" at the end 
       * of the loop)
       */
      (function(i)
      {
        // add event listners to the map markers
        this._mapMarkers[i].addListener('mouseover', function()
        {
          // display dealer data associated with this marker
          EO.DealerDisplay.show(EO.Data.Dealers[i]);
        });
        
        // add event listners to the map markers
        this._mapMarkers[i].addListener('mouseout', function()
        {
          // hide displayed dealer data
          EO.DealerDisplay.hide();
        });
      })(i);
    }
  }
  
  function _showMarkers(dealerCodes) 
  {
    var markerCode;
    
    // exit if there are no markers defined yet
    if(this._mapMarkers === undefined){return;}
    
    // loop through all markers
    for(var i = 0; i < this._mapMarkers.length; i++)
    {
      markerCode = this._mapMarkers[i].dealerCode;
      
      // see if the dealer code is in the array of items to show
      if(dealerCodes.indexOf(markerCode) !== -1)
      {
        this._mapMarkers[i].setVisible(true);
      }
      else
      {
        this._mapMarkers[i].setVisible(false);
      }
    }
  }
  
  // ----- PUBLIC FUNCTIONS -----------------------------------------------
  return {
    init: function(apiKey, mapConfig, dealerData)
    {
      _loadGoogleMapsScript(apiKey, mapConfig, dealerData);
    },
    plotDealerLocations: function()
    {
      // load the intial google map view
      _drawMap();
      
      // add daeler locations to the map
      _plotDealerLocations();
    
      // fit the map to the inclusive bounds of the markers
      _setMapBounds();

      // initialise any info window popups
      _initMapMarkerInteraction();
    },
    showMarkers: function(dealerCodes) 
    {
      // show all markers
      _showMarkers(dealerCodes);
    }
  };
}();

// ***** DEALER SEARCH ****************************************************
EO.DealerSearch = function(){
  var _filteredDealerCodes = [];
  
  function _filterDealers(dealerArray, searchText)
  {
    var filteredDealers = [];

    // check if there's any search text entered
    if(searchText == undefined ||
       searchText === "")
    {
      // show all search results
      filteredDealers = dealerArray;
    }
    else
    {
      searchText = searchText.toLowerCase();
      
      // filter results by search text
      filteredDealers = dealerArray.filter(function(value)
      {
        var dealerName = value.name.toLowerCase(),
            dealerCode = value.code.toLowerCase();
        
        // check against the dealer name
        if(dealerName.indexOf(searchText) !== -1)
        {
           // matched object
           return true;
        }
        
        // check against the dealer code
        if(dealerCode.indexOf(searchText) !== -1)
        {
           // matched object
           return true;
        }

        // not matched
        return false;
      });
    }
    
    // save filtered dealer codes to the current object
    _saveDealerCodes(filteredDealers);
    
    // display the filtered dealers
    _displayDealers(filteredDealers);
  }
  
  function _saveDealerCodes(dealers)
  {
    this._filteredDealerCodes = [];

    // save the filtered dealers
    for(var i = 0; i < dealers.length; i++)
    {
      this._filteredDealerCodes.push(dealers[i].code);
    }
  }
  
  function _displayDealers(dealers)
  {
    var dealerList = document.querySelector('.findDealer__dealerList');
    
    // remove all dealers from the list (faster than innerHTML='')
    while (dealerList.firstChild) {
      dealerList.removeChild(dealerList.firstChild);
    }
    
    // show required markers, based on filtered dealers
    EO.GoogleMap.showMarkers(this._filteredDealerCodes);
    
    // loop through the array of dealers
    for(var i = 0; i < dealers.length; i++)
    { 
      var li = document.createElement('li');
      li.textContent = dealers[i].name;
      li.setAttribute('data-code', dealers[i].code);
      
      /* immediate function to ensure "i" remains the correct
       * value when the listener call is run on marker click
       * (otherwise it ends up as the value of "i" at the end 
       * of the loop)
       */
      (function(i)
      {
        li.addEventListener('mouseover', function(event)
        {
          // show only the markers for the filtered dealers
          EO.GoogleMap.showMarkers([
            event.target.getAttribute('data-code')
          ]);

          // display dealer data associated with this marker
          EO.DealerDisplay.show(dealers[i]);
        });
      })(i);
      
      li.addEventListener('mouseout', function()
      {
        EO.GoogleMap.showMarkers(this._filteredDealerCodes);
        
        // display dealer data associated with this marker
        EO.DealerDisplay.hide();
      }.bind(this));
      
      // add element to the document
      dealerList.appendChild(li);
    }
  }
  
  function _initDealerSearch(dealerArray)
  {
    document.querySelector('#findDealer')
      .addEventListener('keyup', function()
    {
      _filterDealers(dealerArray, this.value);
    });
  }
  
  return {
    init: function(dealerArray)
    {
      // initialise the dealer search
      _initDealerSearch(dealerArray);
 
      // show all dealers initially
      _filterDealers(dealerArray, "");
    }
  };
}();

// ***** DEALER DISPLAY ***************************************************
EO.DealerDisplay = function()
{
  function _displayDealerDetails(dealer)
  {
    var eleImg = document.querySelector('.map__dealerLogo'),
        eleEmail = document.querySelector('.map__dealerEmail'),
        elePhone = document.querySelector('.map__dealerPhone'),
        eleUrl = document.querySelector('.map__dealerWebUrl');

    if(dealer === undefined)
    {
      _hideDealerDetails();
    }
    else
    {
      // set disabled state for links
      eleUrl.removeAttribute('disabled');
      elePhone.removeAttribute('disabled');
      eleEmail.removeAttribute('disabled');

      // link & show the logo
      eleImg.src = 'https://powerimg.s3.amazonaws.com/' + dealer.code + '/uxr/logo.png';
      eleImg.setAttribute('class', 'map__dealerLogo');

      // switch the state from 'empty' to normal
      document.querySelector('.map__dealerLogoContainer').className = "map__dealerLogoContainer";
      document.querySelector('.map__dealerInfo').className = "map__dealerInfo";
    }
    
    // set text values
    document.querySelector('.map__dealerName').textContent = dealer.name;
    document.querySelector('.map__dealerAddress').textContent = dealer.address;
    eleUrl.textContent = dealer.url;
    elePhone.textContent = dealer.phone;
    eleEmail.textContent = dealer.email;
  }
  
  function _hideDealerDetails()
  {
    var eleEmail = document.querySelector('.map__dealerEmail'),
        elePhone = document.querySelector('.map__dealerPhone'),
        eleUrl = document.querySelector('.map__dealerWebUrl');
    
    // set text values
    document.querySelector('.map__dealerName').textContent = "Dealer Name";
    document.querySelector('.map__dealerAddress').textContent = "";
    eleUrl.textContent = "";
    elePhone.textContent = "";
    eleEmail.textContent = "";

    // set disabled state for links
    eleUrl.setAttribute('disabled', true);
    elePhone.setAttribute('disabled', true);
    eleEmail.setAttribute('disabled', true);

    // hide the logo
    document.querySelector('.map__dealerLogo').setAttribute('class', 'map__dealerLogo map__dealerLogo--hidden');

    // switch the state to 'empty'
    document.querySelector('.map__dealerLogoContainer').className += " map__dealerLogoContainer--empty";
    document.querySelector('.map__dealerInfo').className += " map__dealerInfo--empty";
  }
  
  return {
    show: function(dealer){
      _displayDealerDetails(dealer);
    },
    hide: function(){
      _hideDealerDetails();
    }
  };
}();

// ***** RUN THE CODE *****************************************************

// initialise the dealer search
EO.DealerSearch.init(EO.Data.Dealers);

// load the Google Map with our dealer data
EO.GoogleMap.init(
  EO.Config.googleMapsApiKey,
  EO.Config.googleMaps,
  EO.Data.Dealers
);