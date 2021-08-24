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
    };
  }
 
  handleButtonClick = async () => {
    const API_URL = `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_CITY_KEY}&q=${this.state.exploreQuery}&format=json`;
    const response = await axios.get(API_URL);
    console.log(response.data);
    this.setState({location:response.data[0]});
  }
  
  render() {
    return (
      <>
        <input onChange={(e) => this.setState({ exploreQuery: e.target.value })} value={this.state.exploreQuery} placeholder="search for a city"></input>
        <Button onClick={this.handleButtonClick} variant="primary" size="lg">Explore!</Button>{' '}
        {this.state.location.place_id &&
          <h2>The city is: {this.state.location.display_name} The latitude is: {this.state.location.lat} The latitude is: {this.state.location.lon} </h2>
        }
      </>
    );
  }
}



