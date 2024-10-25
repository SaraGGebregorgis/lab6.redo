const bridges = [
    { name: "Verrazano-Narrows Bridge", city_state: "New York, NY", span_meters: 1298.4, coordinates: [40.6066, -74.0447] },
    { name: "Golden Gate Bridge", city_state: "San Francisco and Marin, CA", span_meters: 1280.2, coordinates: [37.8199, -122.4783] },
    { name: "Mackinac Bridge", city_state: "Mackinaw and St Ignace, MI", span_meters: 1158.0, coordinates: [45.8174, -84.7278] },
    { name: "George Washington Bridge", city_state: "New York, NY and New Jersey, NJ", span_meters: 1067.0, coordinates: [40.8517, -73.9527] },
    { name: "Tacoma Narrows Bridge", city_state: "Tacoma and Kitsap, WA", span_meters: 853.44, coordinates: [47.2690, -122.5517] }
];

// Leaflet map setup
let metroAreaCenterCoordinates = [39.8283, -98.5795];
let zoomlevel = 4;
let map = L.map('usbridges-map').setView(metroAreaCenterCoordinates, zoomlevel);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);



// Add markers to the map
bridges.forEach(function(bridge) {
    let marktext = `${bridge.name}<br>${bridge.span_meters} meters`;
    L.marker(bridge.coordinates).bindPopup(marktext).addTo(map);
});

// Prepare data for the chart
bridgeNames = bridges.map(bridge => bridge.name);
bridgeSpans = bridges.map(bridge => bridge.span_meters);

// Chart.js setup
let ctx = document.getElementById('bridgeChart').getContext('2d');
let bridgeChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: bridgeNames,
        datasets: [{
            label: 'Span (meters)',
            data: bridgeSpans,
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: 'Length (meters)'
                }
            },
            x: {
                title: {
                    display: true,
                    text: 'Bridges'
                }
            }
        }
    }
});