import React from 'react';
import {connect} from 'react-redux';
import Item from 'Item';
// import SubComment from 'SubComment';

export class SubCommentList extends React.Component {
  render () {
    var {subComments, parentID} = this.props;

    //console.log('SUBCOMMENTS: ', subComments);
    //console.log('parentID:', parentID);

    // //console.log('ITEMS:', items);
    //console.log('THIS.PROPS: ', this.props);

    var myComponent = () => {
      var currentSubComments = [];

      for (var i = 0; i < subComments.length; i++){
        if (subComments[i].parentID === parentID){
          currentSubComments.push(subComments[i]);
        }
      }

      //console.log('CURRENTSUBCOMMENTS: ', currentSubComments);

      return currentSubComments.map((item) => {
        return (
          <Item key={item.id} {...item}/>
        );
      });
    };

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
)(SubCommentList);
