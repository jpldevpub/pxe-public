/* eslint-disable no-undef */
/* eslint-disable no-unused-expressions */
collectionMap()
deliveryMap()

function collectionMap () {
  var markers = []
  var autocom = places({
    countries: ['gb'],
    aroundLatLngViaIP: false,
    type: 'city',
    container: document.querySelector('#collectionLocation')
  })
  autocom.on('suggestions', handleOnSuggestions)
  autocom.on('cursorchanged', handleOnCursorchanged)
  autocom.on('change', handleOnChange)
  autocom.on('clear', handleOnClear)

  var map = L.map('map-collection-container', { scrollWheelZoom: false, zoomControl: true })
  map.setView(new L.LatLng(54.266301, -4.043742), 4)

  var osmLayer = new L.TileLayer(
    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      minZoom: 3,
      maxZoom: 15,
      attribution: 'Map data © <a href="https://openstreetmap.org">OpenStreetMap</a> contributors. thx from phrexi'
    }
  )
  map.addLayer(osmLayer)

  function handleOnSuggestions (e) {
    markers.forEach(removeMarker)
    markers = []
    if (e.suggestions.length === 0) {
      map.setView(new L.LatLng(54.266301, -4.043742), 4)
      return
    }
    e.suggestions.forEach(addMarker)
    findBestZoom()
  }

  function handleOnChange (e) {
    markers.forEach(function (marker, markerIndex) {
      document.querySelector('#collectionLocation').value = e.suggestion.name
      document.querySelector('#colLat').value = e.suggestion.latlng.lat
      document.querySelector('#colLon').value = e.suggestion.latlng.lng
      if (markerIndex === e.suggestionIndex) {
        markers = [marker]
        marker.setOpacity(1)

        findBestZoom()
      } else { removeMarker(marker) }
    })
  }

  function handleOnClear () {
    map.setView(new L.LatLng(54.266301, -4.043742), 4)
    markers.forEach(removeMarker)
  }

  function handleOnCursorchanged (e) {
    markers
      .forEach(function (marker, markerIndex) {
        if (markerIndex === e.suggestionIndex) {
          marker.setOpacity(1)
          marker.setZIndexOffset(1000)
        } else {
          marker.setZIndexOffset(0)
          marker.setOpacity(0.5)
        }
      })
  }

  function addMarker (suggestion) {
    var truckIcon = L.icon({
      iconUrl: '../public/resources/images/maps/truck-selected-icon.png',
      iconSize: [60, 50],
      iconAnchor: [15, 50]
    })
    var marker = L.marker(suggestion.latlng, { icon: truckIcon, opacity: 0.4 })
    marker.addTo(map)
    markers.push(marker)
  }

  function removeMarker (marker) { map.removeLayer(marker) }

  function findBestZoom () {
    var featureGroup = L.featureGroup(markers)
    map.fitBounds(featureGroup.getBounds().pad(0.5), { animate: true })
  }
}

function deliveryMap () {
  var deliveryLocation = places({
    countries: ['gb'],
    aroundLatLngViaIP: false,
    type: 'city',
    container: document.querySelector('#deliveryLocation')
  })
  // input-map
  var map = L.map('map-delivery-container', { scrollWheelZoom: false, zoomControl: true })
  var osmLayer = new L.TileLayer(
    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      minZoom: 3,
      maxZoom: 15,
      attribution: 'Map data © <a href="https://openstreetmap.org">OpenStreetMap</a> contributors. thx from phrexi'
    }
  )

  var markers = []

  map.setView(new L.LatLng(54.266301, -4.043742), 4)
  map.addLayer(osmLayer)
  deliveryLocation.on('suggestions', handleOnSuggestions)
  deliveryLocation.on('cursorchanged', handleOnCursorchanged)
  deliveryLocation.on('change', handleOnChangeDelivery)
  deliveryLocation.on('clear', handleOnClear)

  function handleOnSuggestions (e) {
    markers.forEach(removeMarker)
    markers = []

    if (e.suggestions.length === 0) {
      map.setView(new L.LatLng(54.266301, -4.043742), 4)
      return
    }

    e.suggestions.forEach(addMarker)
    findBestZoom()
  }

  function handleOnChangeDelivery (e) {
    markers.forEach(function (marker, markerIndex) {
      document.querySelector('#deliveryLocation').value = e.suggestion.name
      document.querySelector('#delLat').value = e.suggestion.latlng.lat
      document.querySelector('#delLon').value = e.suggestion.latlng.lng
      if (markerIndex === e.suggestionIndex) {
        markers = [marker]
        marker.setOpacity(1)
        findBestZoom()
      } else {
        removeMarker(marker)
      }
    })
  }

  function handleOnClear () {
    map.setView(new L.LatLng(54.266301, -4.043742), 4)
    markers.forEach(removeMarker)
  }

  function handleOnCursorchanged (e) {
    markers
      .forEach(function (marker, markerIndex) {
        if (markerIndex === e.suggestionIndex) {
          marker.setOpacity(1)
          marker.setZIndexOffset(1000)
        } else {
          marker.setZIndexOffset(0)
          marker.setOpacity(0.5)
        }
      })
  }

  function addMarker (suggestion) {
    var truckIcon = L.icon({
      iconUrl: '../public/resources/images/maps/truck-selected-icon.png',
      iconSize: [60, 50],
      iconAnchor: [15, 50]
    })
    var marker = L.marker(suggestion.latlng, { icon: truckIcon, opacity: 0.4 })
    marker.addTo(map)
    markers.push(marker)
  }
  function removeMarker (marker) { map.removeLayer(marker) }

  function findBestZoom () {
    var featureGroup = L.featureGroup(markers)
    map.fitBounds(featureGroup.getBounds().pad(0.5), { animate: true })
  }
}

