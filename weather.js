const apikey = "633118e082449adbec2f5ef007d93258";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchbtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".Weather-icon");
async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apikey}`);
    var data = await response.json();

    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

    if(data.weather[0].main == "Clouds"){
        weatherIcon.src = "/images/clouds.png";
    }
    else if(data.weather[0].main == "Clear"){   
        weatherIcon.src = "/images/clear.png";
    }
    else if(data.weather[0].main == "Drizzle"){
        weatherIcon.src = "/images/drizzle.png";
    }
    else if(data.weather[0].main == "Humidity"){
        weatherIcon.src = "/images/humidity.png";
    }
    else if(data.weather[0].main == "Mist"){
        weatherIcon.src = "/images/mist.png";
    }
    else if(data.weather[0].main == "Rain"){
        weatherIcon.src = "/images/rain.png";
    }
    else if(data.weather[0].main == "Snow"){
        weatherIcon.src = "/images/snow.png";
    }
    else if(data.weather[0].main == "Wind"){
        weatherIcon.src = "/images/wind.png";
    }
}

searchbtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value);
})
checkWeather();