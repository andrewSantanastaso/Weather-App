import * as weatherService from "./services/weatherService";
import WeatherSearch from "./components/WeatherSearch";
import WeatherDetails from "./components/WeatherDetails";
import { useState } from "react";

const App = () => {
  const [weather, setWeather] = useState({});
  const fetchData = async (city) => {
    const data = await weatherService.show(city);
    const newWeatherState = {
      location: data.location.name,
      temperature: data.current.temp_f,
      condition: data.current.condition.text,
    };
    setWeather(newWeatherState);
  };

  return (
    <main>
      <h1>Weather APi</h1>
      <WeatherSearch fetchData={fetchData} />
      <WeatherDetails weather={weather} />
    </main>
  );
};

export default App;
