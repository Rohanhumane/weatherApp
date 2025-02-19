import { useState, Suspense, useRef } from "react";
// import WeatherComponent from "./components/WeatherComponent";

import "./App.css";
import useWeather from "./customHook/useWeather";

const App = () => {
  const [city, setCity] = useState("Pune");
  const weatherRef = useRef();

  const { isError, result } = useWeather(city); // Use the hook directly

  const handleSearch = () => {
    setCity((prev) => {
      if (weatherRef.current.value !== "") {
        return weatherRef.current.value;
      }
      return prev;
    });
  };

  const convertTime = (timestamp, timezoneOffset) => {
    const date = new Date((timestamp + timezoneOffset) * 1000);
    return date.toUTCString().split(" ")[4];
  };

  return (
    <div className="weather-container">
      <h1 className="title">Weather WebApp</h1>
      <div className="search">
        <input
          name="weather"
          placeholder="Search City"
          id="weather"
          ref={weatherRef}
        />
        <button onClick={handleSearch}>Submit</button>
      </div>

      <Suspense fallback={<p>Loading Weather...</p>}>
        {result && !isError && (
          <div className="weather-card">
            <h2>
              {result.name}, {result.sys.country}
            </h2>
            <h3>{Math.round(result.main.temp - 273.15)}°C</h3>

            <div className="weather-details">
              <p>
                <strong>Humidity:</strong> {result.main.humidity}%
              </p>
              <p>
                <strong>Weather:</strong> {result.weather[0].main}
              </p>
            </div>

            <div className="sun-time">
              <p>
                <strong>Sunrise: </strong>
                {convertTime(result.sys.sunrise, result.timezone)}
              </p>
              <p>
                <strong>Sunset: </strong>
                {convertTime(result.sys.sunset, result.timezone)}
              </p>
            </div>
          </div>
        )}
        {isError && <p>{isError}</p>}
      </Suspense>
    </div>
  );
};

export default App;
