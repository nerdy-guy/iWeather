const initialState = {
  // query: "auto:ip",
  temperatureCelsius: "",
  temperatureFahrenheit: "",
  city: "",
  country: "",
  isMetric: true,
  conditionText: "",
  conditionIcon: "",
  humidity: "",
  windKPH: "",
  windMPH: "",
  feelsLikeCelsius: "",
  feelsLikeFahrenheit: "",
  forecastDay: "",
  firstDayTemperatureCelsius: "",
  secondDayTemperatureCelsius: "",
  thirdDayTemperatureCelsius: "",
  firstDayTemperatureFahrenheit: "",
  secondDayTemperatureFahrenheit: "",
  thirdDayTemperatureFahrenheit: "",
  firstDayDate: "",
  secondDayDate: "",
  thirdDayDate: "",
  firstDayConditionIcon: "",
  secondDayConditionIcon: "",
  thirdDayConditionIcon: "",
  firstDayConditionText: "",
  secondDayConditionText: "",
  thirdDayConditionText: "",
  // uvIndex: "",
  // uvStyle: "",
  // uvTitle: "",
  // airQuality: "",
  // airQualityStyle: "",
  // airQualityTitle: "",
};

const weatherReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_WEATHER_DATA":
      return {
        ...state,
        // query: action.payload.query,
        temperatureCelsius: action.payload.temperatureCelsius,
        temperatureFahrenheit: action.payload.temperatureFahrenheit,
        country: action.payload.country,
        city: action.payload.city,
        isMetric: action.payload.isMetric,
        conditionText: action.payload.conditionText,
        conditionIcon: action.payload.conditionIcon,
        humidity: action.payload.humidity,
        windKPH: action.payload.windKPH,
        windMPH: action.payload.windMPH,
        feelsLikeCelsius: action.payload.feelsLikeCelsius,
        feelsLikeFahrenheit: action.payload.feelsLikeFahrenheit,
        forecastDay: action.payload.forecastDay,
        firstDayTemperatureCelsius: action.payload.firstDayTemperatureCelsius,
        secondDayTemperatureCelsius: action.payload.secondDayTemperatureCelsius,
        thirdDayTemperatureCelsius: action.payload.thirdDayTemperatureCelsius,
        firstDayTemperatureFahrenheit:
          action.payload.firstDayTemperatureFahrenheit,
        secondDayTemperatureFahrenheit:
          action.payload.secondDayTemperatureFahrenheit,
        thirdDayTemperatureFahrenheit:
          action.payload.thirdDayTemperatureFahrenheit,
        firstDayDate: action.payload.firstDayDate,
        secondDayDate: action.payload.secondDayDate,
        thirdDayDate: action.payload.thirdDayDate,
        firstDayConditionIcon: action.payload.firstDayConditionIcon,
        secondDayConditionIcon: action.payload.secondDayConditionIcon,
        thirdDayConditionIcon: action.payload.thirdDayConditionIcon,
        // uvIndex: action.payload.uvIndex,
        // uvStyle: action.payload.uvStyle,
        // uvTitle: action.payload.uvTitle,
        // airQuality: action.payload.airQuality,
        // airQualityStyle: action.payload.airQualityStyle,
        // airQualityTitle: action.payload.airQualityTitle,
      };
    default:
      return state;
  }
};

export { initialState, weatherReducer };
