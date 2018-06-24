/**
 * Created by YouHan on 2017/6/14.
 */
import {applyMiddleware, compose, createStore} from "redux";
const store = (rootReducer, middleWares) => {
  return createStore(rootReducer,
    compose(
      applyMiddleware(...middleWares),
    )
  );
};
export default store;