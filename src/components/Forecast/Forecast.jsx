const Forecast = ({ state, isMetric }) => {
  return (
    <div className="forecast">
      <div>
        <h3 className="forecast-day">{state.firstDayDate}</h3>
        <p className="forecast-temperature">
          {isMetric
            ? `${state.firstDayTemperatureCelsius}\u00B0C`
            : `${state.firstDayTemperatureFahrenheit}\u00B0F`}
        </p>
        <img
          className="condition-icon"
          src={state.firstDayConditionIcon}
          alt={state.firstDayConditionText}
        />
        <p className="forecast-condition-text">{state.firstDayConditionText}</p>
      </div>

      <div>
        <h3 className="forecast-day">{state.secondDayDate}</h3>
        <p className="forecast-temperature">
          {isMetric
            ? `${state.secondDayTemperatureCelsius}\u00B0C`
            : `${state.secondDayTemperatureFahrenheit}\u00B0F`}
        </p>
        <img
          className="condition-icon"
          src={state.secondDayConditionIcon}
          alt={state.secondDayConditionText}
        />
        <p className="forecast-condition-text">
          {state.secondDayConditionText}
        </p>
      </div>

      <div>
        <h3 className="forecast-day">{state.thirdDayDate}</h3>
        <p className="forecast-temperature">
          {isMetric
            ? `${state.thirdDayTemperatureCelsius}\u00B0C`
            : `${state.thirdDayTemperatureFahrenheit}\u00B0F`}
        </p>
        <img
          className="condition-icon"
          src={state.thirdDayConditionIcon}
          alt={state.thirdDayConditionText}
        />
        <p className="forecast-condition-text">{state.thirdDayConditionText}</p>
      </div>
    </div>
  );
};

export default Forecast;
