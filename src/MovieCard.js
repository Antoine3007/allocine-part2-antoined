import React from "react";

class MovieCard extends React.Component {
  render() {
    return (
      <div className="movieCard">
        <img className="cover" src={this.props.cover} />
        <div className="textBlock">
          <div className="title">{this.props.title}</div>
          <div className="description">{this.props.overview}</div>
          <div className="releaseDate">{this.props.release_date}</div>
        </div>
      </div>
    );
  }
}

export default MovieCard;
