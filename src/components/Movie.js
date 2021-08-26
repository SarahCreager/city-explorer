import { Component } from 'react';
import Card from 'react-bootstrap/Card';


export default class Movie extends Component {
  render () {
    return (
      this.props.movie.map(location => {
        return (
          <Card id="movieCard">
            <Card.Body>
              <Card.Title>{location.title}</Card.Title>
              <Card.Text>{location.overview}</Card.Text>
              <Card.Text>{location.averageVotes}</Card.Text>
              <Card.Text>{location.totalVotes}</Card.Text>
              <Card.Text>{location.popularity}</Card.Text>
              <Card.Text>{location.releaseOn}</Card.Text>
            </Card.Body>
          </Card>
        );
      })
    );
  }
}
