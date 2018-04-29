import React, { Component } from 'react';
import { Intent, Spinner } from "@blueprintjs/core";
import '../node_modules/@blueprintjs/core/lib/css/blueprint.css';
import '../node_modules/@blueprintjs/icons/lib/css/blueprint-icons.css';

class App extends Component {
  render() {
    return (
      <Spinner intent={Intent.PRIMARY} />
    );
  }
}

export default App;
