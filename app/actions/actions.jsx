export var addItem = (text) => {
  return {
    type: 'ADD_ITEM',
    text
  };
};

export var deleteItem = (id) => {
  return {
    type: 'DELETE_ITEM',
    id
  }
}


export var toggleEditable = (id) => {
  return {
    type: 'TOGGLE_EDITABLE',
    id
  }
}

export var editText = (id, itemText) => {
  return {
    type: 'EDIT_TEXT',
    id,
    itemText
  }
}

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

export var createSubComment= (text, parentID) => {
  return {
    type: 'CREATE_SUB_COMMENT',
    parentID,
    text
  }
}
