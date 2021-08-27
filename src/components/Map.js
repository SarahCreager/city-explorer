import { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';

export default class Map extends Component {
  render () {
    return (
      <Container id="map">
        {this.props.error ? <h2>not a valid location</h2> : this.props.place_id &&
        <>
          <h2>City Name: {this.props.display_name}</h2>
          <h3>Latitude: {this.props.lat}.</h3>
          <h3>Longitude: {this.props.lon}. </h3>
          <Image src={this.props.image} alt="map" thumbnail></Image>
        </>}
      </Container>
    );
  }
}
