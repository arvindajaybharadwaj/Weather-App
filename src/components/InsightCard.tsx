interface insightCardProps {
    insightLabel: string;
}

export default function InsightCard({insightLabel}: insightCardProps) {
    return(
        <div className="insight-card-container">
            <p className="insight-card-label">{insightLabel}</p>
        </div>
    );
}