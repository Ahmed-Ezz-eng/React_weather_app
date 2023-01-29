import React, { Component } from 'react';
import './App.css';
import Form from './components/Form';
import Weather from './components/Weather';

export class App extends Component {
  constructor() {
    super();
    this.state = {
      temperature: '',
      city: '',
      country: '',
      humidity: '',
      description: '',
      weather: '',
      error: '',
      isLoading: false,
    };
  }

  getWeather = async (e) => {
    e.preventDefault();

    const city = e.target.elements.city.value;
    
    this.setState({
      isLoading: true,
    });
    try {

      const api = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=e36ed364400282e43250b6c4c0274d44`
      );

      const data = await api.json();
      if (city) {
        this.setState({
          temperature: data.main.temp,
          city: data.name,
          country: data.sys.country,
          humidity: data.main.humidity,
          description: data.weather[0].description,
          weather: data.weather[0].main,
          error: '',
          isLoading: false,
        });
        

      } else {
        this.setState({
          temperature: '',
          city: '',
          country: '',
          humidity: '',
          description: '',
          error: 'Please fill inputs at first',
          isLoading: false,
        });
      }
    } catch (error) {
      this.setState({
        error: error.message,
      });
    }
  };

  render() {
    return (
      <div className="wrapper">
        <div className="form-container">
          <Form getWeather={this.getWeather} />
          <Weather weatherData={this.state} />
        </div>
      </div>
    );
  }
}

export default App;
