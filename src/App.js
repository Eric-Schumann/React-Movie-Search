import React, { Component } from 'react';
import MovieListContainer from './components/Movie-List-Container.js';
import MovieSearchForm from './components/Movie-Search-Form.js';
import Request from 'superagent';
import './App.css';

class App extends Component {

  constructor() {
    super();
    this.state = {
      movies: [],
      searchTerm: ''
    }
  }

  componentWillMount() {
    this.updateList('star');
  }

  updateList(newTerm) {
    let url= `http://www.omdbapi.com?apikey=${ 'df768b1c' }&s=${ newTerm }&y=&r=json&plot=short`;
    Request.get(url).then((response) => {
      this.setState({ movies: response.body.Search });
    })
  }

  alertMovie(index) {
    let movieList = this.state.movies;
    let movie = movieList[index];
    alert(`Title: ${ movie.Title }\nYear: ${ movie.Year }`);
  }

  render() {
    return (
      <div className="App">
        <h1>React Movie Search</h1>
        <MovieSearchForm updateList={ this.updateList.bind(this) }/>
        <div className="container">
          <MovieListContainer movies={ this.state.movies } 
            alertMovie={ this.alertMovie.bind(this) }
          />
        </div>
      </div>
    );
  }
}

export default App;
