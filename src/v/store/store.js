/**
 * Created by YouHan on 2017/6/14.
 */
import {applyMiddleware, createStore, compose} from "redux";
// import {composeWithDevTools} from "redux-devtools-extension";

// import {Platform} from 'react-native';
// import devTools from 'remote-redux-devtools';
import {isNative} from "../utils";



  // if (window.__REDUX_DEVTOOLS_EXTENSION__) {
  //   devtools = window.__REDUX_DEVTOOLS_EXTENSION__;
  // }

  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const store = (rootReducer, middleWares) => {
    return createStore(rootReducer,
      composeEnhancers(
        applyMiddleware(...middleWares),
      )
    );
  };

  export default store
