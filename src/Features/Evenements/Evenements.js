import React, { Component } from 'react';

class Evenements extends Component {
  render() {
    return (
      <div>
        <h2>Évènements</h2>
        <p>
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          <br />
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur :
        </p>

        <ul>
          <li>ullamco laboris nisi ut aliquip ex ea commodo consequat,</li>
          <li>reprehenderit in voluptate velit esse cillum,</li>
          <li>occaecat cupidatat non proident,</li>
          <li>dolore magna aliqua...</li>
        </ul>

        <h2>Compétitions</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          <br />
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        </p>
      </div>
    );
  }
}

export default Evenements;