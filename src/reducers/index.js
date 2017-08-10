import {combineReducers} from 'redux';

const itemsReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      // copy of state = state.concat(action.payload);
      // return your copy
      state = state.concat(action.payload);
      break;

    case 'EDIT_ITEM':
      break;

    case 'DELETE_ITEM':
      state = state.slice();
      state.splice(action.payload,1);
      break;
  }
  return state;

},
reducers = combineReducers({
  items:itemsReducer
});

export default reducers;
