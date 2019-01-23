import React, { Component } from 'react';
import './ParallaxImg.scss';

class ParallaxImg extends Component {
  constructor(props) {
    super(props);

    this.handleLoadedImage = this.handleLoadedImage.bind(this);
    this.handleScroll = this.handleScroll.bind(this);

    this.state = {
      depth: 50,
      height: 0,
      offset: 0,
    }
  }

  componentDidMount() {
    window.addEventListener('load', this.handleLoadedImage);
    window.addEventListener('resize', this.handleLoadedImage);
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('load', this.handleLoadedImage);
    window.removeEventListener('resize', this.handleLoadedImage);
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleLoadedImage() {
    this.setState({ height: this.refs.image.height })
  }

  handleScroll(eve) {
    let formula = 0, offset = 0;

    if (window.innerWidth < 600) {
      offset = this.refs.image.getBoundingClientRect();
      formula = -1 * Math.round(this.state.depth * (Math.round(offset.top) + this.state.height) / (this.state.offset + window.innerHeight));
    }
    
    this.setState({ offset: formula });
  }

  render() {
    return (
      <div
        className={ 'ParallaxImg ' + (this.state.offset ? 'ParallaxImg--effect' : '') }
        style={{
          'height': (this.state.offset ? (this.state.height - this.state.depth) : this.state.height) + 'px',
          'margin': Math.round(this.state.depth / 2) + 'px 0',
        }}>
        <img ref="image"
          src={this.props.src}
          alt={this.props.alt}
          height={this.props.height}
          width={this.props.width}
          style={{
            'transform': 'translateY(' + this.state.offset + 'px)',
          }} />
      </div>
    );
  }
}

export default ParallaxImg;