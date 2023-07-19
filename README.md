# 06 Server-Side APIs: Weather Dashboard

This weather dashboard runs in the browser and features dynamically updated HTML and CSS. It utilizes third-party APIs to retrieve weather data for cities. The main API used is the [5 Day Weather Forecast](https://openweathermap.org/forecast5) API from OpenWeatherMap.

To retrieve weather data for cities, I made requests to the API using the following base URL: `https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}`. In order to make requests, I've obtained an API key by registering on the OpenWeatherMap website. There was a waiting period of up to 2 hours for the API key to become active.

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

## Built With

- HTML
- CSS
- JavaScript
- jQuery
- Day.js

## Submission Details

As part of my submission, I have completed the following:

1. **Deployed Application:** The Weather API can be accessed at: https://shaunxwong.github.io/Weather-API/

2. **GitHub Repository:** The codebase for the Weather API is available in the following GitHub repository: https://github.com/shaunxwong/Weather-API.git

Thank you for reviewing my submission. I look forward to your feedback and suggestions. 

Best regards,

Shaun Wong


