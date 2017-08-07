import React from 'react'

export default ItemBar extends React.Component{
  render(){
    return (
      <input type="text" ref="task" placeholder="Add item here" />
      <button>Add Item</button>
    );
  }
}
