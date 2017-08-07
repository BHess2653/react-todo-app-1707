import {combineReducers} from 'redux';

const itemReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      state = state.concat(action.payload);
      break;

    case 'DELETE_ITEM':
      state = state.slice();
      state.splice(action.payload,1);
      break;
  }
  return state;

},
reducers = combineReducers({
  items:itemReducer
});

export default reducers;
