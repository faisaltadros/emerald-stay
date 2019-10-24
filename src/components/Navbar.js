import React from 'react'

const Navbar = () => {
    return (
        <nav className="container-fluid cnav">
          <div className="row">
              <div className="col" style={{paddingLeft: 0}}>
                  <div className="logo-holder">
                      <a href="index.html"><img className="logo" src={require("../img/logo.svg")} alt="E" /></a>
                  </div>
              </div>
          </div>
      </nav>
    )
}

export default Navbar
