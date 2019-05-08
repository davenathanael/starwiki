import fetchData from '../../utils/fetchData';

import {
    ADD_CHARACTER_DETAILS,
    ADD_CHARACTERS,
} from './constants';
import config from '../../config';

export const addCharacterDetail = (data) => ({
    type: ADD_CHARACTER_DETAILS,
    data
});

export const addCharacters = (characters, activePage, totalCount) => ({
    type: ADD_CHARACTERS,
    characters,
    activePage,
    totalCount
});

export const fetchCharacters = (page) => async (dispatch) => {
    const res = await fetchData(`${config.apiURL}/people/?page=${page}`);
    const characters = res.results;
    const totalCount = res.count;
    return dispatch(addCharacters(characters, page, totalCount));
};