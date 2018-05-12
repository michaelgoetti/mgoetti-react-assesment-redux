import { combineReducers } from 'redux';
import { ADD_ITEM, REMOVE_ITEM, COMPLETE_ITEM } from '../actions';

function listReducer(state = [], action) {
	switch(action.type) {
		case ADD_ITEM:
			state = [...state, action.listItem];
			return state;
		case REMOVE_ITEM:
			state = state.filter(listItem => listItem['id'] !== action.listItem['id']);
			return state;
		case COMPLETE_ITEM:
			return Object.assign(
				[...state], 
				{[action.index]:
					Object.assign({}, state[action.index], {cplt: true})}
			)
		default:
			return state;
	}
}

const rootReducer = combineReducers({
	listReducer,
});

export default rootReducer;
