import React, { Component } from 'react';

class Sorties extends Component {
  constructor(props) {
    super(props);

    this.getLoremIpsum = this.getLoremIpsum.bind(this);
  }

  getLoremIpsum(key) {
    return (
      <p key={key}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
    )
  }
  
  render() {
    let collection = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    let fakeContent = collection.map(data => this.getLoremIpsum(data));
    
    return (
      <div>
        <h2>Duis aute irure dolor in reprehenderit</h2>

        {fakeContent}
      </div>
    );
  }
}

export default Sorties;