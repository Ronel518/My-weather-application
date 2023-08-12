function formatDate(timestamp) {
  return "Friday 05:00";
}

function displayTemperature(response) {
  let temperatureElement = document.querySelector("#temp-now");
  let cityElement = document.querySelector("#city");
  let descriptionElement = document.querySelector("#description");
  let humidityElement = document.querySelector("#humidity");
  let windElement = document.querySelector("#wind");
  let dateElement = document.querySelector("#date");
  temperatureElement.innerHTML = Math.round(response.data.main.temp);
  cityElement.innerHTML = response.data.name;
  descriptionElement.innerHTML = response.data.weather[0].description;
  humidityElement.innerHTML = response.data.main.humidity;
  windElement.innerHTML = Math.round(response.data.wind.speed * 3.6);
  dateElement.innerHTML = formatDate(response.data.dt * 1000);
  let apiKey = "16b1422c7eb5d2d6078979b86c418400";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=New York&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayTemperature);
}

let apiKey = "16b1422c7eb5d2d6078979b86c418400";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=New York&appid=${apiKey}&units=metric`;
axios.get(apiUrl).then(displayTemperature);
