// import React from 'react'
// import { render } from 'react-dom'
// import { createStore } from 'redux'
// import { Provider } from 'react-redux'
// import App from './components/App'
// import reducer from './reducers'
// import 'todomvc-app-css/index.css'

// const store = createStore(reducer)

// render(
//   <Provider store={store}>
//     <App />
//   </Provider>,
//   document.getElementById('root')
// )
import inori from './v/index';
import todos from './model/todos';
import visibilityFilter from './model/visibilityFilter';
import App from './components/App'
import 'todomvc-app-css/index.css'

inori.addModel(todos);
inori.addModel(visibilityFilter);

inori.start(App, 'root');