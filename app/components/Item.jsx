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

  // handleUpdateSubmit (e) {
  //   e.preventDefault();
  //   var {dispatch, id} = this.props
  //
  //   var itemText = this.refs.itemText.value;
  //
  //   if (itemText.length > 0) {
  //     // dispatch(actions.editText(id, itemText));
  //     // dispatch(actions.toggleEditable(id));
  //     dispatch(actions.toggleCommentForm(id));
  //
  //   } else {
  //     this.refs.itemText.focus();
  //   }
  // }

  render() {
    var {text, addCommentForm, id} = this.props;

    var myComponent = () => {
      if (addCommentForm) {
        return (
          <div>
            <div className="item">
              <div className="just-text">
                <p>username</p>
                <p>{text}</p>
                <AddSubComment parentID={id}/>
                <button className="my-green-button float-right" onClick={this.handleToggleCommentForm.bind(this)}>Add</button>
              </div>
              <SubCommentList parentID={id}/>
            </div>
          </div>
        )
      } else {
        return (
          <div>
            <div className="item">
              <div className="just-text">
                <p>username</p>
                <p>{text}</p>
                <button className="my-green-button float-right" onClick={this.handleToggleCommentForm.bind(this)}>Add</button>
              </div>
              <SubCommentList parentID={id}/>
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
