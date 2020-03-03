import React, { Component } from 'react'
import store from './store'
import { Provider } from 'react-redux'
import { Route } from 'react-router-dom'
//import Home from './components/Home'
import ArticleListContainer from './components/ArticleListContainer'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <Route path="/" exact component={ArticleListContainer} />
        </div>
      </Provider>
    );
  }
}

export default App