//imports
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Component } from 'react';
import axios from 'axios';
import Header from './components/Header';
import SearchForm from './components/SearchForm';
import Map from './components/Map';
import Weather from './components/Weather';
import Movies from './components/Movies';
import Footer from './components/Footer';

//global variables
const server_PORT = process.env.REACT_APP_BACKEND_URL;


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      exploreQuery:'',
      location:{},
      image:'',
      error:'',
      weather:[],
      weatherError:'',
      movie:[],
      movieError:'',
    };
  }

  //helper functions
  handleButtonClick = async (e) => {
    e.preventDefault();
    try {
      const API_URL = `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_CITY_KEY}&q=${this.state.exploreQuery}&format=json`;
      const response = await axios.get(API_URL);
      this.setState({location:response.data[0]});
      this.setState({image:`https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_CITY_KEY}&center=${this.state.location.lat},${this.state.location.lon}&zoom=15`});

      this.getWeather(this.state.exploreQuery);
      this.getMovie(this.state.exploreQuery);
    } catch {
      this.setState({error: true});
    }
  }

  getWeather = async (exploreQuery) => {
    const server = `${server_PORT}/weather?searchQuery=${exploreQuery}&lat=${this.state.location.lat}&lon=${this.state.location.lon}`;
    try {
      const response = await axios.get(server);
      this.setState({weather:response.data});
    } catch (error) {
      this.setState({weatherError: true});
    }
  };

  getMovie = async (exploreQuery) => {
    const server = `${server_PORT}/movie?searchQuery=${exploreQuery}`;
    try {
      const response = await axios.get(server);
      this.setState({movie:response.data});
    } catch (error) {
      this.setState({movieError: true});
    }
  };

  render() {
    return (
      <>
        <Header/>
        <SearchForm
          exploreQuery={this.state.exploreQuery}
          handleButtonClick={this.handleButtonClick}
          handleFormInput={(e) => this.setState({exploreQuery: e.target.value })}/>
        <Map
          place_id={this.state.location.place_id}
          display_name={this.state.location.display_name}
          lat={this.state.location.lat}
          lon={this.state.location.lon}
          image={this.state.image}
          error={this.state.error}/>
        <Weather weather={this.state.weather}/>
        <Movies
          movie={this.state.movie}
          error={this.state.movieError}/>
        <Footer/>
      </>
    );
  }
}

