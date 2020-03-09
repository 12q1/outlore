import React, { Component } from 'react'
import store from './store'
import { Provider } from 'react-redux'
import { Route } from 'react-router-dom'
//import Home from './components/Home'
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import ResponsiveDrawer from './components/ResponsiveDrawer'
import ArticleGridContainer from './components/ArticleGridContainer';
import AppBar from './components/AppBar'

const theme = createMuiTheme({
  palette: {
    primary: {
     main: '#222C3A',
    }
  },
  shadows: ["none"], //this option will cause elevation warnings
  shape: {
    borderRadius: 0
  }
});

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <AppBar/>
          <Route path="/" exact component={ArticleGridContainer} />
        </ThemeProvider>
      </Provider>
    );
  }
}

export default App