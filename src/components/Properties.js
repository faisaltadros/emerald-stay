import React, { Component, Fragment } from "react";
import BottomScrollListener from "react-bottom-scroll-listener";
import { render } from "react-dom";
import Property from "./Property";
import BoxProperty from "./BoxProperty";
import debounce from "lodash.debounce";
import Loader from "./Loader";
import Filter from "./Filter";
import Footer from "./Footer";
import NoResults from "./NoResults";

export class Properties extends Component {
  constructor() {
    super();
    this.state = {
      addressCount: 1,
      error: false,
      isLoading: false,
      properties: [],
      lowestToHighest: [],
      highestToLowest: [],
      topPicks: false,
      reducedRate: false,
      showFooter: false,
      showBox: false,
      sorting: "lowest",
      reload: true,
    };
    this.loadData = this.loadData.bind(this);
    this.onClickTopPicks = this.onClickTopPicks.bind(this);
    this.onClickReducedRate = this.onClickReducedRate.bind(this);
    this.onGridListClick = this.onGridListClick.bind(this);
    this.changeSorting = this.changeSorting.bind(this);
  }

  loadData = () => {
    const count = this.state.addressCount;
    const url = `https://api.emerald-stay.fr/api/properties?country=1&adults=1&children=0&page=${count}`;

    this.setState({ isLoading: true });
    if (this.state.addressCount < 9) {
      fetch(url)
        .then(res => res.json())
        .then(results => {
          const nextProperties = results.data.properties
          this.setState({
            addressCount: this.state.addressCount + 1,
            isLoading: false,
            properties: [...this.state.properties, ...nextProperties],
            lowestToHighest: [...this.state.lowestToHighest, ...nextProperties].sort((a, b) => {
              return a.property_price - b.property_price;
            }),
            highestToLowest: [...this.state.highestToLowest, ...nextProperties].sort((a, b) => {
              return b.property_price - a.property_price;
            }),
            reload: false
          });
        })
        .catch(err => {
          this.setState({
            error: err.message,
            isLoading: false,
            reload: false
          });
        });
    } else {
      this.setState({
        isLoading: false,
        reload: false
      });
    }
  };

  handleOnDocumentBottom = () => {
    if (this.state.addressCount < 9) {
      this.loadData();
    } else {
      this.setState({
        showFooter: true
      });
    }
  };

  changeSorting = () => {
    if(this.state.sorting === "lowest") {
      this.setState({
        sorting: 'highest',
        reload: true,
      }, ()=>{
        this.setState({
          reload: false,
        })
      })
    } else if (this.state.sorting === 'highest') { 
      this.setState({

        sorting: 'lowest',
        reload:true,
      }, () => {
        this.setState({
          reload: false,
        })
      })
    }
  }

  onClickTopPicks() {
    if (!this.state.topPicks) {
      const topPickProperties = this.state.properties.filter(
        property => property.is_top_picks === 1
      );
      this.setState({
        topPicks: !this.state.topPicks,
        lowestToHighest: [...topPickProperties].sort((a, b) => {
          return a.property_price - b.property_price;
        }),
        highestToLowest: [...topPickProperties].sort((a, b) => {
          return b.property_price - a.property_price;
        }),
      });
    } else {
      this.setState({
        topPicks: !this.state.topPicks,
        lowestToHighest: [...this.state.properties].sort((a, b) => {
          return a.property_price - b.property_price;
        }),
        highestToLowest: [...this.state.properties].sort((a, b) => {
          return b.property_price - a.property_price;
        }),
      });
    }
  }

  onClickReducedRate() {
    if (!this.state.reducedRate) {
      const reducedRateProperties = this.state.properties.filter(
        property => property.is_reduced_rates === 1
      );
      this.setState({
        reducedRate: !this.state.reducedRate,
        lowestToHighest: [...reducedRateProperties].sort((a, b) => {
          return a.property_price - b.property_price;
        }),
        highestToLowest: [...reducedRateProperties].sort((a, b) => {
          return b.property_price - a.property_price;
        }),
      });
    } else {
      this.setState({
        reducedRate: !this.state.reducedRate,
        lowestToHighest: [...this.state.properties].sort((a, b) => {
          return a.property_price - b.property_price;
        }),
        highestToLowest: [...this.state.properties].sort((a, b) => {
          return b.property_price - a.property_price;
        }),
      });
    }
  }

  onGridListClick() {
    if (!this.state.showBox) {
      this.setState({
        showBox: true
      });
    } else {
      this.setState({
        showBox: false,
      });
    }
  }

  renderProperties () {
    let results = [];
    if(this.state.lowestToHighest.length > 0) {
      if (this.state.sorting === 'lowest') {
        if (this.state.showBox) {
          const displayedBoxProperties = this.state.lowestToHighest.map((property, i) => (
            <BoxProperty key={i} property={property} index={i} />
          ));
          const boxProperties = (
            <div className="container-fluid box-content box-properties">
              {displayedBoxProperties.length > 0 ? displayedBoxProperties : null}
            </div>
          );
          results = boxProperties
        } else {
          const displayedProperties = this.state.lowestToHighest.map((property, i) => (
            <Property key={i} property={property} index={i} />
          ));
          const rowProperties =
            displayedProperties.length > 0 ? displayedProperties : null;
          results = rowProperties;
        }
      } else {
        if (this.state.showBox) {
          const displayedBoxProperties = this.state.highestToLowest.map((property, i) => (
            <BoxProperty key={i} property={property} index={i} />
          ));
          const boxProperties = (
            <div className="container-fluid box-content box-properties">
              {displayedBoxProperties.length > 0 ? displayedBoxProperties : null}
            </div>
          );
          results = boxProperties
        } else {
          const displayedProperties = this.state.highestToLowest.map((property, i) => (
            <Property key={i} property={property} index={i} />
          ));
          const rowProperties =
            displayedProperties.length > 0 ? displayedProperties : null;
          results = rowProperties
        }
      }
      return results
    } else if (!this.state.isLoading) {
      return <NoResults />
    }

  }

  componentDidMount() {
    this.loadData();
  }

  render() {
    console.log(this.state)
    const {
      isLoading,
      showFooter,
      reload
    } = this.state;
    
    return (
      <div onScroll={this.handleScroll}>
        <Filter 
          changeSorting={this.changeSorting}
          onClickTopPicks={this.onClickTopPicks} 
          onGridListClick={this.onGridListClick} 
          onClickReducedRate={this.onClickReducedRate}
          />
        {!reload ? this.renderProperties() : null}
        {isLoading ? (
          <div>
            <Loader />
          </div>
        ) : null}
        {showFooter ? <Footer /> : null}
        
        <BottomScrollListener onBottom={this.handleOnDocumentBottom} />
      </div>
    );
  }
}

export default Properties;
