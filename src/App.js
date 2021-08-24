import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Component } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Image from 'react-bootstrap/Image';
import Navbar from 'react-bootstrap/Navbar';



export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      exploreQuery:'',
      location:{},
      image:'',
      error:'',
    };
  }

  handleButtonClick = async () => {
    try {
      const API_URL = `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_CITY_KEY}&q=${this.state.exploreQuery}&format=json`;
      const response = await axios.get(API_URL);
      console.log(response.data);
      this.setState({location:response.data[0]});
      this.setState({image:`https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_CITY_KEY}&center=${this.state.location.lat},${this.state.location.lon}&zoom=15`});
    } catch {
      this.setState({error: true});
    }
  }

  render() {
    return (
      <>
        <Container id="navBar">
          <Navbar>
            <Navbar.Brand href="#home" id="title">City Explorer</Navbar.Brand>
          </Navbar>
        </Container>

        <Container id="form">
          <FloatingLabel controlId="floatingInputGrid" label="search for a city">
            <Form.Control id="formInput" onChange={(e) => this.setState({ exploreQuery: e.target.value })} value={this.state.exploreQuery} type="city" placeholder="search for a city" />
          </FloatingLabel>
          <Button onClick={this.handleButtonClick} id="button" size="lg">Explore!</Button>
        </Container>

        {' '}
        <Container id="map">
          {this.state.error ? <h2>not a valid location</h2>
            : this.state.location.place_id &&
          <>
            <h2>City Name: {this.state.location.display_name}</h2>
            <h3>Latitude: {this.state.location.lat}.</h3>
            <h3>Longitude: {this.state.location.lon}. </h3>
            <Image src={this.state.image} alt="map" thumbnail></Image>
          </>}
        </Container>
        <footer>By Sarah Creager</footer>
      </>
    );
  }
}





{/* <input onChange={(e) => this.setState({ exploreQuery: e.target.value })} value={this.state.exploreQuery} placeholder="search for a city"></input> */}
