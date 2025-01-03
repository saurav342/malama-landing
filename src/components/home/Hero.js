const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Eco-Friendly Rides in Bengaluru</h1>
        <p>Experience premium transportation with zero emissions</p>
        <div className="hero-cta">
          <button className="btn btn-primary">Book a Ride</button>
          <button className="btn btn-secondary">Learn More</button>
        </div>
      </div>
      <div className="hero-image">
        <img src="/hero-car.jpg" alt="Malama EV Cab" />
      </div>
    </section>
  );
};

export default Hero; 