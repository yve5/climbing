import React, { Component } from 'react';
import './Evenements.scss';

class Evenements extends Component {

  constructor(props) {
    super(props);

    this.state = {
      users: []
    }
  }
  
  componentDidMount() {
    const that = this;
    
    fetch('https://reqres.in/api/users?per_page=5')
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        else {
          throw Error(`Request rejected with status ${response.status}`);
        }
      })
      .catch(console.error)
      .then(myJson => {
        if (myJson) {
          that.setState({ users: myJson.data });
        }
      });
  }

  render() {
    let content = <div className="user--empty">No users !!!</div>

    if (this.state.users.length) {
      content = this.state.users.map((user) => {
        return (
          <div key={user.id} className="user">
              <img alt={ 'avatar-' + user.id} src={user.avatar} />
              {user.first_name} {user.last_name}
          </div>)
      })
    }
    
    return (
      <div>
        <h2>Users</h2>
        { content }

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