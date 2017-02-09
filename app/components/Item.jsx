import React from 'react';
import {connect} from 'react-redux';
import moment from 'moment';
import * as actions from 'actions';

export class Item extends React.Component {

  handleDelete (e) {
    e.preventDefault();
    var {dispatch, id} = this.props;
    dispatch(actions.deleteItem(id));
  }

  handleEdit (e) {
    e.preventDefault();
    var {dispatch, id} = this.props;
    dispatch(actions.toggleEditable(id));
  }

  handleUpdateSubmit (e) {
    e.preventDefault();
    var {dispatch, id} = this.props

    var itemText = this.refs.itemText.value;

    if (itemText.length > 0) {
      dispatch(actions.editText(id, itemText));
      dispatch(actions.toggleEditable(id));
    } else {
      this.refs.itemText.focus();
    }
  }

  render() {
    var {text} = this.props;

    return (
      <div>
        <div className="item">
          <div className="content">
            <p>username</p>
            <p>{text}</p>
          </div>

          <div className="deleteBox">
            <button className="my-green-button float-right" onClick={this.handleEdit.bind(this)}>Add</button>
          </div>
        </div>
      </div>
    )
  }
};

export default connect()(Item)
