var uuid = require('node-uuid');
import moment from 'moment';

export var itemsReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_ITEM':
    var item = {
      createdAt: moment().unix(),
      editable: false,
      id: uuid(),
      text: action.text,
    }
      return [
        ...state,
        item
      ];
    case 'DELETE_ITEM':
      for (var i = 0; i < state.length; i++) {
        if (state[i].id === action.id) {
          state.splice(i, 1);
        };
      };
      return [...state];
    case 'TOGGLE_EDITABLE':
      return state.map((item) => {
        if (item.id === action.id) {
          return {
            ...item,
            editable: !item.editable
          };
        } else {
          return item;
        }
      });
    case 'EDIT_TEXT':
      return state.map((item) => {
        if (item.id === action.id) {
          return {
            ...item,
            text: action.itemText
          };
        } else {
          return item;
        }
      })
    default:
      return state;
  };
};
