import React, { Component } from 'react';
import './Parallax.scss';

class Parallax extends Component {
  // constructor(props) {
  //   super(props);
  // }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  };

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll(eve) {
    let scrolled = window.pageYOffset;

    // background.top = (scrolled) + 'px';

    console.log(scrolled);
  }

  render() {
    return (
      <div className="parallax">
        <div 
          className="parallax__layer"
          style = {{
            'top': '50%',
          }}
        >
          This is the one.
          </div>
        <div 
          className="parallax__layer parallax__layer--two"
          style = {{
            'top': '70%',
          }}
        >
          This is the two.
        </div>
        <div 
          className="parallax__layer parallax__layer--three"
          style = {{
            'top': '90%',
          }}
        >
          This is the three.
        </div>
      </div>
    );
  }
}

export default Parallax;