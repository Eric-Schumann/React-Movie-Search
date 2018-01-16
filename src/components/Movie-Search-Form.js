import React, { Component } from 'react';

class MovieSearchForm extends Component {

    search(e) {
        e.preventDefault();
        let searchTerm = e.target.title.value;
        e.target.title.value = '';
        e.target.title.focus();
        this.props.updateList(searchTerm);
    }

    render() {
        return(
            <form id="movie-search-form" 
                onSubmit={(e) => { this.search(e); }} 
                autocomplete="off"
            >
                <input name="title" type="text" />
                <button type="submit">Search</button>
            </form>
        )
    }
}

export default MovieSearchForm;