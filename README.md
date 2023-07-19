# 06 Server-Side APIs: Weather Dashboard

This is a weather dashboard that runs in the browser and features dynamically updated HTML and CSS. It utilizes third-party APIs to retrieve weather data for cities. The main API used is the [5 Day Weather Forecast](https://openweathermap.org/forecast5) API from OpenWeatherMap.

To retrieve weather data for cities, you will need to make requests to the API using the following base URL: `https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}`. In order to make requests, you'll need to obtain an API key by registering on the OpenWeatherMap website. Please note that there may be a waiting period of up to 2 hours for your API key to become active.

Please take note of the hint provided: since the 5 Day Weather Forecast API requires coordinates instead of just a city name, you'll need to find a way to retrieve the geographical coordinates of a city using the OpenWeatherMap APIs.

This application utilizes `localStorage` to store any persistent data. If you need more information on how to work with the OpenWeather API or how to use API keys, refer to the [Full-Stack Blog on how to use API keys](https://coding-boot-camp.github.io/full-stack/apis/how-to-use-api-keys).

## User Story

```
AS A traveler
I WANT to see the weather outlook for multiple cities
SO THAT I can plan a trip accordingly
```

## Acceptance Criteria

```
GIVEN a weather dashboard with form inputs
WHEN I search for a city
THEN I am presented with current and future conditions for that city, and that city is added to the search history
WHEN I view current weather conditions for that city
THEN I am presented with the city name, the date, an icon representation of weather conditions, the temperature, the humidity, and the wind speed
WHEN I view future weather conditions for that city
THEN I am presented with a 5-day forecast that displays the date, an icon representation of weather conditions, the temperature, the wind speed, and the humidity
WHEN I click on a city in the search history
THEN I am again presented with current and future conditions for that city
```

## Mock-Up

The following image shows the web application's appearance and functionality:

![The weather app includes a search option, a list of cities, and a five-day forecast and current weather conditions for Atlanta.](./Assets/06-server-side-apis-homework-demo.png)
