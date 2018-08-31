import {
  ADD_ITEM,
} from './actionTypes';

export const addItem = item => {
  return {
    ...item,
    type: ADD_ITEM
  };
};