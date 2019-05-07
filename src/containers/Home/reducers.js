import { ADD_CHARACTER_DETAILS } from './constants';

const reducer = (state = {}, action) => {
    switch (action.type) {
        case ADD_CHARACTER_DETAILS:
            return Object.assign({}, state, action.data);
        default:
            return state;
    }
};

export default reducer;