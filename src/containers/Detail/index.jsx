import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const Detail = ({ details }) => {
    if (details.films === undefined) {
        return (
            <div>
                <h1>Please select a character from the home page</h1>
                <Link to='/'>Back to home</Link>
            </div>
        );
    }
    return (
        <div>
            <Link to='/'>Back to home</Link>
            <h2>Character Detail</h2>
            <table>
                <thead>
                    <tr>
                        <td>Attribute</td>
                        <td>Detail</td>
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
                        <td>homeworld</td>
                        <td>{details.homeworld}</td>
                    </tr>
                    <tr>
                        <td>Films</td>
                        <td>
                            <ul>
                                {details.films.map((url, i) =>
                                    <li key={`films-url-${i}`}>{url}</li>
                                )}
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <td>Species</td>
                        <td>
                            <ul>
                                {details.species.map((url, i) =>
                                    <li key={`species-url-${i}`}>{url}</li>
                                )}
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <td>Vehicles</td>
                        <td>
                            <ul>
                                {details.vehicles.map((url, i) =>
                                    <li key={`vehicles-url-${i}`}>{url}</li>
                                )}
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <td>Starships</td>
                        <td>
                            <ul>
                                {details.starships.map((url, i) =>
                                    <li key={`starships-url-${i}`}>{url}</li>
                                )}
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <td>Created at</td>
                        <td>{details.created}</td>
                    </tr>
                    <tr>
                        <td>Updated at</td>
                        <td>{details.updated}</td>
                    </tr>
                    <tr>
                        <td>URL</td>
                        <td>{details.url}</td>
                    </tr>
    
                </tbody>
            </table>
        </div>
    );
}

const mapStateToProps = (state) => ({
    details: state.details
});

export default connect(mapStateToProps)(Detail);