import React from 'react';
import {connect} from 'react-redux';
// import AddItem from 'AddItem';
// import ItemList from 'ItemList'

export class Post extends React.Component {
  render () {

    return (
      <div className="container">
        <div className="title">
          <h1>username</h1>
          <h2>POST TITLE + CONTENT</h2>
        </div>
      </div>
    )
  }
};

export default connect(
  (state) => {
    return state;
  }
)(Post);
