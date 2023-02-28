import { useEffect, useState } from "react";
import "./App.css";
import logo from "./assets/logo.svg";

const BASE_URL = "https://weatherapi-com.p.rapidapi.com/forecast.json?q=";

function App() {
  const [query, setQuery] = useState("auto:ip");
  const [temperatureCelsius, setTemperatureCelsius] = useState("");
  const [temperatureFahrenheit, setTemperatureFahrenheit] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [isMetric, setMetric] = useState(true);
  const [conditionText, setConditionText] = useState("");
  const [conditionIcon, setConditionIcon] = useState("");
  const [humidity, setHumidity] = useState("");
  const [windKPH, setWindKPH] = useState("");
  const [windMPH, setWindMPH] = useState("");
  const [feelsLikeCelsius, setFeelsLikeCelsius] = useState("");
  const [feelsLikeFahrenheit, setFeelsLikeFahrenheit] = useState("");
  const [firestDayTemperatureCelsius, setFirestDayTemperatureCelsius] =
    useState("");
  const [secondDayTemperatureCelsius, setSecondDayTemperatureCelsius] =
    useState("");
  const [thirdDayTemperatureCelsius, setThirdDayTemperatureCelsius] =
    useState("");
  const [firestDayTemperatureFahrenheit, setFirestDayTemperatureFahrenheit] =
    useState("");
  const [secondDayTemperatureFahrenheit, setSecondDayTemperatureFahrenheit] =
    useState("");
  const [thirdDayTemperatureFahrenheit, setThirdDayTemperatureFahrenheit] =
    useState("");
  const [firstDayDate, setFirstDayDate] = useState("");
  const [secondDayDate, setSecondDayDate] = useState("");
  const [thirdDayDate, setThirdDayDate] = useState("");
  const [firstDayConditionIcon, setFirstDayConditionIcon] = useState("");
  const [secondDayConditionIcon, setSecondDayConditionIcon] = useState("");
  const [thirdDayConditionIcon, setThirdDayConditionIcon] = useState("");
  const [firstDayConditionText, setFirstDayConditionText] = useState("");
  const [secondDayConditionText, setSecondDayConditionText] = useState("");
  const [thirdDayConditionText, setThirdDayConditionText] = useState("");
  const [uvIndex, setUvIndex] = useState("");
  const [uvStyle, setUvStyle] = useState("");
  const [airQuality, setAirQuality] = useState("");
  const [airQualityStyle, setAirQualityStyle] = useState("");
  const [uvTitle, setUvTitle] = useState("");
  const [airQualityTitle, setAirQualityTitle] = useState("");

  useEffect(() => {
    const getFirst = async () => {
      const result = await fetch(`${BASE_URL}${query}&days=3&aqi=yes`, {
        headers: {
          "X-RapidAPI-Key": import.meta.env.VITE_API_KEY,
          "X-RapidAPI-Host": import.meta.env.VITE_API_HOST,
        },
      });

      const data = await result.json();

      const temperatureCelsius = data.current.temp_c;
      const city = data.location.name;
      const country = data.location.country;
      const temperatureFahrenheit = data.current.temp_f;
      const conditionIcon = data.current.condition.icon;
      const conditionText = data.current.condition.text;
      const humidity = data.current.humidity;
      const windKPH = data.current.wind_kph;
      const windMPH = data.current.wind_mph;
      const feelsLikeCelsius = data.current.feelslike_c;
      const feelsLikeFahrenheit = data.current.feelslike_f;
      const uvIndex = data.current.uv;
      const airQuality = data.current.air_quality["us-epa-index"];

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

      setCountry(country);
      setTemperatureFahrenheit(Math.round(temperatureFahrenheit));
      setTemperatureCelsius(Math.round(temperatureCelsius));
      setCity(city);
      setConditionIcon(conditionIcon);
      setConditionText(conditionText);
      setHumidity(humidity);
      setWindKPH(Math.round(windKPH));
      setWindMPH(Math.round(windMPH));
      setFeelsLikeCelsius(Math.round(feelsLikeCelsius));
      setFeelsLikeFahrenheit(Math.round(feelsLikeFahrenheit));

      const forecastDay = data.forecast.forecastday;
      const firestDayTemperatureCelsius = forecastDay[0].day.avgtemp_c;
      const secondDayTemperatureCelsius = forecastDay[1].day.avgtemp_c;
      const thirdDayTemperatureCelsius = forecastDay[2].day.avgtemp_c;
      const firestDayTemperatureFahrenheit = forecastDay[0].day.avgtemp_f;
      const secondDayTemperatureFahrenheit = forecastDay[1].day.avgtemp_f;
      const thirdDayTemperatureFahrenheit = forecastDay[2].day.avgtemp_f;
      const firstDayConditionIcon = forecastDay[0].day.condition.icon;
      const secondDayConditionIcon = forecastDay[1].day.condition.icon;
      const thirdDayConditionIcon = forecastDay[2].day.condition.icon;
      const firstDayConditionText = forecastDay[0].day.condition.text;
      const secondDayConditionText = forecastDay[1].day.condition.text;
      const thirdDayConditionText = forecastDay[2].day.condition.text;

      setFirestDayTemperatureCelsius(Math.round(firestDayTemperatureCelsius));
      setSecondDayTemperatureCelsius(Math.round(secondDayTemperatureCelsius));
      setThirdDayTemperatureCelsius(Math.round(thirdDayTemperatureCelsius));
      setFirestDayTemperatureFahrenheit(
        Math.round(firestDayTemperatureFahrenheit)
      );
      setSecondDayTemperatureFahrenheit(
        Math.round(secondDayTemperatureFahrenheit)
      );
      setThirdDayTemperatureFahrenheit(
        Math.round(thirdDayTemperatureFahrenheit)
      );

      const firstDayDate = new Date(forecastDay[0].date).toLocaleString(
        "en-us",
        {
          weekday: "long",
        }
      );
      const secondDayDate = new Date(forecastDay[1].date).toLocaleString(
        "en-us",
        {
          weekday: "long",
        }
      );
      const thirdDayDate = new Date(forecastDay[2].date).toLocaleString(
        "en-us",
        {
          weekday: "long",
        }
      );

      setFirstDayDate(firstDayDate);
      setSecondDayDate(secondDayDate);
      setThirdDayDate(thirdDayDate);
      setFirstDayConditionIcon(firstDayConditionIcon);
      setSecondDayConditionIcon(secondDayConditionIcon);
      setThirdDayConditionIcon(thirdDayConditionIcon);
      setFirstDayConditionText(firstDayConditionText);
      setSecondDayConditionText(secondDayConditionText);
      setThirdDayConditionText(thirdDayConditionText);
    };

    getFirst();
  }, []);

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const getWeather = async (e) => {
    e.preventDefault();

    try {
      const result = await fetch(
        `${BASE_URL}${query || "auto:ip"}&days=3&aqi=yes`,
        {
          headers: {
            "X-RapidAPI-Key": import.meta.env.VITE_API_KEY,
            "X-RapidAPI-Host": import.meta.env.VITE_API_HOST,
          },
        }
      );

      const data = await result.json();

      const temperatureCelsius = data.current.temp_c;
      const city = data.location.name;
      const country = data.location.country;
      const temperatureFahrenheit = data.current.temp_f;
      const conditionIcon = data.current.condition.icon;
      const conditionText = data.current.condition.text;
      const humidity = data.current.humidity;
      const windKPH = data.current.wind_kph;
      const windMPH = data.current.wind_mph;
      const feelsLikeCelsius = data.current.feelslike_c;
      const feelsLikeFahrenheit = data.current.feelslike_f;
      const uvIndex = data.current.uv;
      const airQuality = data.current.air_quality["us-epa-index"];

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

      setTemperatureFahrenheit(Math.round(temperatureFahrenheit));
      setTemperatureCelsius(Math.round(temperatureCelsius));
      setCity(city);
      setCountry(country);
      setConditionIcon(conditionIcon);
      setConditionText(conditionText);
      setHumidity(humidity);
      setWindKPH(Math.round(windKPH));
      setWindMPH(Math.round(windMPH));
      setFeelsLikeCelsius(Math.round(feelsLikeCelsius));
      setFeelsLikeFahrenheit(Math.round(feelsLikeFahrenheit));

      const forecastDay = data.forecast.forecastday;
      const firestDayTemperatureCelsius = forecastDay[0].day.avgtemp_c;
      const secondDayTemperatureCelsius = forecastDay[1].day.avgtemp_c;
      const thirdDayTemperatureCelsius = forecastDay[2].day.avgtemp_c;
      const firestDayTemperatureFahrenheit = forecastDay[0].day.avgtemp_f;
      const secondDayTemperatureFahrenheit = forecastDay[1].day.avgtemp_f;
      const thirdDayTemperatureFahrenheit = forecastDay[2].day.avgtemp_f;
      const firstDayConditionIcon = forecastDay[0].day.condition.icon;
      const secondDayConditionIcon = forecastDay[1].day.condition.icon;
      const thirdDayConditionIcon = forecastDay[2].day.condition.icon;
      const firstDayConditionText = forecastDay[0].day.condition.text;
      const secondDayConditionText = forecastDay[1].day.condition.text;
      const thirdDayConditionText = forecastDay[2].day.condition.text;

      setFirestDayTemperatureCelsius(Math.round(firestDayTemperatureCelsius));
      setSecondDayTemperatureCelsius(Math.round(secondDayTemperatureCelsius));
      setThirdDayTemperatureCelsius(Math.round(thirdDayTemperatureCelsius));
      setFirestDayTemperatureFahrenheit(
        Math.round(firestDayTemperatureFahrenheit)
      );
      setSecondDayTemperatureFahrenheit(
        Math.round(secondDayTemperatureFahrenheit)
      );
      setThirdDayTemperatureFahrenheit(
        Math.round(thirdDayTemperatureFahrenheit)
      );

      const firstDayDate = new Date(forecastDay[0].date).toLocaleString(
        "en-us",
        {
          weekday: "long",
        }
      );
      const secondDayDate = new Date(forecastDay[1].date).toLocaleString(
        "en-us",
        {
          weekday: "long",
        }
      );
      const thirdDayDate = new Date(forecastDay[2].date).toLocaleString(
        "en-us",
        {
          weekday: "long",
        }
      );

      setFirstDayDate(firstDayDate);
      setSecondDayDate(secondDayDate);
      setThirdDayDate(thirdDayDate);
      setFirstDayConditionIcon(firstDayConditionIcon);
      setSecondDayConditionIcon(secondDayConditionIcon);
      setThirdDayConditionIcon(thirdDayConditionIcon);
      setFirstDayConditionText(firstDayConditionText);
      setSecondDayConditionText(secondDayConditionText);
      setThirdDayConditionText(thirdDayConditionText);
    } catch (e) {
      console.error(e);
    }
  };

  const convertToMetric = () => {
    setMetric(true);
  };

  const convertToimperial = () => {
    setMetric(false);
  };

  return (
    <div className="container">
      <div className="header">
        <img src={logo} alt="iWeather logo" className="logo" />
        <h1>iWeather</h1>
      </div>

      <form className="form" onSubmit={getWeather}>
        <input
          className="input"
          type="text"
          onChange={handleChange}
          placeholder="city or zip code"
        />
        <button className="icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
        </button>
      </form>

      <div className="converter">
        <button className="converter-button" onClick={convertToMetric}>
          &deg;C
        </button>
        <span>|</span>
        <button className="converter-button" onClick={convertToimperial}>
          &deg;F
        </button>
      </div>

      <div className="wrapper">
        <div>
          <p className="location">
            {city}, {country}
          </p>

          <p className="temperature">
            {isMetric
              ? `${temperatureCelsius}\u00B0C`
              : `${temperatureFahrenheit}\u00B0F`}
          </p>
          <img
            src={conditionIcon}
            alt={conditionText}
            className="condition-icon"
          />
          <p className="condition-text">{conditionText}</p>
        </div>

        <div className="details">
          <p className="detail">
            Feels Like:{" "}
            {isMetric
              ? `${feelsLikeCelsius}\u00B0C`
              : `${feelsLikeFahrenheit}\u00B0F`}
          </p>
          <p className="detail">Humidity: {humidity}%</p>
          <p className="detail">
            Wind: {isMetric ? `${windKPH} km/h` : `${windMPH} mph`}
          </p>
          <p className="detail" title={uvTitle}>
            UV: <span className={uvStyle}>{uvIndex}</span>
          </p>
          <p className="detail" title={airQualityTitle}>
            Air Quality: <span className={airQualityStyle}>{airQuality}</span>
          </p>
        </div>
      </div>

      <div className="forecast">
        <div>
          <h3 className="forecast-day">{firstDayDate}</h3>
          <p className="forecast-temperature">
            {isMetric
              ? `${firestDayTemperatureCelsius}\u00B0C`
              : `${firestDayTemperatureFahrenheit}\u00B0F`}
          </p>
          <img
            className="condition-icon"
            src={firstDayConditionIcon}
            alt={firstDayConditionText}
          />
          <p className="forecast-condition-text">{firstDayConditionText}</p>
        </div>

        <div>
          <h3 className="forecast-day">{secondDayDate}</h3>
          <p className="forecast-temperature">
            {isMetric
              ? `${secondDayTemperatureCelsius}\u00B0C`
              : `${secondDayTemperatureFahrenheit}\u00B0F`}
          </p>
          <img
            className="condition-icon"
            src={secondDayConditionIcon}
            alt={secondDayConditionText}
          />
          <p className="forecast-condition-text">{secondDayConditionText}</p>
        </div>

        <div>
          <h3 className="forecast-day">{thirdDayDate}</h3>
          <p className="forecast-temperature">
            {isMetric
              ? `${thirdDayTemperatureCelsius}\u00B0C`
              : `${thirdDayTemperatureFahrenheit}\u00B0F`}
          </p>
          <img
            className="condition-icon"
            src={thirdDayConditionIcon}
            alt={thirdDayConditionText}
          />
          <p className="forecast-condition-text">{thirdDayConditionText}</p>
        </div>
      </div>
    </div>
  );
}

export default App;
