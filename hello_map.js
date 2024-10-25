let metroAreaCenterCoordinates = [39.8283, -98.5795]
let zoomlevel = 4  //1 = whole world and 20 will be city blocks

let map = L.map('college-map').setView(metroAreaCenterCoordinates, zoomlevel)

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map)

//there is two ways to to it 

//copy and paste this object in an array about the info of what I want to be marked
campuses =  [
    {"name": "Minneapolis College", "website": "https://minneapolis.edu", "coordinates": [44.9724, -93.2844] }, 
    {"name": "Saint Paul College", "website": "https://saintpaul.edu", "coordinates": [44.94839, -93.1099] }, 
    {"name": "Normandale Community College", "website": "https://normandale.edu", "coordinates": [44.8297, -93.3312] }, 
    {"name": "North Hennepin Community College", "website": "https://nhcc.edu", "coordinates": [45.1054232,-93.3767558] }, 
    {"name": "Century College", "website": "https://www.century.edu/", "coordinates": [45.0438494,-92.9862026] }
]

//use for each func to show the mark of each location with its name and website
campuses.forEach(function(collegeCampus) {
    //todraw a marker
    let markerText = `${collegeCampus.name}<br><a href="${collegeCampus.website}">Website</a>`
    L.marker(collegeCampus.coordinates).bindPopup(markerText) // text the will be shown when pointing around it 
    .addTo(map) //to add it on map u created
})


//this is the another method made more sense for me!
// let mctcCoordinates = [44.9724, -93.2844]
// let mctcMarker = L.marker(mctcCoordinates)
// .bindPopup('Minneaplis College<br><a href="https://minneapolis.edu">Website</a>')
// .addTo(map)

// let stPaulCoordinates = [44.9483, -93.1099]
// let stMarker = L.marker(stPaulCoordinates)
// .bindPopup('SaintPaul College<br><a href="https://saintpaul.edu">Website</a>')
// .addTo(map)

// let metroAreCircle = L.circle(metroAreaCenterCoordinates, {
//     color: 'green',
//     radius: 30000,
//     fillOpacity: 0.2
// }   )
// .bindPopup('Twin Cities Metro Area')
// .addTo(map)

// let NormandaleCommunityCollege = [44.8297, -93.3312]
// let Normandalemarker = L.marker(NormandaleCommunityCollege)
// .bindPopup('Normandale Community College<br><a href ="http://www.normandale.edu">Website</a>')
// .addTo(map)