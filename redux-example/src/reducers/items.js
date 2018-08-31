import {
  ADD_ITEM,
} from '../actions/actionTypes';


export function items(state = [], action) {
  switch (action.type) {
  case ADD_ITEM:

  return [
      ...state,
      action
    ];
  default:
    return state;
  }
}