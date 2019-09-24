const WEATHER = document.querySelector(".js-weather");
const COORDS = 'coords';
const API_KEY ="0248ea4698d7bc0acf4a8ff15e303f51";


function getWeather(lat, lon){

fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`)
  .then(function(response){
    return response.json()
  }).then(function(json){
    const temperature = json.main.temp;
    const place = json.name;
    WEATHER.innerText = `${temperature}ºC  @   ${place}`;
  });
}

function saveCoords(coordsObj){
  localStorage.setItem(COORDS,JSON.stringify(coordsObj));
}

function handleGeoSuccess(position){
const latitude = position.coords.latitude;
const longitude = position.coords.longitude;
const coordsObj ={
  latitude:latitude,
  longitude:longitude
};
saveCoords(coordsObj);
getWeather(latitude,longitude);
alert(typeof longitude);
}


function handleGeoError(){
  console.log("Can't access geolocation");
}

function askForCoords(){
  navigator.geolocation.getCurrentPosition(handleGeoSuccess,handleGeoError);
}

function loadCoords(){
  const loadedCoords = localStorage.getItem(COORDS);
  if(loadedCoords===null){
    askForCoords();
  }else{
    const parsedCoords = JSON.parse(loadedCoords);
    getWeather(parsedCoords.latitude,parsedCoords.longitude);
  }

}

function init(){
loadCoords();

}

init();
