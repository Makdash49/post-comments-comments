import React from 'react';
import {connect} from 'react-redux';
import AddItem from 'AddItem';
import ItemList from 'ItemList'

export class ListApp extends React.Component {
  render () {

    return (
      <div className="container">
        <div className="title">
          <h1>CRUD APP</h1>
        </div>
        <div className="form-list">
          <AddItem/>
          <ItemList/>
        </div>
      </div>
    )
  }
};

export default connect(
  (state) => {
    return state;
  }
)(ListApp);
