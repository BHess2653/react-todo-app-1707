const addItem = (item) => {
  return {
    type: 'ADD_ITEM',
    payload: item
  };
},

deleteItem = (itemId) => {
  return {
    type: 'DELETE_ITEM',
    payload:itemId
  };
};

export default {addItem, deleteItem};
