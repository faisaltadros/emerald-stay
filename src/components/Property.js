import React, { Component } from 'react'

export class Property extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          property: this.props.property,
          index: this.props.index
        };
      }

    propertyColor () {
        if([0,4,8,12,16,20,24,28,32].indexOf(this.state.index) !== -1) {
            return 'boxy c1-color'
        } else if([1,17,33].indexOf(this.state.index) !== -1) {
            return 'boxy primary-color'
        } else if([5,21].indexOf(this.state.index) !== -1) {
            return 'boxy c3-color'
        } else if([9,25].indexOf(this.state.index) !== -1) {
            return 'boxy c4-color'
        } else if([13,29].indexOf(this.state.index) !== -1) {
            return 'boxy c5-color'
        } else if([2,6,10,14,18,22,26,30,34].indexOf(this.state.index) !== -1) {
            return 'boxy default-color'
        } else {
            return 'boxy c2-color'
        }
    }
    
    render() {
        const color = this.propertyColor()
        const { 
            images, 
            title,
            city, 
            number_of_bedrooms, 
            main_image_text ,
            meta_description,
            property_price,
            max_people
        } = this.state.property
        const image = images[0].path
        const mainTitle = title.substr(0,title.indexOf(' '));
        const subTitle = title.substr(title.indexOf(' ')+1);
        return (
            <div className="container-fluid box-content">
                <div className="row">
                    <div className="col-xl-4 col-lg-6 two">
                        <div className={color}>
                            <div className="row">
                                <div className="col">
                                    <h1 className="title">{title} 
                                        <br /> 
                                        <span>{city? city : 'Les Gets'}</span>
                                        <br />
                                    </h1>
                                </div>
                            </div>
                            <div className="row">
                                    <div className="text">
                                        <ul>
                                            <li>from €{property_price} / night</li> 
                                            <li>{number_of_bedrooms} Bedrooms</li>
                                            <li>{max_people} Bedrooms</li>
                                            <br />
                                            {/* <li className="meta_description">{meta_description}</li> */}
                                        </ul>
                                </div>
                            </div>
                            <div className="btn-holder text-center">
                                <a className="cr-btn ex-padding">BOOK</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-8 col-lg-6 one">
                        <div className="boxy img-box">
                            <div className="img"><img src={image} alt={main_image_text} /></div>
                            <div className="bottom-text">
                            </div>
                            <a href="" className="project-link-full"></a>
                        </div>
                    </div>                    
                </div>
            </div>
        )
    }
}

export default Property
