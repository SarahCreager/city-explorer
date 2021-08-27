import { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';

export default class SearchForm extends Component {
  render () {
    return (
      <Container id="form">
        <FloatingLabel
          controlId="floatingInputGrid"
          label="search for a city">
          <Form.Control
            onChange={this.props.handleFormInput}
            value={this.props.exploreQuery}
            type="city"
            placeholder="search for a city"/>
        </FloatingLabel>
        <Button id="button" size="lg"
          onClick={this.props.handleButtonClick}>
          Explore!
        </Button>
      </Container>
    );
  }
}
