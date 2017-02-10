export var addItem = (text) => {
  return {
    type: 'ADD_ITEM',
    text
  };
};

export var openPostCommentForm = () => {
  return {
    type: 'OPEN_POST_COMMENT_FORM'
  }
}

export var toggleCommentForm = (id) => {
  return {
    type: 'TOGGLE_COMMENT_FORM',
    id
  }
}

export var createSubComment= (text, parentID, parentDepth) => {
  return {
    type: 'CREATE_SUB_COMMENT',
    parentID,
    text,
    parentDepth
  }
}
