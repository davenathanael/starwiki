import React from 'react';
import styled from 'styled-components';
import Container from '../Container';

const Wrapper = styled.div`
    margin: 1em 0;
    padding-bottom: 1em;
    border-bottom: 1px solid black;

    & a, & a:visited {
        color: #a1a3cc;
    }
`;

const Layout = ({ children }) => (
    <Container>
        <Wrapper>
            <h1>StarWiki</h1>
            <p><i>A StarWars characters wiki powered by <a href="https://swapi.co/" rel="noopener noreferrer" target="_blank">Swapi</a></i></p>
            <p>Made by Dave. <a href="https://github.com/davenathanael/starwiki" rel="noopener noreferrer" target="_blank">Github</a></p>
        </Wrapper>

        {children}
    </Container>
);

export default Layout;