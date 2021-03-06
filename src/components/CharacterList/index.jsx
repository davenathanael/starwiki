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
    // border: 1px solid black;
    box-shadow: 0px 0px 15px -3px rgba(0,0,0,0.5);
    transition: background .3s ease;

    &:hover {
        background: #e5e5e5;
    }
`;

const CharacterList = ({ characters = dummy, action }) => (
    <List>
        {characters.map((c,i) => 
            <ListItem key={`listitem-${i}`}><Link to={`/detail?char=${c.name}`} onClick={() => action(c)}>{c.name}</Link></ListItem>    
        )}
    </List>
);

CharacterList.propTypes = {
    characters: PropTypes.array
};

export default CharacterList;