import { useEffect, useState } from "react";

const API_KEY = `64bfc7ac4d123427d75eaaecbbb13705`;

function useWeather(city) {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(null);
  const [result, setResult] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setIsError(null);

      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
        );

        if (!response.ok) {
          setIsError("City Not Found. Enter a valid city.");
          setResult(null);
        } else {
          const data = await response.json();
          setResult(data);
        }
      } catch (error) {
        setIsError(error.message);
        setResult(null);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [city]);

  return { isLoading, isError, result };
}

export default useWeather;
