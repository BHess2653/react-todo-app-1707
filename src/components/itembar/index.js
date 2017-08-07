import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {addItem} from '../../actions'

class ItemBar extends React.Component{
  render(){
    return (
      <div>
        <input type="text" ref="item" placeholder="Add item here" />
        <button onClick={() => this.props.addItem(this.refs.item.value)}>Add Item</button>
      </div>
    );
  }
};

function mapDispatchToProps(dispatch){
  return bindActionCreators({addItem}, dispatch);
}

export default connect(() => {}, mapDispatchToProps)(ItemBar);
