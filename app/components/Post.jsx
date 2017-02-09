import React from 'react';
import {connect} from 'react-redux';
// import AddItem from 'AddItem';
// import ItemList from 'ItemList'

export class Post extends React.Component {

  handleAddComment (e) {
    e.preventDefault();
    // var {dispatch, id} = this.props;
    // dispatch(actions.deleteItem(id));
  }

  render () {

    return (
      <div className="container">
        <div className="title">
          <h1>username</h1>
          <h2>POST TITLE + CONTENT</h2>
        </div>
        <button className="my-green-button float-right" onClick={this.handleAddComment.bind(this)}>Add Comment</button>
      </div>
    )
  }
};

export default connect(
  (state) => {
    return state;
  }
)(Post);
