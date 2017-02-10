import React from 'react';
import {connect} from 'react-redux';
import * as actions from 'actions';


export class AddSubComment extends React.Component {

  handleSubmit (e) {
    e.preventDefault();
    var {dispatch, parentID, id} = this.props
    //console.log('PARENT_ID: ', parentID);

    var text = this.refs.text.value;

    if (text.length > 0) {
      this.refs.text.value = '';
      dispatch(actions.toggleCommentForm(parentID));
      dispatch(actions.createSubComment(text, parentID))
      // dispatch(actions.addItem(itemText));
      // dispatch(actions.openPostCommentForm());
    } else {
      this.refs.itemText.focus();
    }
  }

  render () {
    return (
      <div className="add-item-form">
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input type="text" ref="text" placeholder="Add a comment"/>
          <button className="button expanded">Submit</button>
        </form>
      </div>
    );
  }
};

export default connect()(AddSubComment);
