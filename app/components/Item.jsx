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

  render() {
    var {text, addCommentForm, id, depth} = this.props;

    var myComponent = () => {
      if (addCommentForm) {
        return (
          <div>
            <div className="item">
              <div className="just-text">

                <div className="username">
                  <p>username</p>
                </div>
                <div className="title-content">
                  <p>{text}</p>
                </div>


                <AddSubComment parentID={id} parentDepth={depth}/>
                <div className="button-box">
                  <button className="my-green-button float-right" onClick={this.handleToggleCommentForm.bind(this)}>Add Comment</button>
                </div>
              </div>
              <SubCommentList parentID={id}/>
            </div>
          </div>
        )
      } else if (depth === 3 ){
        return (
          <div>
            <div className="item">
              <div className="just-text">

                <div className="username">
                  <p>username</p>
                </div>
                <div className="title-content">
                  <p>{text}</p>
                </div>
              </div>
            </div>
          </div>
        )
      } else {
        return (
          <div>
            <div className="item">
              <div className="just-text">

                <div className="username">
                  <p>username</p>
                </div>
                <div className="title-content">
                  <p>{text}</p>
                </div>

                <div className="button-box">
                  <button className="my-green-button float-right" onClick={this.handleToggleCommentForm.bind(this)}>Add Comment</button>
                </div>
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
