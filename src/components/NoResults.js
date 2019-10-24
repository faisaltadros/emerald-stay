import React from "react";

const NoResults = () => {
  return (
    <React.Fragment>
      <div className="container-fluid no-results">
        <div className="row">
          <div className="col">
            <div className="extra-lg-text">That's a miss</div>
            <div class="normal-text">
                <p>Sorry, that filter combination has no results.<br/>Please try different criteria</p>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default NoResults;
