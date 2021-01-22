let apiKey = "ac254995f1530b05133bdf3b89d170a4";
let city= "Sydney";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric`;
//let lat =position.coords.latitude;
//let long =position.coords.longitude;
//let apiCood= `https://api.openweathermap.org/data/2.5/onecall?lat=${position.coords.latitude}&lon=${position.coords.longitude}&exclude={part}&appid=ac254995f1530b05133bdf3b89d170a4`;
//from the axios github, makes it easy to send HTTP requests 

function showTemp(response){
    //console.log(response);
    let temperatureElement =document.querySelector("#temperature");
    let temperature =Math.round(response.data.main.temp);
    temperatureElement.innerHTML= `${temperature} °C`;
} 

function showHumidity(response){
    let temperatureHumidity =document.querySelector("#temperature-humidity");
    let humidity = Math.round(response.data.main.humidity);
    temperatureHumidity.innerHTML= `${humidity}`;
}

function showTemperatureDescription(response){
    let temperatureDescription =document.querySelector("#temperature-description");
    temperatureDescription.innerHTML =response.data.weather[0].description;

}

let h2 = document.querySelector("#city");
h2.innerHTML = city; 

function showPosition(position){
    let h1 = document.querySelector("h1");
    h1.innerHTML= `Your Latitude is ${position.coords.latitude} and your longitude is ${position.coords.longitude}`;
     
}

function getCurrentPosition(){
navigator.geolocation.getCurrentPosition(showPosition);
}

function showTemperature(response){
    let currentTemperature = Math.round(response.data.main.temp);
    console.log(currentTemperature);
    let title =document.querySelector("h2");
    title.innerHTML= `The Temperature is ${currentTemperature}`;

    }
    function requirePosition(position) {
        let latitude = position.coords.latitude;
        let longitude =position.coords.longitude;
        let apiKey = "ac254995f1530b05133bdf3b89d170a4";
        let apiUrl= `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
        axios.get(apiUrl).then(showTemperature);
    }

    navigator.geolocation.getCurrentPosition(requirePosition);
    




axios.get(`${apiUrl}&appid=${apiKey}`).then(showTemp);
axios.get(`${apiUrl}&appid=${apiKey}`).then(showHumidity);
axios.get(`${apiUrl}&appid=${apiKey}`).then(showTemperatureDescription);


let button= document.querySelector("button");
button.addEventListener("click", getCurrentPosition);