import { Component } from 'react';
import WeatherDay from './WeatherDay';

export default class Weather extends Component {
  render () {
    return (
      this.props.weather.map((location, idx) => {
        return (
          <WeatherDay
            description={location.description}
            date={location.date}
            key={idx}>
          </WeatherDay>
        );
      })
    );
  }
}

