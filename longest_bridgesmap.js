let metroAreaCenterCoordinates = [39.8283, -98.5795]
let zoomlevel = 4 //1 = whole world and 20 will be city blocks  

let map = L.map('usbridges-map').setView(metroAreaCenterCoordinates, zoomlevel)
let icon = L.icon({
    iconUrl: 'marker.png',
    iconSize: [50,50],
    iconAnchor: [25,25]
})

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map)
 

bridges = [
    {
        "name": "Verrazano-Narrows Bridge", 
        "city_state": "New York, NY", 
        "span_meters": 1298.4, 
        "coordinates": [40.6066, -74.0447]
    }, 
    {
        "name": "Golden Gate Bridge", 
        "city_state": "San Francisco and Marin, CA", 
        "span_meters": 1280.2, 
        "coordinates": [37.8199, -122.4783]
    }, 
    {
        "name": "Mackinac Bridge", 
        "city_state": "Mackinaw and St Ignace, MI", 
        "span_meters": 1158.0, 
        "coordinates": [45.8174, -84.7278]
    }, 
    {
        "name": "George Washington Bridge", 
        "city_state": "New York, NY and New Jersey, NJ", 
        "span_meters": 1067.0, 
        "coordinates": [40.8517, -73.9527]
    }, 
    {
        "name": "Tacoma Narrows Bridge", 
        "city_state": "Tacoma and Kitsap, WA", 
        "span_meters": 853.44, 
        "coordinates": [47.2690, -122.5517]
    }
]
 

bridges.forEach(function(uslongestbridges){
    let marktext = `${uslongestbridges.name}<br>${uslongestbridges.span_meters} meters`
    L.marker(uslongestbridges.coordinates, {icon: icon})
    .bindPopup(marktext)
    .addTo(map)
    })
