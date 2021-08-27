import { Component } from 'react';
import { Container } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';


export default class Movie extends Component {
  render () {
    return (
      <Container>
        <Card id="movieCard">
          <Card.Body>
            <Card.Title>{this.props.title}</Card.Title>
            <Card.Text>{this.props.overview}</Card.Text>
            <Card.Text>{this.props.averageVotes}</Card.Text>
            <Card.Text>{this.props.totalVotes}</Card.Text>
            <Card.Text>{this.props.popularity}</Card.Text>
            <Card.Text>{this.props.releaseOn}</Card.Text>
          </Card.Body>
        </Card>
      </Container>
    );
  }
}
