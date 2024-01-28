import axios from "axios";
import { useEffect, useState } from "react";

const useForecast = () => {
  const [term, setTerm] = useState("");
  const [options, setOptions] = useState([]);
  const [city, setCity] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [isFarenheit, setIsFarenheit] = useState(false);

  const handleUnitChange = () => {
    setIsFarenheit(!isFarenheit);
  };

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
    } catch (error) {
      console.log({ error });
    }
  };

  const onSubmit = () => {
    if (!city) return;
    getForecast(city);
  };

  const myCity = {
    country: "India",
    id: 1110805,
    lat: 13.08,
    lon: 80.28,
    name: "Chennai",
    region: "Tamil Nadu",
    url: "chennai-tamil-nadu-india",
  };

  const handleLocationClick = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        let lat = position.coords.latitude;
        let lon = position.coords.longitude;
        getForecast({ lat, lon });
      });
    }
  };

  useEffect(() => {
    getForecast(myCity);
  }, []);

  useEffect(() => {
    if (city) {
      setTerm(city.name);
      setOptions([]);
    }
  }, [city]);

  return {
    term,
    setTerm,
    options,
    city,
    forecast,
    isFarenheit,
    handleLocationClick,
    handleUnitChange,
    onInputChange,
    onOptionSelect,
    onSubmit,
  };
};

export default useForecast;
