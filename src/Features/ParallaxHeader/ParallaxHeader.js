import React, { Component } from 'react';
import './ParallaxHeader.scss';

class ParallaxHeader extends Component {
  constructor(props) {
    super(props);

    this.handleScroll = this.handleScroll.bind(this)

    this.state = {
      scrolled: 0,
    };
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  };

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll(eve) {
    this.setState({ scrolled: Math.round(window.pageYOffset) });
  }

  render() {
    return (
      <div className="parallaxHeader">
        <div
          className="parallaxHeader__layer"
          style={{
            'transform': 'translateY(' + Math.round(this.state.scrolled * 0.8) + 'px)',
          }}
          >
          This is the one.
          </div>
        <div
          className="parallaxHeader__layer parallaxHeader__layer--two"
          style={{
            'transform': 'translateY(' + Math.round(this.state.scrolled * 0.4) + 'px)',
          }}
          >
          This is the two.
        </div>
        <div
          className="parallaxHeader__layer parallaxHeader__layer--three"
          style={{
            'transform': 'translateY(' + Math.round(this.state.scrolled * 0.2) + 'px)',
          }}
        >
          This is the three.
        </div>
      </div>
    );
  }
}

export default ParallaxHeader;