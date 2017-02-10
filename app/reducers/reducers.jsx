var uuid = require('node-uuid');
import moment from 'moment';

export var itemsReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_ITEM':
    var item = {
      createdAt: moment().unix(),
      addCommentForm: false,
      depth: 1,
      id: uuid(),
      text: action.text,
    }
      return [
        ...state,
        item
      ];
    case 'TOGGLE_COMMENT_FORM':
      return state.map((item) => {
        if (item.id === action.id) {
          return {
            ...item,
            addCommentForm: !item.addCommentForm
          };
        } else {
          return item;
        }
      });
    default:
      return state;
  };
};


export var addPostCommentReducer = (state = false, action) => {
  switch (action.type){
    case 'OPEN_POST_COMMENT_FORM':
      return !state;
    default:
      return state;
  }
}


export var subCommentsReducer = (state = [], action) => {
  switch (action.type) {
    case 'CREATE_SUB_COMMENT':
    var subComment = {
      createdAt: moment().unix(),
      addCommentForm: false,
      depth: action.parentDepth + 1,
      id: uuid(),
      text: action.text,
      parentID: action.parentID
    }
      return [
        ...state,
        subComment
      ];

    case 'TOGGLE_COMMENT_FORM':
      return state.map((item) => {
        if (item.id === action.id) {
          return {
            ...item,
            addCommentForm: !item.addCommentForm
          };
        } else {
          return item;
        }
      });
    default:
      return state;
  };
};
