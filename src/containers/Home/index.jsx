import React from 'react';
import axios from 'axios';

import CharacterList from '../../components/CharacterList';
import Pagination from '../../components/Pagination';

import { addCharacterDetail as addCharacterDetailAction } from './actions';
import { connect } from 'react-redux';

const API_URL = 'https://swapi.co/api';

class Home extends React.Component {
    state = {
        activePage: 1,
        apiResult: {},
        loading: true
    }

    paginateTo = async (page) => {
        const apiResult = await this.fetchCharacters(page);
        this.setState({
            activePage: page,
            apiResult
        })
    }

    async componentDidMount() {
        const apiResult = await this.fetchCharacters(1);
        this.setState({
            apiResult,
            loading: false
        });
    }

    fetchCharacters = async (page) => {
        const res = await axios.get(`${API_URL}/people/?page=${page}`);
        return res.data;
    }


    render() {
        const { apiResult, activePage, loading } = this.state;
        if (loading) return <p>Loading...</p>;
        const { results } = apiResult;

        let pages = [];

        for (let i = 1; i <= Math.ceil(apiResult.count / 10); i++) {
            pages.push({
                pageNumber: i,
                action: () => this.paginateTo(i),
            });
        }

        const { addCharacterDetail } = this.props;

        return (
            <div>
                <h2>Homepage</h2>
                <CharacterList characters={results} action={(character) => addCharacterDetail(character)} />
                <Pagination pages={pages} active={activePage} />
            </div>
        );

    }
}

const mapDispatchToProps = (dispatch) => ({
    addCharacterDetail: (details) => dispatch(addCharacterDetailAction(details))
});

export default connect(null, mapDispatchToProps)(Home);