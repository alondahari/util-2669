import React, { Component } from 'react';
import '../node_modules/@blueprintjs/core/lib/css/blueprint.css';
import '../node_modules/@blueprintjs/icons/lib/css/blueprint-icons.css';
import { Nav, Bills } from './components'
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";

const client = new ApolloClient({
  uri: "http://localhost:3001/graphql",
});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div>
          <Nav />
          <Bills />
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
