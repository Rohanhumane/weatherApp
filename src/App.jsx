import { useEffect, useState } from "react";
import "./App.css";

const API_KEY = `64bfc7ac4d123427d75eaaecbbb13705`;

function App() {
  const [data, setData] = useState(null);

  const fetchData = async (city) => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
      );
      const result = await response.json();
      setData(result);
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  };

  useEffect(() => {
    fetchData("Pune");
  }, []);

  const convertTime = (timestamp) => {
    const date = new Date(timestamp * 1000);
    return date.toLocaleTimeString();
  };

  return (
    <div className="weather-container">
      {data && (
        <div className="weather-card">
          <h2>
            {data.name}, {data.sys.country}
          </h2>
          <h3>{Math.round(data.main.temp - 273.15)}°C</h3>

          <div className="weather-details">
            <p>
              <strong>Humidity:</strong> {data.main.humidity}%
            </p>
            <p>
              <strong>Weather:</strong> {data.weather[0].main}
            </p>
          </div>

          <div className="sun-time">
            <p>
              <strong>Sunrise:</strong> {convertTime(data.sys.sunrise)}
            </p>
            <p>
              <strong>Sunset:</strong> {convertTime(data.sys.sunset)}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
