import React from 'react';
import {connect} from 'react-redux';
import AddItem from 'AddItem';
import ItemList from 'ItemList';
import * as actions from 'actions';


export class Post extends React.Component {

  handleAddComment (e) {
    e.preventDefault();
    var {dispatch} = this.props;
    dispatch(actions.openPostCommentForm());
  }

  render () {

    var {addPostComment} = this.props;

    var myComponent = () => {
      if (addPostComment) {
        return (
          <div className="container">
            <div className="title">
              <h1>username</h1>
              <h2>POST TITLE + CONTENT</h2>
            </div>
            <ItemList/>
            <AddItem/>
            <button className="my-green-button float-right" onClick={this.handleAddComment.bind(this)}>Add Comment</button>
          </div>
        )
      } else {
        return (
          <div className="container">
            <div className="title">
              <h1>username</h1>
              <h2>POST TITLE + CONTENT</h2>
            </div>
            <ItemList/>
            <button className="my-green-button float-right" onClick={this.handleAddComment.bind(this)}>Add Comment</button>
          </div>
        )
      }
    }

    return (
      <div>
        {myComponent()}
      </div>
    )
  }
};

export default connect(
  (state) => {
    return state;
  }
)(Post);

// What needs to happen?  I need to hit add comment and a form needs to appear.  We can do this with true or false. if AddPostComment === true
// then render the component with a form.  Otherwise don't.
