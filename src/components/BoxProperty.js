import React, { Component } from "react";

export class BoxProperty extends Component {
  constructor(props) {
    super(props);

    this.state = {
      property: this.props.property,
      index: this.props.index
    };
  }

  render() {
    const {
      images,
      title,
      city,
      number_of_bedrooms,
      main_image_text,
      property_price,
      max_people
    } = this.state.property;
    const image = images[0].path;
    return (
          <div className="col-xl-6 col-lg-6 property-box">
            <div className="boxy img-box">
              <div className="img">
                <img src={image} alt={main_image_text} />
              </div>
              <div id="bottom-text" className="bottom-text">
                <div className="link">
                  <h1 className="title">
                    {title}
                    <br />
                    <span>{city ? city : "Les Gets"}</span>
                    <br />
                  </h1>
                </div>
                <div className="text">
                  <li><h4>from €{property_price} / night</h4></li>
                  <li><h4>{number_of_bedrooms} Bedrooms</h4></li>
                  <li><h4>{max_people} Guests</h4></li>
                </div>
              </div>
              <a href="" className="project-link-full"></a>
            </div>
          </div>
    );
  }
}

export default BoxProperty;
