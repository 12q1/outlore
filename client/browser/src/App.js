import React, { Component } from 'react'
import store from './store'
import { Provider } from 'react-redux'
import { Route } from 'react-router-dom'
//import Home from './components/Home'
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import ResponsiveDrawer from './components/ResponsiveDrawer'
const theme = createMuiTheme({
  palette: {
    primary: {
     main: '#222C3A',
    }
  },
  //shadows: ["none"], //this option will cause elevation warnings
  shape: {
    borderRadius: 4
  }
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