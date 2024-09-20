const WeatherDetails = (props) => {
  return (
    <section>
      <h1>Weather Details</h1>
      <p>Location: {props.weather.location}</p>
      <p>Temperature: {props.weather.temperature} Farfenheit</p>
      <p>Condition: {props.weather.condition}</p>
    </section>
  );
};

export default WeatherDetails;
