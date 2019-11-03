import React, { Component } from 'react';

import avatar from '../../assets/avatar.png';

import '../Header/style.css';

class  Header extends Component {
  render() {
    return (   
      <header>
        <a href="#" id="logo">Fakebook.</a>
        <nav id="menu">
          <a href="#">Meu Perfil</a>
          <a href="#"><img src={avatar}/></a>
        </nav>
      </header>   
    );
  }  
}

export default Header;
