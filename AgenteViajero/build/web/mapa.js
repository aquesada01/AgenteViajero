/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Other/javascript.js to edit this template
 */
let map = L.map('map').setView([4.639386, -74.082412], 6);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

function actualizarMapa() {

    L.marker([4.612639, -74.0705]).addTo(map).bindPopup("<b>Esto es Bogotá!</b><br />Yo soy un popup.").openPopup();

L.circle([4.612639, -74.0705], 500, {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5
}).addTo(map).bindPopup("I am a circle.");

L.polygon([
    [4.6368, -74.083],
    [4.70796, -74.09948],
    [4.7028, -74.1459]
]).addTo(map).bindPopup("I am a polygon.");


var popup = L.popup();

function onMapClick(e) {
     popup.setLatLng(e.latlng).setContent("You clicked the map at " + e.latlng.toString()).openOn(map);
 }
map.on('click', onMapClick);
   

}





