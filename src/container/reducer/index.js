import { combineReducers } from 'redux';
import {reducerAdd} from './reducerAdd';

const todoApp = combineReducers({reducerAdd}) 

export default todoApp;