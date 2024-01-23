import axios from "axios";
import { useEffect, useState } from "react";

const useForecast = () => {
  const [term, setTerm] = useState("");
  const [options, setOptions] = useState([]);
  const [city, setCity] = useState(null);
  const [forecast, setForecast] = useState(null);

  const getSearchOptions = async (searchTerm) => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_WEATHER_API_BASE_URL}/search.json`,
        {
          params: {
            q: searchTerm,
          },
          headers: {
            "X-RapidAPI-Key": import.meta.env.VITE_WEATHER_API_KEY,
            "X-RapidAPI-Host": import.meta.env.VITE_WEATHER_API_HOST,
          },
        }
      );
      setOptions(response.data);
    } catch (error) {
      console.log({ error });
    }
  };

  const onInputChange = (e) => {
    const value = e.target.value.trim();
    setTerm(value);

    if (value === "") return;

    getSearchOptions(value);
  };

  const onOptionSelect = (option) => {
    setCity(option);
  };

  const getForecast = async (city) => {
    try {
      const latlonValue = `${city.lat},${city.lon}`;
      console.log(latlonValue);
      const response = await axios.get(
        `${import.meta.env.VITE_WEATHER_API_BASE_URL}/forecast.json`,
        {
          params: {
            q: latlonValue,
            days: "3",
          },
          headers: {
            "X-RapidAPI-Key": import.meta.env.VITE_WEATHER_API_KEY,
            "X-RapidAPI-Host": import.meta.env.VITE_WEATHER_API_HOST,
          },
        }
      );
      setForecast(response.data);
      // console.log("tried to get weather");
    } catch (error) {
      console.log({ error });
    }
  };

  const onSubmit = () => {
    // console.log("clicked");
    if (!city) return;
    getForecast(city);
  };

  useEffect(() => {
    if (city) {
      setTerm(city.name);
      setOptions([]);
    }
  }, [city]);

  return {
    term,
    options,
    city,
    forecast,
    onInputChange,
    onOptionSelect,
    onSubmit,
  };
};

export default useForecast;
