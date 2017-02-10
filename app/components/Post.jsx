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
          <div className="main-container">
            <div className="container">
              <div className="title">
                <div className="just-text">
                  <div className="username">
                    <h4>username</h4>
                  </div>
                  <div className="title-content">
                    <h4>POST TITLE + CONTENT</h4>
                  </div>

                  <AddItem/>
                  <button className="my-green-button float-right" onClick={this.handleAddComment.bind(this)}>Add Comment</button>
                </div>
                <ItemList/>
              </div>
            </div>
          </div>
        )
      } else {
        return (
          <div className="main-container">
            <div className="container">
              <div className="title">
                <div className="just-text">

                  <div className="username">
                    <h4>username</h4>
                  </div>
                  <div className="title-content">
                    <h4>POST TITLE + CONTENT</h4>
                  </div>


                  <button className="my-green-button float-right" onClick={this.handleAddComment.bind(this)}>Add Comment</button>
                </div>
                <ItemList/>
              </div>
            </div>
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

// So now we have an items array.  What I also need is a commentComments array and they will have a parent id, and their own id.  Any commentComments
// will have a place to list comments, where it will list comments with it's id.
