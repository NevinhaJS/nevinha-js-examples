import {
  ADD_TODO,
  REMOVE_TODO,
  TOGGLE_TODO,
  SET_VISIBILITY_FILTER,
} from './actionTypes';

export const addTodo = text => {
  return {
    text,
    type: ADD_TODO
  };
};

export const toggleTodo = index => {
  return {
    index,
    type: TOGGLE_TODO
  };
};

export const removeTodo = id => {
  return {
    id,
    type: REMOVE_TODO
  };
};

export const setVisibilityFilter = filter => {
  return {
    filter,
    type: SET_VISIBILITY_FILTER
  };
};