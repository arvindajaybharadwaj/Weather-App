import ForecastContainer from "./ForecastContainer";
import InsightsContainer from "./InsightsContainer";

export default function MainContainer() {
    return(
        <div className="main-container">
            <ForecastContainer />
            <InsightsContainer />
        </div>
    );
}