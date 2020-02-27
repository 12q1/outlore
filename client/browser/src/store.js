import { createStore, applyMiddleware, compose } from 'redux';
import reducer from "./reducers/index"
import ReduxThunk from 'redux-thunk'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const enhancer = composeEnhancers(
  applyMiddleware(ReduxThunk)
)
const store = createStore(reducer, enhancer);

console.log("Initial state of the store:", store.getState());

store.subscribe(() => {
    console.log("The state just changed to:", store.getState());
});

export default store;