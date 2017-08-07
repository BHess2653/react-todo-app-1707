import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {deleteItem} from '../../actions'

class Item extends React.Component{
  render(){
    return (
      <tr>
        <td>
          {this.props.item}
        </td>
        <td>
          <button onClick={() => {this.props.deleteItem(this.props.id)}}>Delete</button>
        </td>
      </tr>
    )
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({deleteItem}, dispatch);
}

export default connect(() => {return {};}, mapDispatchToProps)(Item);
