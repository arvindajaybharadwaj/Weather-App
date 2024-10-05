import InsightCard from "./InsightCard";

export default function InsightsContainer() {
    return(
        <div className="insights-container">
            <InsightCard insightLabel="UV Index" />
            <InsightCard insightLabel="Wind Status" />
            <InsightCard insightLabel="Sunrise & Sunset" />
            <InsightCard insightLabel="Humidity" />
            <InsightCard insightLabel="Visibility" />
            <InsightCard insightLabel="Air Quality" />
        </div>
    );
}