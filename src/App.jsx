
import { useState } from "react";

import Header from "./components/header";
import Footer from './components/Footer';
import DestinationCard from "./components/DestinationCard";
import KeyFeatures from "./components/KeyFeatures";
import CallToAction from "./components/CallToAction";
import AboutCards from "./components/aboutCards";

// import DestinationItem2 from "./components/Cards";
// import DestinationItem3 from "./components/Cards";
// image import
import busPic from "./assets/bus.png";
import showcasePic from "./assets/showcase.webp";
import cardPic1 from "./assets/card.jpg";
import cardPic2 from "./assets/card2.jpg";
import cardPic3 from "./assets/card3.webp";

import "./App.css";

function App() {
	const destinationData = [
        {
            id: 1,
            image: cardPic1,
            alt: "destination",
            title: "Sacred Calm at Badrinath Temple.",
            location: "Badrinath, Uttarakhand, India",
            rating: 4.7
        },
        {
            id: 2,
            image: cardPic2,
            alt: "destination",
            title: "Divine Majesty at Jagannath Temple.",
            location: "Puri, Odisha, India",
            rating: 4.8
        },
        {
            id: 3,
            image: cardPic3,
            alt: "destination",
            title: "Spiritual Serenity at Neem Karoli Temple.",
            location: "Dehradun, India",
            rating: 4.5
        }
    ];
  return (
    <>
		<Header />

		<section className="mainSection">
			<div className="header__container">
				<div className="header__content">
					<p>BUS YOUR TREVEL JOURNEY</p>
					<h1>Where Every Bus Ride Feels Magical!</h1>
					<div className="header__btns">
						<button className="btn">Book A Trip Now</button>
						<a href="#">
							<span>
								<i className="ri-play-circle-fill"></i>
							</span>
						</a>
					</div>
				</div>
				<div className="header__image">
					<img src={busPic} alt="header" />
				</div>
			</div>
		</section>

		<section className="section__container destination__container" id="about">
			<h2 className="section__header">Popular Destination</h2>
			<p className="section__description">Discover the Most Loved Destination Around the Globe</p>
			<div className="destination__grid">
				{destinationData && destinationData.length > 0 ? (
					destinationData.map((destination) => (
					<DestinationCard key={destination.id} destination={destination} />
					))
				) : (
					<div className="no-data-card">
					<p>No destination data available. Please check back later!</p>
					</div>
				)}
			</div>
		</section>

		<section className="section__container journey__container" id="tour">
			<h2 className="section__header">Bus Travel, the Easy Way!</h2>
			<p className="section__description">Effortless planning for Your Next Adventure</p>
			<div className="journey__grid">
				<KeyFeatures />
			</div>
		</section>

		<section className="section__container showcase__container" id="package">
			<div className="showcase__image">
				<img src={showcasePic} alt="showcase" />
			</div>
			<div className="showcase__content">
				<h4>Ignite Your Wanderlust with Every Bus Ride</h4>
				<p>Traveling by bus offers comfort and stunning views on your way to amazing destinations. With spacious seats and air conditioning, you can relax and enjoy the ride, whether you're heading to a vibrant city or a peaceful getaway. It’s the perfect way to travel affordably and conveniently while experiencing the beauty of the journey.</p>
				<p>Explore the World by Bus with Ease Hop on a bus and experience the joy of travel at your own pace. From comfortable seating to scenic routes, our buses offer the perfect way to explore cities, nature, and everything in between. Whether it's a quick trip or a long adventure, sit back, relax, and enjoy the ride.</p>
				<div className="showcase__btn">
					<CallToAction />
				</div>
			</div>
		</section>

		<section className="section__container banner__container">
			<AboutCards />
		</section>

		<section className="section__container discover__container">
			<h2 className="section__header">
				Discover Peace, Culture, and Devotion with Our Temple Bus Travels
			</h2>
			<p className="section__description">
				Witness Stunning Landscapes from the Comfort of Your Bus Seat"
			</p>
			<div className="discover__grid">
				<div className="discover__card">
					<span>
						<i className="ri-camera-lens-line"></i>
					</span>
					<h4>Your Road, Your Story</h4>
					<p>
						Experience the freedom of travel with our comfortable and reliable
						bus trips. Enjoy stunning views along the way while relaxing in
						spacious seats. Whether it's a short trip or a long journey, our
						buses ensure a smooth and enjoyable ride.
					</p>
				</div>
				<div className="discover__card">
					<span>
						<i className="ri-ship-line"></i>
					</span>
					<h4>Coastal Wonders</h4>
					<p>
						Embark on a journey through the mesmerizing coastal wonders. Enjoy
						the serene beauty of pristine beaches, stunning cliffs, and
						breathtaking ocean views, all from the comfort of our bus. Let the
						coastal breeze guide you to unforgettable destinations.
					</p>
				</div>
				<div className="discover__card">
					<span>
						<i className="ri-landscape-line"></i>
					</span>
					<h4>Historic Landmarks</h4>
					<p>
						Explore the charm of historic landmarks on our specially curated
						bus tours. Our comfortable buses will take you through iconic
						sites, offering insights into their fascinating stories. Sit back,
						relax, and immerse yourself in the rich history that each
						destination holds.
					</p>
				</div>
			</div>
		</section>

		<Footer />

	
    </>
  );
}

export default App;
