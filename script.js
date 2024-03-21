const APIkey = "9ad21f74bc5c85eefc4acfe305a0a44e";
const API = "https://api.openweathermap.org/data/2.5/weather?appid=9ad21f74bc5c85eefc4acfe305a0a44e&units=metric&q=";

const input=document.querySelector(".search input");
const btn=document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

const getWeather = async(city) => {
    const response= await fetch(API+city);
    var data = await response.json();
    console.log(data); 
    document.querySelector(".city").innerText=data.name;
    document.querySelector(".temperature").innerText=Math.round(data.main.temp)+"°C";
    document.querySelector("#humidity").innerText=data.main.humidity+"%";
    document.querySelector("#wind-speed").innerText=data.wind.speed+" km/h"; 
    weatherCondition=data.weather[0].main;
    if(weatherCondition=="Clear"){
        weatherIcon.src="images/clear.png";
    };if(weatherCondition=="Clouds"){
        weatherIcon.src="images/clouds.png";
    };if(weatherCondition=="Drizzle"){
        weatherIcon.src="images/drizzle.png";
    };if(weatherCondition=="Mist"){
        weatherIcon.src="images/mist.png";
    };if(weatherCondition=="Rain"){
        weatherIcon.src="images/rain.png";
    };if(weatherCondition=="Snow"){
        weatherIcon.src="images/snow.png";
    };
}

getWeather("Mumbai");

btn.addEventListener("click",()=>{
    getWeather(input.value);
});

