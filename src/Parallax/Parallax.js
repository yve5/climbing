import React, { Component } from 'react';
import './parallax.scss';

class Parallax extends Component {
  render() {
    return (
      <div className="parallax">
        <div className="parallax__layer parallax__layer--back">
          This is the background.
          </div>
        <div className="parallax__layer parallax__layer--base">
          This is the foreground.
          </div>
      </div>
    );
  }
}

export default Parallax;