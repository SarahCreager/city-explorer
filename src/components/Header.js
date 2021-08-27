import { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';


export default class Header extends Component {
  render () {
    return (
      <Container id="navBar">
        <Navbar>
          <Navbar.Brand href="#home" id="title">City Explorer</Navbar.Brand>
        </Navbar>
      </Container>
    );
  }
}
