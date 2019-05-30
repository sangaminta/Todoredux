import { createStore } from 'redux';
import todoApp from '../reducer/index';

const store = createStore(todoApp)
export default store