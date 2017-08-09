import React from 'react'
import {connect} from 'react-redux'
import Item from '../item'

class ItemList extends React.Component{
  render(){
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>Items</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
        {this.props.items.map((item, index) => <Item key={index} item={item} />)}
        </tbody>
      </table>
    )
  }
}

function mapStateToProps(state){
  return {
    items:state.items
  }
}

export default connect(mapStateToProps)(ItemList);
