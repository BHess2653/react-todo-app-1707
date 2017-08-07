import React from 'react'

export default class ItemBar extends React.Component{
  render(){
    return (
      <div>
        <input type="text" ref="task" placeholder="Add item here" />
        <button>Add Item</button>
      </div>
    );
  }
}
