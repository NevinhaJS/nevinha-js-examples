import {combineReducers} from 'redux';
import {visibilityFilter, todos} from './todos';

const todoApp = combineReducers({
  todos,
  visibilityFilter
});

export default todoApp;