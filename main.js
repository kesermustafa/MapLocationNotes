let map;

navigator.geolocation.getCurrentPosition(loc, console.log("kullanici kabul etmedi"));


function loc(e) {
 
    map =  new L.map('map').setView([e.coords.latitude, e.coords.longitude],12);
    L.control;

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

}


