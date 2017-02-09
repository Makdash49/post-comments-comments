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
