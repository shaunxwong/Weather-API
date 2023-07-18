const API_KEY = '73691b7f19435fb58f8ef86d7ae7c9f4';
const BASE_URL = 'https://api.openweathermap.org/data/2.5/forecast';

// Elements
const searchForm = document.getElementById('search-form');
const cityInput = document.getElementById('city-input');
const currentWeatherSection = document.getElementById('current-weather');
const forecastSection = document.getElementById('forecast');
const searchHistorySection = document.getElementById('search-history');

// Event listener for form submission
searchForm.addEventListener('submit', function (event) {
  event.preventDefault();
  const city = cityInput.value.trim();
  if (city) {
    getWeatherData(city);
    cityInput.value = '';
  }
});

// Function to fetch weather data from API
function getWeatherData(city) {
  const url = `${BASE_URL}?q=${city}&appid=${API_KEY}`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      updateCurrentWeather(data);
      updateForecast(data);
      updateSearchHistory(city);
    })
    .catch((error) => {
      console.log('Error:', error);
    });
}

// Function to update the current weather section
function updateCurrentWeather(weatherData) {
  const city = weatherData.city.name;
  const date = new Date(weatherData.list[0].dt * 1000).toLocaleDateString();
  const icon = weatherData.list[0].weather[0].icon;
  const temperature = Math.round(weatherData.list[0].main.temp - 273.15); // Convert from Kelvin to Celsius
  const humidity = weatherData.list[0].main.humidity;
  const windSpeed = weatherData.list[0].wind.speed;

  const html = `
    <h2>${city} (${date})</h2>
    <img src="https://openweathermap.org/img/w/${icon}.png" alt="Weather Icon">
    <p>Temperature: ${temperature} °C</p>
    <p>Humidity: ${humidity}%</p>
    <p>Wind Speed: ${windSpeed} m/s</p>
  `;

  currentWeatherSection.innerHTML = html;
}

// Function to update the forecast section
function updateForecast(forecastData) {
  const forecastList = forecastData.list.slice(1, 6); // Get the next 5 days' forecast

  let html = '';
  forecastList.forEach((forecast) => {
    const date = new Date(forecast.dt * 1000).toLocaleDateString();
    const icon = forecast.weather[0].icon;
    const temperature = Math.round(forecast.main.temp - 273.15); // Convert from Kelvin to Celsius
    const humidity = forecast.main.humidity;
    const windSpeed = forecast.wind.speed;

    html += `
      <div class="forecast-item">
        <h3>${date}</h3>
        <img src="https://openweathermap.org/img/w/${icon}.png" alt="Weather Icon">
        <p>Temperature: ${temperature} °C</p>
        <p>Humidity: ${humidity}%</p>
        <p>Wind Speed: ${windSpeed} m/s</p>
      </div>
    `;
  });

  forecastSection.innerHTML = html;
}

// Function to handle click on search history item
function handleSearchHistoryClick(event) {
  const city = event.target.textContent;
  getWeatherData(city);
}

// Function to update the search history section
function updateSearchHistory(city) {
  const searchHistory = JSON.parse(localStorage.getItem('searchHistory')) || [];

  if (!searchHistory.includes(city)) {
    searchHistory.push(city);
    localStorage.setItem('searchHistory', JSON.stringify(searchHistory));

    const searchHistoryItem = document.createElement('div');
    searchHistoryItem.className = 'search-history-item';
    searchHistoryItem.textContent = city;
    searchHistorySection.appendChild(searchHistoryItem);
  }
}

// Initialize the application
function init() {
  const searchHistory = JSON.parse(localStorage.getItem('searchHistory')) || [];

  searchHistory.forEach((city) => {
    const searchHistoryItem = document.createElement('div');
    searchHistoryItem.className = 'search-history-item';
    searchHistoryItem.textContent = city;
    searchHistorySection.appendChild(searchHistoryItem);
  });

  searchHistorySection.addEventListener('click', handleSearchHistoryClick);
}

// Call the init function when the page loads
window.addEventListener('load', init);
