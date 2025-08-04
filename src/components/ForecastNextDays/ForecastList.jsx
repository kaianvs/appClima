import ForecastItem from "./ForecastItem.jsx";
import "./style.css";

const ForecastList = ({ forecast }) => {

    
    

  return (
    <div className="forecast-list">
      {forecast.map((forecast, index) => (
        <ForecastItem key={index} {...forecast} />
      ))}
    </div>
  );
};

export default ForecastList;