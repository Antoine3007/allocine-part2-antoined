import React, { Component } from "react";

import Header from "./Header";
//import Nav from "./Nav";
import axios from "axios";
import MovieCard from "./MovieCard.js";
import "./Nav.css";
import "./App.css";
import "./MovieCard.css";

class App extends Component {
  state = {
    selectedTab: "popular",
    movies: []
  };

  render() {
    console.log(this.state);
    const movieComponents = [];
    for (let i = 0; i < this.state.movies.length; i++) {
      movieComponents.push(
        <MovieCard
          cover={
            "https://image.tmdb.org/t/p/w370_and_h556_bestv2/" +
            this.state.movies[i].poster_path
          }
          title={this.state.movies[i].title}
          overview={this.state.movies[i].overview}
          release_date={this.state.movies[i].release_date}
        />
      );
    }

    return (
      <div className="container">
        <Header />
        {/* <Nav name="popularMovies" text="Popular Movies" /> */}
        <div className="nav">
          <button
            onClick={() => {
              this.setState({ selectedTab: "popular" });
              axios
                .get("https://api-allocine.herokuapp.com/api/movies/popular")
                .then(response => {
                  this.setState({ movies: response.data.results });
                });
            }}
          >
            Popular Movies
          </button>

          <button
            onClick={() => {
              this.setState({ selectedTab: "top_rated" });
              axios
                .get("https://api-allocine.herokuapp.com/api/movies/top_rated")
                .then(response => {
                  this.setState({ movies: response.data.results });
                });
            }}
          >
            Top Rated
          </button>
          <button
            onClick={() => {
              this.setState({ selectedTab: "upcoming" });
              axios
                .get("https://api-allocine.herokuapp.com/api/movies/upcoming")
                .then(response => {
                  this.setState({ movies: response.data.results });
                });
            }}
          >
            Upcoming
          </button>
        </div>
        <div className="body">
          <div className="items">{movieComponents}</div>X
        </div>
      </div>
    );
  }
  componentDidMount() {
    console.log("Le composant a été initialisé");
    axios
      .get("https://api-allocine.herokuapp.com/api/movies/popular")
      .then(response => {
        this.setState({ movies: response.data.results });
      });
  }
}

export default App;
