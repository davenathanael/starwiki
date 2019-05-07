import React from 'react';
import Container from '../Container';


const Layout = ({ children }) => (
    <Container>
        <h1>StarWiki</h1>
        <p><i>A StarWars characters wiki powered by Swapi</i></p>

        {children}
    </Container>
);

export default Layout;