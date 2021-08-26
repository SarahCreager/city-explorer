import { Component } from 'react';
import { Container } from 'react-bootstrap';
import ListGroup from 'react-bootstrap/ListGroup';

export default class Weather extends Component {
  render () {
    return (
      this.props.weather.map(location => {
        return (
          <Container id="weatherList">
            <ListGroup>
              <ListGroup.Item>{location.description}</ListGroup.Item>
              <ListGroup.Item>{location.date}</ListGroup.Item>
            </ListGroup>
          </Container>
        );
      })
    );
  }
}

