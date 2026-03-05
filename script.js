const apiKey = 136130981c1fa916e97a7bdf225ac4b2;

function getWeather(){

const city = document.getElementById("cityInput").value;

const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

fetch(url)
.then(response => response.json())
.then(data => {

if(data.cod === "404"){
alert("City not found");
return;
}

document.getElementById("city").innerText = data.name;

document.getElementById("temp").innerText =
"Temperature: " + data.main.temp + "°C";

document.getElementById("desc").innerText =
"Weather: " + data.weather[0].description;

document.getElementById("humidity").innerText =
"Humidity: " + data.main.humidity + "%";

const icon =
`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

document.getElementById("icon").src = icon;

});

}