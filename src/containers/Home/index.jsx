import React from 'react';
import CharacterList from '../../components/CharacterList';
import Pagination from '../../components/Pagination';
const pages = [
    {
        pageNumber: 1,
        action: () => console.log("paginated to page 1")
    },
    {
        pageNumber: 2,
        action: () => console.log("paginated to page 2")
    },
    {
        pageNumber: 3,
        action: () => console.log("paginated to page 3")
    },
    {
        pageNumber: 4,
        action: () => console.log("paginated to page 4")
    },
    {
        pageNumber: 5,
        action: () => console.log("paginated to page 5")
    },
];

const Home = () => (
    <div>
        <h2>Homepage</h2>
        <CharacterList />
        <Pagination pages={pages} active={1} />
    </div>
);

export default Home;