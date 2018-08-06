import {combineReducers} from 'redux';
import {visibilityFilter, todos} from './todos';

const todoApp = combineReducers({
  visibilityFilter,
  todos
});

export default todoApp;