$(document).ready(() => { $('#map-delivery-container').hide() })

$('#collectionLocation').click(() => {
  $('#map-delivery-container').hide()
  $('#map-collection-container').show()
})
$('#deliveryLocation').click(() => {
  $('#map-collection-container').hide()
  $('#map-delivery-container').show()
})

/* #SUGGESTIONS RETURN
e.suggestion.type
  Type of the current suggestion, possible values: country, city, address, busStop, trainStation, townhall, airport.

e.suggestion.name
  Display name of the place found.
    Examples:
      ~ Paris
      ~ 589 Howard Street San Francisco

e.suggestion.value
  Full display name of the place found. It's the value displayed in the input.
    Examples:
      ~ Paris Île-de-France, France
      ~ 589 Howard Street San Francisco, California, United States of America

e.suggestion.highlight
  query was `par`
  console.log(suggestion.highlight);
    {
      name: '<em>Par</em>is',
      administrative: 'Île-de-France',
      country: 'France'
    }

e.suggestion.postcodes
  The list of all postcode (or ZIP Code) of the place found.
    Examples:
      ~  ["94102", "94103", "94104", ... ]
      ~  ["75008", "75009"]

e.suggestion.postcode
  ~ TS17 8NE

e.suggestion.latlng
  ~ { lat: 48.797885, lng: 2.337034 }

e.suggestion.suburb
  Suburb name.
    Examples:
      ~ Angelino heights
      ~ Harbor City

e.suggestion.county
  County level administrative region depending on the country.
    Examples:
      ~ Corrèze
      ~ Clark County

e.suggestion.city
  City Name:

e.suggestion.latlng.lat
  48.797885

e.suggestion.latlng.lng
  48.797885

e.suggestion.administrative
  Administrative region depending on the country.
    Examples:
      Pays de la Loire
      Texas
      Catalunya

document.querySelector('#oMaps-type').value = e.suggestion.type || ''
document.querySelector('#oMaps-name').value = e.suggestion.name || ''
document.querySelector('#oMaps-value').value = e.suggestion.value || ''
document.querySelector('#oMaps-highlight').value = e.suggestion.highlight || ''
document.querySelector('#oMaps-postcodes').value = e.suggestion.postcodes || ''
document.querySelector('#oMaps-postcode').value = e.suggestion.postcode || ''
document.querySelector('#oMaps-latlng').value = e.suggestion.latlng || ''
document.querySelector('#oMaps-suburb').value = e.suggestion.suburb || ''
document.querySelector('#oMaps-county').value = e.suggestion.county || ''
document.querySelector('#oMaps-city').value = e.suggestion.city || ''
document.querySelector('#oMaps-lat').value = e.suggestion.latlng.lat || ''
document.querySelector('#oMaps-lng').value = e.suggestion.latlng.lng || ''
document.querySelector('#oMaps-administrative').value = e.suggestion.administrative || ''

// PUG test /////////////////////////////
hr
label.label-train type
textarea#oMaps-type.form-control(name="oMaps-type" placeholder='oMaps-type' cols="30" rows="1" type='text')
label.label-train name
textarea#oMaps-name.form-control(name='oMaps-name' placeholder='oMaps-name' cols="30" rows="1" type='text')
label.label-train value
textarea#oMaps-value.form-control(name='oMaps-value' placeholder='oMaps-value' cols="30" rows="1" type='text')
label.label-train highlight
textarea#oMaps-highlight.form-control(name='oMaps-highlight' placeholder='oMaps-highlight' cols="30" rows="1" type='text')
label.label-train postcodes
textarea#oMaps-postcodes.form-control(name='oMaps-postcodes' placeholder='oMaps-postcodes' cols="30" rows="1" type='text')
label.label-train postcode
textarea#oMaps-postcode.form-control(name='oMaps-postcode' placeholder='oMaps-postcode' cols="30" rows="1" type='text')
label.label-train oMaps-latlng
textarea#oMaps-latlng.form-control(name='oMaps-latlng' placeholder='oMaps-latlng' cols="30" rows="1" type='text')
label.label-train oMaps-suburb
textarea#oMaps-suburb.form-control(name='oMaps-suburb' placeholder='oMaps-suburb' cols="30" rows="1" type='text')
label.label-train oMaps-county
textarea#oMaps-county.form-control(name='oMaps-county' placeholder='oMaps-county' cols="30" rows="1" type='text')
label.label-train oMaps-city
textarea#oMaps-city.form-control(name='oMaps-city' placeholder='oMaps-city' cols="30" rows="1" type='text')
label.label-train oMaps-lat
textarea#oMaps-lat.form-control(name='oMaps-lat' placeholder='oMaps-lat' cols="30" rows="1" type='text')
label.label-train oMaps-lng
textarea#oMaps-lng.form-control(name='oMaps-lng' placeholder='oMaps-lng' cols="30" rows="1" type='text')
label.label-train administrative
textarea#oMaps-administrative.form-control(name='oMaps-administrative' placeholder='oMaps-administrative' cols="30" rows="1" type='text')
hr
// Pug test ///////////////////////////

#oMaps-type
#oMaps-name
#oMaps-value
#oMaps-highlight
#oMaps-postcodes
#oMaps-postcode
#oMaps-latlng
#oMaps-suburb
#oMaps-county
#oMaps-city
#oMaps-lat
#oMaps-lng
#oMaps-administrative
  */
