import React from 'react';
import Movie from './Movie';
import _ from 'lodash';

const MovieListContainer = ({ movies, alertMovie }) => {

    let movieList = _.map(movies, (movie, index) => (
        <Movie key={ movie.imdbId } 
            movie={ movie } 
            index={ index }
            alertMovie={ alertMovie }
        />
    ));

    return(
        <div id="movie-container">
            { movieList }
        </div>
    )

}

export default MovieListContainer;