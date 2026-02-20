// https://api.openweathermap.org/data/2.5/weather?q=varanasi&appid=c2b5fcb872a6ef13e92a232d11c30394&units=metric

const ApiKey = "c2b5fcb872a6ef13e92a232d11c30394";
const ApiLink = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const SearchCity = document.querySelector(".card input");
const Searchbtn = document.querySelector(".card button");

// const weatherIcon = document.querySelector(".disdis")

async function WheatherCheck(city) {
    const response = await fetch(ApiLink + city + `&appid=${ApiKey}`);
    

    if (response.status == 404) {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".minicont").style.display = "none";
    } else {
        var data = await response.json();

        document.querySelector(".citytemp").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".cityname").innerHTML = data.name;
        document.querySelector(".wind-speed").innerHTML = data.wind.speed + "m/s";
        document.querySelector(".description").innerHTML = data.weather[0].description;
        document.querySelector(".minicont").style.display = "none";

        document.querySelector(".error").style.display = "none";
    }
}

Searchbtn.addEventListener("click", () => {
    WheatherCheck(SearchCity.value);
})

