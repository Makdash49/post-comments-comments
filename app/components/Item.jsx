import React from 'react';
import {connect} from 'react-redux';
import moment from 'moment';
import * as actions from 'actions';
import AddSubComment from 'AddSubComment';
import SubCommentList from 'SubCommentList';


export class Item extends React.Component {

  handleToggleCommentForm (e) {
    e.preventDefault();
    var {dispatch, id} = this.props;
    console.log('ID: ', id);
    dispatch(actions.toggleCommentForm(id));
  }

  // handleEdit (e) {
  //   e.preventDefault();
  //   var {dispatch, id} = this.props;
  //   dispatch(actions.toggleEditable(id));
  // }

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
    var {text, addCommentForm, id} = this.props;

    var myComponent = () => {
      if (addCommentForm) {
        return (
          <div>
            <div className="item">
              <div className="content">
                <p>username</p>
                <p>{text}</p>
              </div>
              <SubCommentList parentID={id}/>
              <AddSubComment parentID={id}/>
              <div className="deleteBox">
                <button className="my-green-button float-right" onClick={this.handleToggleCommentForm.bind(this)}>Add</button>
              </div>
            </div>
          </div>
        )
      } else {
        return (
          <div>
            <div className="item">
              <div className="content">
                <p>username</p>
                <p>{text}</p>
              </div>

              <SubCommentList parentID={id}/>
              <div className="deleteBox">
                <button className="my-green-button float-right" onClick={this.handleToggleCommentForm.bind(this)}>Add</button>
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

export default connect()(Item)
