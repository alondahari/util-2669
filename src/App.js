import React, { Component } from 'react';
import '../node_modules/@blueprintjs/core/lib/css/blueprint.css';
import '../node_modules/@blueprintjs/icons/lib/css/blueprint-icons.css';
import { Nav, Bill } from './components'
import Masonry from 'react-masonry-component';

class App extends Component {
  render() {
    return (
      <div>
        <Nav />
        <Masonry>
          <Bill />
        </Masonry>
      </div>
    );
  }
}

export default App;
