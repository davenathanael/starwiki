import React from 'react';

import CharacterList from '../../components/CharacterList';
import Pagination from '../../components/Pagination';

import {
    addCharacterDetail as addCharacterDetailAction,
    fetchCharacters as fetchCharactersAction
} from './actions';
import { connect } from 'react-redux';


class Home extends React.Component {
    componentDidMount() {
        const { characters, activePage } = this.props;
        if (characters.length === 0) {
            this.props.fetchCharacters(activePage);
        }
    }

    render() {
        const { characters, activePage, totalCount, addCharacterDetail, fetchCharacters } = this.props;

        if (characters === undefined)
            return <h1>Loading...</h1>;

        let pages = [];

        for (let i = 1; i <= Math.ceil(totalCount / 10); i++) {
            pages.push({
                pageNumber: i,
                action: () => fetchCharacters(i),
            });
        }

        return (
            <div>
                <h2>Homepage</h2>
                <p>Select a character!</p>
                <CharacterList characters={characters} action={(character) => addCharacterDetail(character)} />
                <Pagination pages={pages} active={activePage} />
            </div>
        );

    }
}

const mapStateToProps = (state) => ({
    characters: state.characters.characters,
    activePage: state.characters.activePage,
    totalCount: state.characters.totalCount
});

const mapDispatchToProps = (dispatch) => ({
    addCharacterDetail: (details) => dispatch(addCharacterDetailAction(details)),
    fetchCharacters: (page) => dispatch(fetchCharactersAction(page))
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);