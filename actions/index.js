// actions/index.js
// Namespace actions
// export const INCREMENT = 'counter/INCREMENT';
// export const DECREMENT = 'counter/DECREMENT';

export const POSITION = 'map/POSITION'

export const setPosition =(position, dispatch)=>{
	return {
		type: POSITION,
		position
	}
}

