
export default function KeyFeatures() {
    const journeyData = [
        {
            id: 1,
            icon: "ri-bookmark-3-line",
            title: "Seamless Booking Process",
            subTitle: "Seat Booking, one Click Away",
            description: "From booking tickets to tracking your bus in real-time, everything is just a click away. No more long queues or last-minute confusion — plan, book, and board with complete ease. Your journey, simplified."
        },
        {
            id: 2,
            icon: "ri-landscape-fill",
            title: "Tailored Itineraries",
            subTitle: "Customized Plans Just for You",
            description: "Everyone travels differently — that’s why we create plans just for you. From preferred timings to budget-friendly options and seat choices, enjoy a trip designed around your lifestyle."
        },
        {
            id: 3,
            icon: "ri-map-2-line",
            title: "Expert Local Insights",
            subTitle: "Insider Tips and Recommendations",
            description: "From the best boarding points to local travel hacks, our insights are powered by real people who know the roads. It’s local knowledge, delivered straight to your screen."
        }
        
    ];
    const hasData = journeyData && journeyData.length > 0;

    return (
        <>
            {hasData && (
                journeyData.map((journey) => (
                    <div className="journey__card" key={journey.id}>
                        <div className="journey__card__bg">
                            <span><i className={journey.icon}></i></span>
                            <h4>{journey.title}</h4>
                        </div>
                        <div className="journey__card__content">
                            <span><i className={journey.icon}></i></span>
                            <h4>{journey.subTitle}</h4>
                            <p>{journey.description}</p>
                        </div>
                    </div>
                ))
            )}
            {!hasData && (
                <div className="no-data-card">
                    <p>No data available. Please check back later!</p>
                </div>
            )}
        </>
    );
}
