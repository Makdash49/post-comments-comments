import React from 'react';
import {connect} from 'react-redux';
import * as actions from 'actions';


export class AddItem extends React.Component {

  handleSubmit (e) {
    e.preventDefault();
    var {dispatch} = this.props

    var itemText = this.refs.itemText.value;

    if (itemText.length > 0) {
      this.refs.itemText.value = '';
      dispatch(actions.addItem(itemText));
      dispatch(actions.openPostCommentForm());
    } else {
      this.refs.itemText.focus();
    }
  }

  render () {
    return (
      <div className="add-item-form">
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input type="text" ref="itemText" placeholder="Add a comment"/>
          <button className="button expanded">Submit</button>
        </form>
      </div>
    );
  }
};

export default connect()(AddItem);
