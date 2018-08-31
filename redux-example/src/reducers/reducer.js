import {combineReducers} from 'redux';
import {items} from './items';

const todoApp = combineReducers({
  items
});

export default todoApp;