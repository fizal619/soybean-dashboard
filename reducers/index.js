// reducers/index.js
import {POSITION, INCREMENT} from '../actions';

const initialState = {
	position: [10,-20]
}

export default (state = initialState, action) => {
  switch (action.type) {
    case POSITION:
    	return Object.assign({}, state, {
    		position: action.position
    	})
    default:
      return state;
  }
};
