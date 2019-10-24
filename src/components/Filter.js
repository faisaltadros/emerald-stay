import React, { Component } from "react";
import Sticky from "react-sticky-state";
import "./Filter.css";

const scrollClass = {
  down: "sticky-scroll-down",
  up: "sticky-scroll-up"
};

export class Filter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sorting: "lowest",
      topPicks: false,
      reducedRate: false,
      topPicksStyle: "white",
      reducedRateStyle: "white",
      gridStyle: "white",
      listStyle: "#ffdf2d",
      showBox: false
    };

    this.changeSorting = this.changeSorting.bind(this);
    this.onGridListClick = this.onGridListClick.bind(this);
  }

  changeSorting() {
    this.props.changeSorting();
    if (this.state.sorting === "lowest") {
      this.setState({
        sorting: "highest"
      });
    } else {
      this.setState({
        sorting: "lowest"
      });
    }
  }

  onGridListClick() {
    if (!this.state.showBox) {
      this.setState({
        gridStyle: "#ffdf2d",
        listStyle: "white",
        showBox: true
      });
    } else {
      this.setState({
        gridStyle: "white",
        listStyle: "#ffdf2d",
        showBox: false
      });
    }
    this.props.onGridListClick();
  }

  onClickTopPicks() {
    this.props.onClickTopPicks();
    if (!this.state.topPicks) {
      this.setState({
        topPicksStyle: "#ffdf2d",
        topPicks: true
      });
    } else {
      this.setState({
        topPicksStyle: "white",
        topPicks: false
      });
    }
  }

  onClickReducedRate() {
    this.props.onClickReducedRate();
    if (!this.state.reducedRate) {
      this.setState({
        reducedRateStyle: "#ffdf2d",
        reducedRate: true
      });
    } else {
      this.setState({
        reducedRateStyle: "white",
        reducedRate: false
      });
    }
  }

  render() {
    const { topPicksStyle, reducedRateStyle, gridStyle, listStyle } = this.state;
    return (
      <Sticky scrollClass={scrollClass}>
        <div className="filter black">
          <div>
            <p>Sort by:</p>
          </div>
          <div>
            <a onClick={this.changeSorting.bind(this)}>Price ({this.state.sorting})</a>
          </div>
          <div>
            <a
              onClick={this.onClickTopPicks.bind(this)}
              style={{ color: topPicksStyle }}
            >
              <i className="fas fa-heart"></i> Top picks
            </a>
          </div>
          <div>
            <a
              onClick={this.onClickReducedRate.bind(this)}
              style={{ color: reducedRateStyle }}>
              <i className="fas fa-tag"></i> Reduced Rate
            </a>
          </div>
          <div>
            <a onClick={this.onGridListClick} style={{ color: gridStyle }}>
              <i class="fas fa-th-large"></i>
            </a>
            <a onClick={this.onGridListClick} style={{ color: listStyle }}>
              <i class="far fa-list-alt"></i>
            </a>
          </div>
        </div>
      </Sticky>
    );
  }
}

export default Filter;
