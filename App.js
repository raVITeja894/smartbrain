import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './index.css';
import Navigation from './Navigation'
import 'tachyons'
import Logo from './Logo'
import ImageLinkForm from './ImageLinkForm'
import Rank from './Rank'

class App extends Component {
  
  render() {
    return (
      <div className="App">
        
        <Navigation />
        <Logo />
        <ImageLinkForm/>
        <Rank />
      
      </div>
    );
  }
}
export default App;