export const addItem = (item) => {
  return {
    type: 'ADD_ITEM',
    payload: item
  };
};

export const editItem = (itemId) => {
  return {
    type: 'UPDATE_ITEM',
    payload: itemId
  };
};

export const deleteItem = (itemId) => {
  return {
    type: 'DELETE_ITEM',
    payload: itemId
  };
};
