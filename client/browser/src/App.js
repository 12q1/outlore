import React, { Component } from 'react'
import store from './store'
import { Provider } from 'react-redux'
import { Route } from 'react-router-dom'
//import Home from './components/Home'
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import ArticleListContainer from './components/ArticleListContainer'
import ResponsiveDrawer from './components/ResponsiveDrawer'
import blue from '@material-ui/core/colors/blue';

const theme = createMuiTheme({
  palette: {
    primary: blue,
  },
});

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <Route path="/" exact component={ResponsiveDrawer} />
        </ThemeProvider>
      </Provider>
    );
  }
}

export default App