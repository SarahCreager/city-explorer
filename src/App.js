import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import { Component } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';


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
        <input onChange={(e) => this.setState({ exploreQuery: e.target.value })} value={this.state.exploreQuery} placeholder="search for a city"></input>
        <Button onClick={this.handleButtonClick} variant="primary" size="lg">Explore!</Button>{' '}
        {this.state.error ? <h2>not a valid location</h2>
          : this.state.location.place_id &&
          <>
            <h2>The city is: {this.state.location.display_name} The latitude is: {this.state.location.lat} The latitude is: {this.state.location.lon} </h2>
            <img src={this.state.image} alt="map"></img>
          </>}
      </>
    );
  }
}



