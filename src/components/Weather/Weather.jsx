const Weather = ({
  state,
  isMetric,
  uvTitle,
  uvStyle,
  uvIndex,
  airQuality,
  airQualityStyle,
  airQualityTitle,
}) => {
  return (
    <div className="wrapper">
      <div>
        <p className="location">
          {state.city}, {state.country}
        </p>

        <p className="temperature">
          {isMetric
            ? `${state.temperatureCelsius}\u00B0C`
            : `${state.temperatureFahrenheit}\u00B0F`}
        </p>
        <img
          src={state.conditionIcon}
          alt={state.conditionText}
          className="condition-icon"
        />
        <p className="condition-text">{state.conditionText}</p>
      </div>

      <div className="details">
        <p className="detail">
          Feels Like:{" "}
          {isMetric
            ? `${state.feelsLikeCelsius}\u00B0C`
            : `${state.feelsLikeFahrenheit}\u00B0F`}
        </p>
        <p className="detail">Humidity: {state.humidity}%</p>
        <p className="detail">
          Wind: {isMetric ? `${state.windKPH} km/h` : `${state.windMPH} mph`}
        </p>
        <p className="detail" title={uvTitle}>
          UV: <span className={uvStyle}>{uvIndex}</span>
        </p>
        <p className="detail" title={airQualityTitle}>
          Air Quality: <span className={airQualityStyle}>{airQuality}</span>
        </p>
      </div>
    </div>
  );
};

export default Weather;
