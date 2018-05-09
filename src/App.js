import React, { Component } from 'react'
import '../node_modules/@blueprintjs/core/lib/css/blueprint.css'
import '../node_modules/@blueprintjs/icons/lib/css/blueprint-icons.css'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'
import Router from 'lib/router'
import { BrowserRouter } from 'react-router-dom'

const client = new ApolloClient({
  uri: 'http://localhost:4000',
})

class App extends Component {
  render() {
    return (
      <ApolloProvider client={ client }>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </ApolloProvider>
    )
  }
}

export default App
