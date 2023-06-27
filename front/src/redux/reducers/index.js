import { combineReducers } from 'redux';
import Auth from './auth';
import Alert from './alert';

const rootReducer = combineReducers({
  Auth,
  Alert
  // Agrega aquí otros reducers si los tienes
});

export default rootReducer;
