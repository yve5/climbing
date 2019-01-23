import React from 'react';
import ReactDOM from 'react-dom';
import ParallaxImg from './ParallaxImg';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ParallaxImg />, div);
  ReactDOM.unmountComponentAtNode(div);
});
