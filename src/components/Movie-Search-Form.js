import React, { Component } from 'react';

class MovieSearchForm extends Component {

    search(e) {
        e.preventDefault();
        let query = this.refs.query;
        this.props.updateList(query.value);        
        query.value = '';
        query.focus();
    }

    render() {
        return(
            <form id="movie-search-form" 
                onSubmit={(e) => { this.search(e); }} 
                autocomplete="off"
            >
                <input ref="query" type="text" />
                <button type="submit">Search</button>
            </form>
        )
    }
}

export default MovieSearchForm;