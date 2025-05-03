import axios from 'axios';

const API_KEY = '2b7d90ef060b44c2b72184328252704'; 
const BASE_URL = 'http://api.weatherapi.com/v1/current.json';

export const fetchWeather = async (city) => {
  const response = await axios.get(`${BASE_URL}?key=${API_KEY}&q=${city}&lang=uk`);
  return response.data;
};
