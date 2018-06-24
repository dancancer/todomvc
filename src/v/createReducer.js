const split = '/'
function createReducer(initialState, handles, namespace) {
  const tureHandless = {};
  const handlesKeys = Object.keys(handles);
  for(var i = 0; i < handlesKeys.length ; i++){
    var key = handlesKeys[i];
    if (typeof handles[key] === 'function') {
      tureHandless[namespace + split + key] = handles[key]
    }
  }
  return (state = initialState, action) => {
    if (tureHandless.hasOwnProperty(action.type)) {
      return tureHandless[action.type](state, action);
    } else if (tureHandless.hasOwnProperty('default')) {
      return tureHandless['default'](state, action);
    } else {
      return state;
    }
  };
}

export default createReducer;