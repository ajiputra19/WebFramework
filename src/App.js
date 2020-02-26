import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Subheader from './Subheader'
import Biodata from './Biodata'

class Header extends Component {
  render(){
    return(
      <div>
        <h2>Halo TI-3G Polinema</h2>
      </div>
    )
  }
}

function App() {
  return (
    <div class='Container'>
        <Biodata />
    </div>
  );
}

export default App;
