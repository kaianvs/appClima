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


  useEffect(()=>{
      async function fetchWeather(){
        try {

          const response = await fetch(`https://api.hgbrasil.com/weather?format=json-cors&key=${API_KEY}&city_name=Sobral, CE`);
          const data = await response.json()

          
          if(data.results){
            console.log(data)
            setWeather(data.results)
            setForecast(data.results.forecast.slice(1,4))
            setLoading(true)
          }

        } catch (error) {
            console.error("A aplicação não conseguiu se comunicar com a API", error)
        }
      }

      

      fetchWeather();
      

  }, [])

  


  return (
    <div className="app-container">
      {loading ?
      (
        <SearchBar />
        {weather && (
          <>
            <h1>{weather.city}</h1>
            <WeatherCard weather={weather} />
            <ForecastList forecast={forecasts} />
          </>
        )}
        ) :( 
        <Loading/>) }

  
    </div>
  );
}

export default App;
