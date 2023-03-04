import { useEffect, useReducer, useState } from "react";
import "./App.css";
import Converter from "./components/Converter/Converter";
import Forecast from "./components/Forecast/Forecast";
import SearchForm from "./components/SearchForm/SearchForm";
import Weather from "./components/Weather/Weather";
import logo from "./assets/logo.svg";
import { initialState, weatherReducer } from "./reducers/weatherReducer";

const BASE_URL = "https://api.weatherapi.com/v1/forecast.json?";

function App() {
  const [state, dispatch] = useReducer(weatherReducer, initialState);

  const [query, setQuery] = useState("auto:ip");
  const [isMetric, setMetric] = useState(true);
  const [uvIndex, setUvIndex] = useState("");
  const [uvStyle, setUvStyle] = useState("");
  const [uvTitle, setUvTitle] = useState("");
  const [airQuality, setAirQuality] = useState("");
  const [airQualityStyle, setAirQualityStyle] = useState("");
  const [airQualityTitle, setAirQualityTitle] = useState("");

  const getWeather = async () => {
    try {
      const result = await fetch(
        `${BASE_URL}key=${import.meta.env.VITE_API_KEY}&q=${
          query || "auto:ip"
        }&days=3&aqi=yes`
      );

      const data = await result.json();

      const {
        location,
        current,
        forecast: { forecastday },
      } = data;

      dispatch({
        type: "SET_WEATHER_DATA",
        payload: {
          city: location.name,
          country: location.country,
          temperatureCelsius: Math.round(current.temp_c),
          temperatureFahrenheit: Math.round(current.temp_f),
          conditionIcon: current.condition.icon,
          conditionText: current.condition.text,
          feelsLikeCelsius: Math.round(current.feelslike_c),
          feelsLikeFahrenheit: Math.round(current.feelslike_f),
          humidity: current.humidity,
          windKPH: Math.round(current.wind_kph),
          windMPH: Math.round(current.wind_mph),
          forecastDay: forecastday,
          firstDayTemperatureCelsius: Math.round(forecastday[0].day.avgtemp_c),
          secondDayTemperatureCelsius: Math.round(forecastday[1].day.avgtemp_c),
          thirdDayTemperatureCelsius: Math.round(forecastday[2].day.avgtemp_c),
          firstDayTemperatureFahrenheit: Math.round(
            forecastday[0].day.avgtemp_f
          ),
          secondDayTemperatureFahrenheit: Math.round(
            forecastday[1].day.avgtemp_f
          ),
          thirdDayTemperatureFahrenheit: Math.round(
            forecastday[2].day.avgtemp_f
          ),
          firstDayConditionIcon: forecastday[0].day.condition.icon,
          secondDayConditionIcon: forecastday[1].day.condition.icon,
          thirdDayConditionIcon: forecastday[2].day.condition.icon,
          firstDayConditionText: forecastday[0].day.condition.text,
          secondDayConditionText: forecastday[1].day.condition.text,
          thirdDayConditionText: forecastday[2].day.condition.text,
          firstDayDate: new Date(forecastday[0].date).toLocaleString("en-us", {
            weekday: "long",
          }),
          secondDayDate: new Date(forecastday[1].date).toLocaleString("en-us", {
            weekday: "long",
          }),
          thirdDayDate: new Date(forecastday[2].date).toLocaleString("en-us", {
            weekday: "long",
          }),
        },
      });

      const uvIndex = data.current.uv;

      if (uvIndex <= 2) {
        setUvIndex("Low");
        setUvStyle("low-uv");
        setUvTitle(
          "You can safely enjoy being outside. Wear sunglasses on bright days. If you burn easily, cover up and use sunscreen SPF 30+. In winter, reflection off snow can nearly double UV strength."
        );
      } else if (uvIndex > 2 && uvIndex <= 5) {
        setUvIndex("Moderate");
        setUvStyle("moderate-uv");
        setUvTitle(
          "Take precautions if you will be outside, such as wearing a hat and sunglasses and using sunscreen SPF 30+. Reduce your exposure to the sun's most intense UV radiation by seeking shade during midday hours."
        );
      } else if (uvIndex > 5 && uvIndex <= 7) {
        setUvIndex("High");
        setUvStyle("high-uv");
        setUvTitle(
          "Protection against sun damage is needed. Wear a wide-brimmed hat and sunglasses, use sunscreen SPF 30+ and wear a long-sleeved shirt and pants when practical. Reduce your exposure to the sun's most intense UV radiation by seeking shade during midday hours."
        );
      } else if (uvIndex > 7 && uvIndex <= 10) {
        setUvIndex("Very High");
        setUvStyle("very-high-uv");
        setUvTitle(
          "Protection against sun damage is needed. If you need to be outside during midday hours between 10 a.m. and 4 p.m., take steps to reduce sun exposure. A shirt, hat and sunscreen are a must, and be sure you seek shade. Beachgoers should know that white sand and other bright surfaces reflect UV and can double UV exposure."
        );
      } else {
        setUvIndex("Extreme");
        setUvStyle("extreme-uv");
        setUvTitle(
          "Protection against sun damage is needed. If you need to be outside during midday hours between 10 a.m. and 4 p.m., take steps to reduce sun exposure. A shirt, hat and sunscreen are a must, and be sure you seek shade. Beachgoers should know that white sand and other bright surfaces reflect UV and can double UV exposure."
        );
      }

      const airQuality = data.current.air_quality["us-epa-index"];

      switch (airQuality) {
        case 1:
          setAirQuality("Good");
          setAirQualityStyle("good-air-quality");
          setAirQualityTitle(
            "Air quality is satisfactory, and air pollution poses little or no risk."
          );
          break;
        case 2:
          setAirQuality("Moderate");
          setAirQualityStyle("moderate-air-quality");
          setAirQualityTitle(
            "Air quality is acceptable. However, there may be a risk for some people, particularly those who are unusually sensitive to air pollution."
          );
          break;
        case 3:
          setAirQuality("Unhealthy for sensitive groups");
          setAirQualityStyle("unhealthy-sensitive-air-quality");
          setAirQualityTitle(
            "Members of sensitive groups may experience health effects. The general public is less likely to be affected."
          );
          break;
        case 4:
          setAirQuality("Unhealthy");
          setAirQualityStyle("unhealthy-air-quality");
          setAirQualityTitle(
            "Some members of the general public may experience health effects; members of sensitive groups may experience more serious health effects."
          );
          break;
        case 5:
          setAirQuality("Very Unhealthy");
          setAirQualityStyle("very-unhealthy-air-quality");
          setAirQualityTitle(
            "Health alert: The risk of health effects is increased for everyone."
          );
          break;
        case 6:
          setAirQuality("Hazardous");
          setAirQualityStyle("very-unhealthy-air-quality");
          setAirQualityTitle(
            "Health warning of emergency conditions: everyone is more likely to be affected."
          );
          break;
        default:
          setAirQuality("Unknown");
      }
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    getWeather();
  }, []);

  const handleQuery = (e) => {
    e.preventDefault();
    getWeather();
  };

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  return (
    <div className="container">
      <div className="header">
        <img src={logo} alt="iWeather logo" className="logo" />
        <h1>iWeather</h1>
      </div>

      <SearchForm handleQuery={handleQuery} handleChange={handleChange} />

      <Converter setMetric={setMetric} />

      <Weather
        state={state}
        isMetric={isMetric}
        uvIndex={uvIndex}
        uvTitle={uvTitle}
        uvStyle={uvStyle}
        airQuality={airQuality}
        airQualityStyle={airQualityStyle}
        airQualityTitle={airQualityTitle}
      />

      <Forecast state={state} isMetric={isMetric} />
    </div>
  );
}

export default App;
