import React from 'react';
import PropTypes from 'prop-types';
import { Link as RLink } from 'react-router-dom';
import styled from 'styled-components';
import dummy from './dummyData';

const Link = styled(RLink)`
    text-decoration: none;
    font-family: Karla;
    color: black;

    &:visited, &:hovered {
        color: black;
    }
`;

const List = styled.ul`
    list-style: none;
    padding: .5em;
`;

const ListItem = styled.li`
    padding: .5em;
    margin: 1em 0;
    border: 1px solid black;

    &:hover {
        background: lightgrey;
    }
`;

const CharacterList = ({ characters = dummy }) => (
    <List>
        {characters.map(c => 
            <ListItem><Link to={`/detail?char=${c}`}>c</Link></ListItem>    
        )}
    </List>
);

CharacterList.propTypes = {
    characters: PropTypes.array
};

export default CharacterList;