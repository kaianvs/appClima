import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";
import "./App.css";
import { useEffect, useState } from "react";
import ForecastList from "./components/ForecastNextDays/ForecastList";
import Loading from "./components/Loading/Loading";


const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

function App() {

  const [weather, setWeather] = useState(null)
  const [forecasts, setForecast] = useState(null);
  const [loading, setLoading] = useState(false)
  const [city, setCity] = useState("");





  useEffect(()=>{
      async function fetchWeather(){
         setLoading(true);
        try {

          const response = await fetch(`https://api.hgbrasil.com/weather?format=json-cors&key=${API_KEY}&city_name=${city}`);
          const data = await response.json()

          
          if(data.results){
            setWeather(data.results)
            setForecast(data.results.forecast.slice(1,4))
          }
          
          

        } catch (error) {
            console.error("A aplicação não conseguiu se comunicar com a API", error)
        } finally{
          setLoading(false)
        }
      }
      fetchWeather();

  }, [city])

  console.log(weather)



  return (
    <div className="app-container">

      
      {loading ? (
        <Loading/>
      ) :(
        <>
        <SearchBar setCity = { setCity }  />
        {weather && (
          <>
            <h1>{weather.city}
              <span>Nascer do Sol: {weather.sunrise } | Pôr do Sol: {weather.sunset}</span>
            </h1>
            <WeatherCard weather={weather} />
            <ForecastList forecast={forecasts} />
          </>
        )}
        </>
        )}

  
    </div>
  );
}

export default App;
