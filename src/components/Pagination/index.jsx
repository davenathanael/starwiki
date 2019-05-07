import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Page = styled.button`
    margin: 1em;
    padding: 1em;
    outline: none;
    background: ${props => props.active ? 'lightgrey' : 'none'};
    border: 1px solid black;

    &:hover {
        cursor: pointer;
    }
`;

const Pagination = ({ pages, active }) => (
    <Wrapper>
        {pages.map((p, i) => 
            <Page key={`page-${i+1}`} onClick={() => p.action()} type='button' active={p.pageNumber === active}>{p.pageNumber}</Page>
        )}
    </Wrapper>
);

Pagination.propTypes = {
    pages: PropTypes.arrayOf(PropTypes.shape({
        pageNumber: PropTypes.number.isRequired,
        action: PropTypes.func,
    })).isRequired,
    active: PropTypes.number.isRequired,
};

export default Pagination;