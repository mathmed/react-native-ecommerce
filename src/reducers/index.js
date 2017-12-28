import { combineReducers } from 'redux';
import autenticacaoReducers from './autenticacaoReducers.js';
import ingredientesReducers from './ingredientesReducers.js';


export default combineReducers({
	autenticacaoReducers,
	ingredientesReducers

});
