interface forecastCardProps {
    day: string;
    temperature: number;
}

export default function ForecastCard({day, temperature}: forecastCardProps) {
    return(
        <div className="forecast-card">
            <p className="forecast-card-day">{day}</p>
            <p className="forecast-card-temp">{`${temperature}°C`}</p>
        </div>
    );
}