import React, { Component } from 'react';

import Shape from '../../public/assets/images/Shape.png'

class Header extends Component {

  render() {
    return (
      <header>
        <nav>
          <img src={Shape} />
          <div>
            <span>Meu perfil</span>
            <i className="material-icons">account_circle</i>
          </div>
        </nav>
      </header>
    );
  }
}

export default Header;