import ForecastCard from "./ForecastCard";

export default function ForecastContainer() {
    return(
        <div className="forecast-container">
            <ForecastCard day="Sun" temperature={15} />
            <ForecastCard day="Mon" temperature={16} />
            <ForecastCard day="Tue" temperature={17} />
            <ForecastCard day="Wed" temperature={18} />
            <ForecastCard day="Thu" temperature={19} />
            <ForecastCard day="Fri" temperature={20} />
            <ForecastCard day="Sat" temperature={21} />
        </div>
    );
}