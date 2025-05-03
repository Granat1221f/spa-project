import { useState, useEffect } from 'react';
import { fetchWeather } from '../api/weatherApi';

function MyCity() {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    fetchWeather('Kyiv') // або своє місто
      .then(data => setWeather(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="page">
      <h1>Моє місто — Київ</h1>
      <p>Київ — столиця України, відома своєю історією та культурою.</p>

      {weather && (
        <div>
          <h2>Поточна погода:</h2>
          <p>Температура: {weather.current.temp_c}°C</p>
          <p>Опис: {weather.current.condition.text}</p>
          <p>Координати: {weather.location.lat}, {weather.location.lon}</p>
          <p>Місто: {weather.location.name}, {weather.location.country}</p>
        </div>
      )}
    </div>
  );
}

export default MyCity;
