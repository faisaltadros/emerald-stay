import React from "react";

const Header = () => {
  return (
    <React.Fragment>
      <header className="container-fluid header">
        <div className="mouse-scroll"></div>
        <div className="row">
          <div className="col">
            <div className="extra-lg-text">
              <span className="other-color">#TRUESTAYS</span>
            </div>
            <div className="extra-lg-text">
              <span>Each Emerald stay</span>
              <br />
              <span>tells a story.</span>
              <br />
              <span>What is yours?</span>
              <br />
            </div>
          </div>
        </div>
      </header>
      <div className="container-fluid true-destination">
        <div className="row">
          <div className="col">
            <div className="lg-text">True Destinations</div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Header;
