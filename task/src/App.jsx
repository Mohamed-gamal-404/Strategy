import "./App.css";

function App() {
  return (
    <>
      <section>
        <header className="header-container">
          <div className="header-logo">STRATEGY</div>
          <div className="navbar">
            <nav>
              <ul>
                <li className="active">Home</li>
                <li>About</li>
                <li>Services</li>
                <li>Portfolio</li>
                <li>Team</li>
                <span>
                  <li>Drop down</li>
                  <i className="fas fa-angle-down"></i>
                </span>
                <li>Contact</li>
              </ul>
            </nav>
          </div>
          <div className="header-button">Get Started</div>
        </header>
        <div className="det_container">
          <div className="text_container">
            <h2>OUR AGENCY</h2>
            <div className="h1">
              <h1>CREATIVE</h1>
              <h1>DESIGN</h1>
            </div>
            <hr />
            <p>
              Discover innovative strategies for impactful visual communication.
              We transform ideas into compelling realities, ensuring your brand
              stands out in a crowded marketplace. Our dedicated team leverages
              cutting-edge techniques to deliver exceptional results that
              resonate with your audience.
            </p>
            <div className="dis-btn">
              <h1>EXPLORE SERVICE</h1>
              <i className="fas fa-arrow-right"></i>
            </div>
          </div>
          <div className="visual_container">
            <img
              src="https://bootstrapmade.com/content/demo/Strategy/assets/img/abstract/abstract-1.webp"
              alt=""
            />
            <div className="veiw">
              <div className="dash">
                <h1>5k</h1>
                <div className="icon">
                  <i className="fas fa-arrow-right-long"></i>
                </div>
              </div>
              <p>Successful Campaigns</p> 
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
