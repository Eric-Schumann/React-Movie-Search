import React from 'react';
import Movie from './Movie';
import _ from 'lodash';

const MovieListContainer = ({ movies }) => {

    let movieList = _.map(movies, (movie) => (
        <Movie key={ movie.imdbId } movie={ movie }/>
    ));

    return(
        <div id="movie-container">
            { movieList }
        </div>
    )

}

export default MovieListContainer;