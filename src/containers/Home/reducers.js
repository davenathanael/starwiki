import {
    ADD_CHARACTER_DETAILS,
    ADD_CHARACTERS
} from './constants';

export const details = (state = {}, action) => {
    switch (action.type) {
        case ADD_CHARACTER_DETAILS:
            return Object.assign({}, state, action.data);
        default:
            return state;
    }
};

const initialState = {
    characters: [],
    activePage: 1,
    totalCount: 0
}
export const characters = (state = initialState, action) => {
    switch (action.type) {
        case ADD_CHARACTERS:
            return Object.assign({}, state, {
                characters: action.characters,
                activePage: action.activePage,
                totalCount: action.totalCount
            });
        default:
            return state;
    }
}