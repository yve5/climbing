import React, { Component } from 'react';
import './ParallaxHeader.scss';

class ParallaxHeader extends Component {
  constructor(props) {
    super(props);

    this.handleScroll = this.handleScroll.bind(this);
    this.getParallaxHeight = this.getParallaxHeight.bind(this);

    this.state = {
      scrolled: 0,
      height: 400,
    };
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);

    this.getParallaxHeight();
    window.addEventListener("resize", this.getParallaxHeight);
  };

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
    window.removeEventListener("resize", this.getParallaxHeight);
  }

  handleScroll(eve) {
    this.setState({ scrolled: Math.round(window.pageYOffset) });
  }

  getParallaxHeight() {
    if (typeof window.innerHeight !== 'undefined') {
      let navbarHeight = 75;
      this.setState({ height: window.innerHeight - navbarHeight })
    }
  }

  render() {
    return (
      <div 
        className="parallaxHeader"
        style={{
          'height': this.state.height + 'px',
        }}
        >
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