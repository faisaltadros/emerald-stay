import React from 'react';
import './Loader.css'

class Loader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    }
  }
  render() {
    return (
      <div className="loader" >
        <img alt="Loading..." src="/loading.gif" />
      </div>
    )
  }
}

export default Loader