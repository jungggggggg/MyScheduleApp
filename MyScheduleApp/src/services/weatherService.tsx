// src/services/weatherService.ts

import axios from 'axios';

const API_KEY = '393c17319088ce71d80324a42d9b9bb2';
const LAT = 37.5665;
const LON = 126.9780;
const LANG = 'eng';
const UNITS = 'metric';

const getWeather = async () => {
  const api = `https://api.openweathermap.org/data/2.5/weather?lat=${LAT}&lon=${LON}&appid=${API_KEY}&lang=${LANG}&units=${UNITS}`;

  try {
    const response = await axios.get(api);
    return response.data;
  } catch (error) {
    console.error('Error fetching weather data:', error);
    throw error;
  }
};

export default getWeather;