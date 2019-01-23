import React, { Component } from 'react';
import './ParallaxImg.scss';

class ParallaxImg extends Component {
  constructor(props) {
    super(props);

    this.handleLoadedImage = this.handleLoadedImage.bind(this);
    this.handleScroll = this.handleScroll.bind(this);

    this.state = {
      scrolled: 0,
      depth: 100,
      imageHeight: 0,
      offset: 0,
    }
  }
  
  componentDidMount() {
    window.addEventListener('load', this.handleLoadedImage);
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('load', this.handleLoadedImage);
    window.removeEventListener('scroll', this.handleScroll);
  }
  
  handleLoadedImage() {
    this.setState({ imageHeight: this.refs.image.height })
    console.log('height', this.state.imageHeight);
  }

  handleScroll(eve) {
    this.setState({ scrolled: Math.round(window.pageYOffset) });
    let offset = this.refs.image.getBoundingClientRect();
    this.setState({ offset: Math.round(offset.top) })
    console.log('offset', this.state.offset);
  }

  render() {
    return (
      <div>
        <div 
          className="ParallaxImg"
          style= {{
            'height': this.state.imageHeight - this.state.depth + 'px',
          }}>
          <img ref="image" 
                src={this.props.src} 
                alt={this.props.alt} 
                height={this.props.height} 
                width={this.props.width}
                style= {{
                  'transform': 'translateY(' + (this.state.offset / 10) + 'px)',
                }} />
        </div>
        <pre>
          { this.state.imageHeight } - { this.state.offset }
        </pre>
      </div>
    );
  }
}

export default ParallaxImg;