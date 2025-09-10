
export default function DestinationCard({ destination }) {
  return (
    <>
        <div className="destination__card">
            <img src={destination.image} alt={destination.alt} />
            <div className="destination__card__details">
                <div>
                    <h4>{destination.title}</h4>
                    <p>{destination.location}</p>
                </div>
                <div className="destination__ratings">
                    <span>
                        <i className="ri-star-fill"></i>
                    </span>
                    {destination.rating}
                </div>
            </div>
        </div>
    </>
  );
}
