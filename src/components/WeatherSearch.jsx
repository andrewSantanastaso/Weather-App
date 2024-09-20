import { useState } from "react";

const WeatherSearch = (props) => {
  const [city, setCity] = useState("");

  const handleSubmit = (event) => {
    // Stop the Default
    event.preventDefault();

    //Run the fetch function
    props.fetchData(city);
    //Reset the city
    setCity("");
  };
  return (
    <section>
      <h1>Search</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="city">Enter a city:</label>
        <input
          type="text"
          id="city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
    </section>
  );
};

export default WeatherSearch;
