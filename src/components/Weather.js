import React from 'react';

const Weather = ({ weatherData }) => {
  return (
    <div className="weather-info">
      {weatherData.error ? (
        <p>Error {weatherData.error}</p>
      ) : weatherData.isLoading ? (
        <p>Loading...</p>
      ) : (
        Object.values(weatherData)[0] && (
          <ul>
            <li>
              <span>Country: </span>
              {weatherData.country}
            </li>
            <li>
              <span>City: </span>
              {weatherData.city}
            </li>
            <li>
              <span>Temperature: </span>
              {(weatherData.temperature - 273.15).toFixed(2)} &deg; C
            </li>
            <li>
              <span>Weather: </span>
              {weatherData.weather}
            </li>
            <li>
              <span>Description: </span>
              {weatherData.description}
            </li>
            <li>
              <span>Humidity: </span>
              {weatherData.humidity}
            </li>
          </ul>
        )
      )}
    </div>
  );
};

export default Weather;
