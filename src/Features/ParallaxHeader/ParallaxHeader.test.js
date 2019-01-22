import React from 'react';
import ReactDOM from 'react-dom';
import ParallaxHeader from './ParallaxHeader';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ParallaxHeader />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('sums numbers', () => {
  expect(1 + 2).toEqual(3);
});
