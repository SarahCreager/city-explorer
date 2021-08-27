import { Component } from 'react';
import { Container } from 'react-bootstrap';
import ListGroup from 'react-bootstrap/ListGroup';

export default class WeatherDay extends Component {
  render () {
    return (
      <Container id="weatherList">
        <ListGroup>
          <ListGroup.Item>{this.props.description}</ListGroup.Item>
          <ListGroup.Item>{this.props.date}</ListGroup.Item>
        </ListGroup>
      </Container>
    );
  }
}
