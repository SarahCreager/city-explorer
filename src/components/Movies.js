import { Component } from 'react';
import Movie from './Movie';


export default class Movies extends Component {
  render () {
    return (
      this.props.movie.map((location, idx) => {
        return (
          <Movie
            title={location.title}
            overview={location.overview}
            averageVotes={location.averageVotes}
            totalVotes={location.totalVotes}
            popularity={location.popularity}
            releaseOn={location.releaseOn}
            key={idx}>
          </Movie>
        );
      })
    );
  }
}
