
// Google Maps API Initialization
function initMap() {
  // Crear el mapa centrado en la Universidad Técnica Nacional (Costa Rica)
  const map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 10.00714128347572, lng: -84.21642988116847 }, // Coordenadas de la UTN
    zoom: 15, // Nivel de zoom
  });

  // Agregar un marcador en la ubicación de la UTN
  new google.maps.Marker({
    position: { lat: 10.00714128347572, lng: -84.21642988116847 },
    map: map,
    title: "Universidad Técnica Nacional", // Título del marcador
  });
}
// OpenWeather API
const weatherApiKey = "f0ec6ab7e0efab6f05825eb0c439f5bc";
const city = "Alajuela";

fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${weatherApiKey}&units=metric`)
  .then((response) => response.json())
  .then((data) => {
    document.getElementById("weatherInfo").innerHTML = `
      <h3>${data.name}</h3>
      <p>Temperatura: ${data.main.temp}°C</p>
      <p>Clima: ${data.weather[0].description}</p>
    `;
  })
  .catch((error) => {
    console.error("Error fetching weather data:", error);
  });

// Unsplash API
const unsplashApiKey = "tzJ_-0DWFYNmtNCFqon53xsy86GbfcqxDSNsVc0MuyY";

fetch(`https://api.unsplash.com/photos/?client_id=${unsplashApiKey}`)
  .then((response) => response.json())
  .then((images) => {
    const gallery = document.getElementById("galleryGrid");
    images.forEach((image) => {
      gallery.innerHTML += `
        <div class="overflow-hidden rounded shadow">
          <img src="${image.urls.small}" alt="${image.alt_description}" class="w-full h-auto">
        </div>`;
    });
  })
  .catch((error) => {
    console.error("Error fetching images:", error);
  });
