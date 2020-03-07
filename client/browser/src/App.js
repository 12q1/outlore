import React, { Component } from 'react'
import store from './store'
import { Provider } from 'react-redux'
import { Route } from 'react-router-dom'
//import Home from './components/Home'
import { ThemeProvider } from '@material-ui/core/styles';
import ArticleListContainer from './components/ArticleListContainer'
import ResponsiveDrawer from './components/ResponsiveDrawer'

const theme = {};

class App extends Component {
  render() {
    return (
      <Provider store={store}>
          <Route path="/" exact component={ResponsiveDrawer} />
      </Provider>
    );
  }
}

export default App