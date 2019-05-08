import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { Link as RLink } from 'react-router-dom';
import fetchData from '../../utils/fetchData';

const Link = styled(RLink)`
    &, &:visited {
        color: #a1a3cc;
    }
`;

const Table = styled.table`
    margin: 1em;
    border-collapse: collapse;
    box-shadow: 0px 0px 15px -3px rgba(0,0,0,0.5);

    & td, & th {
        font-family: Karla;
    }
    & thead th, & tbody td {
        padding: .5em 1em;
        
    }
    & ul {
        list-style: none;
    }

    & > thead {
        background: #a1a3cc;
    }

    & > tbody > tr:nth-child(odd) {
        background: #e5e5e5;
    }

    & a, & a:visited {
        color: black;
    }
`;

class Detail extends React.Component {
    state = {
        loading: true,
        homeworld: {},
        films: [],
        species: [],
        vehicles: [],
        starships: []
    }

    transformLinks = async () => {
        const { details } = this.props;

        let res, homeworld, films, species, vehicles, starships;

        res = await fetchData(details.homeworld);
        homeworld = {
            label: res.name,
            url: res.url,
        };

        films = await Promise.all(details.films.map(async filmUrl => {
            res = await fetchData(filmUrl);

            return {
                label: res.title,
                url: res.url
            };
        }));

        species = await Promise.all(details.species.map(async speciesUrl => {
            res = await fetchData(speciesUrl);

            return {
                label: res.name,
                url: res.url
            };
        }));

        vehicles = await Promise.all(details.vehicles.map(async vehicleUrl => {
            res = await fetchData(vehicleUrl);

            return {
                label: res.name,
                url: res.url
            };
        }));

        starships = await Promise.all(details.starships.map(async starshipUrl => {
            res = await fetchData(starshipUrl);

            return {
                label: res.name,
                url: res.url
            };
        }));

        return {
            homeworld,
            films,
            vehicles,
            species,
            starships
        };
    }

    async componentDidMount() {
        const { details } = this.props;
        if (details.films !== undefined) {
            const newState = await this.transformLinks();
            console.log(newState);
    
            this.setState({
                ...newState,
                loading: false
            });
        }
    }

    render() {
        const { details } = this.props;
        const { loading, homeworld, vehicles, starships, species, films } = this.state;

        if (details.films === undefined) {
            return (
                <div>
                    <h1>Please select a character from the home page</h1>
                    <Link to='/'>&#60;   Back to home</Link>
                </div>
            );
        }
        return (
            <div>
                <h2>Character Detail</h2>
                <Link to='/'>&#60;   Back to home</Link>
                {loading && <p>Loading links, please wait...</p>}
                <Table>
                    <thead>
                        <tr>
                            <th>Attribute</th>
                            <th>Detail</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Name</td>
                            <td>{details.name}</td>
                        </tr>
                        <tr>
                            <td>Height</td>
                            <td>{details.height}</td>
                        </tr>
                        <tr>
                            <td>Mass</td>
                            <td>{details.mass}</td>
                        </tr>
                        <tr>
                            <td>Hair color</td>
                            <td>{details.hair_color}</td>
                        </tr>
                        <tr>
                            <td>Skin color</td>
                            <td>{details.skin_color}</td>
                        </tr>
                        <tr>
                            <td>Eye color</td>
                            <td>{details.eye_color}</td>
                        </tr>
                        <tr>
                            <td>Birth year</td>
                            <td>{details.birth_year}</td>
                        </tr>
                        <tr>
                            <td>Gender</td>
                            <td>{details.gender}</td>
                        </tr>
                        <tr>
                            <td>Homeworld</td>
                            <td>{
                                loading ?
                                details.homeworld :
                                <a href={homeworld.url} target="_blank" rel="noopener noreferrer">{homeworld.label}</a>
                            }</td>
                        </tr>
                        <tr>
                            <td>Films</td>
                            <td>
                                <ul>
                                    {
                                        loading ?
                                        details.films.map((url, i) =>
                                            <li key={`films-url-${i}`}>{url}</li>
                                        ) : 
                                        films.map((e, i) => 
                                            <li key={`films-url-${i}`}><a href={e.url} target="_blank" rel="noopener noreferrer">{e.label}</a></li>
                                        )
                                    }
                                </ul>
                            </td>
                        </tr>
                        <tr>
                            <td>Species</td>
                            <td>
                                <ul>
                                    {
                                        loading ?
                                        details.species.map((url, i) =>
                                            <li key={`species-url-${i}`}>{url}</li>
                                        ) :
                                        species.map((e, i) =>
                                            <li key={`species-url-${i}`}><a href={e.url} target="_blank" rel="noopener noreferrer">{e.label}</a></li>
                                        )
                                    }
                                </ul>
                            </td>
                        </tr>
                        <tr>
                            <td>Vehicles</td>
                            <td>
                                <ul>
                                    {
                                        loading ?
                                        details.vehicles.map((url, i) =>
                                            <li key={`vehicles-url-${i}`}>{url}</li>
                                        ) :
                                        vehicles.map((e, i) =>
                                            <li key={`vehicles-url-${i}`}><a href={e.url} target="_blank" rel="noopener noreferrer">{e.label}</a></li>
                                        )
                                    }
                                </ul>
                            </td>
                        </tr>
                        <tr>
                            <td>Starships</td>
                            <td>
                                <ul>
                                    {
                                        loading ?
                                        details.starships.map((url, i) =>
                                            <li key={`starships-url-${i}`}>{url}</li>
                                        ) :
                                        starships.map((e, i) =>
                                            <li key={`starships-url-${i}`}><a href={e.url} target="_blank" rel="noopener noreferrer">{e.label}</a></li>
                                        )
                                    }
                                </ul>
                            </td>
                        </tr>
                        <tr>
                            <td>Created at</td>
                            <td>{details.created}</td>
                        </tr>
                        <tr>
                            <td>Edited at</td>
                            <td>{details.edited}</td>
                        </tr>
                        <tr>
                            <td>URL</td>
                            <td><a href={details.url} rel="noopener noreferrer" target="_blank">{details.url}</a></td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    details: state.details
});

export default connect(mapStateToProps)(Detail);