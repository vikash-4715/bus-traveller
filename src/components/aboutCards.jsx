
export default function AboutCards() {
    const AboutData = [
        {
            id: 1,
            counter: "10+",
            title: "Years Experience",
        },
        {
            id: 2,
            counter: "12k",
            title: "Happy Clients",
        },
        {
            id: 3,
            counter: "4.8",
            title: "Overrall Ratings",
        }
        
    ];
    return (
        <>
            {AboutData && AboutData.length > 0 ? (
                AboutData.map((about) => (
                    <div className="banner__card" key={about.id}>
                        <h4>{about.counter}</h4>
                        <p>{about.title}</p>
                    </div>
                ))
            ) : (
                <div className="no-data-card">
                    <p>No data available. Please check back later!</p>
                </div>
            )}
        </>
    );
}
