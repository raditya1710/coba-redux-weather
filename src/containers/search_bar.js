import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';

class SearchBar extends Component{
  constructor(props){
    super(props);

    this.state = {term : ''};

    this.onInputChange = this.onInputChange.bind(this);
    //need to bind because you callback a function to input

    //also same for onFormSubmit
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange(e){
    this.setState({term: e.target.value});
  }

  onFormSubmit(e){
    e.preventDefault(); //tell the browser not to submit the form

    // We need to go and fetch weather data
    this.props.fetchWeather(this.state.term);
    this.setState({term : ''});
  }
  render(){
    return(
      <form onSubmit={this.onFormSubmit} className="input-group">
        <input
          placeholder="Get a 5-day forecast in your favorite cities"
          className="form-control"
          value={this.state.term}
          onChange={this.onInputChange}

          />
        <span className="input-group-button">
          <button type="submit" className="btn btn-secondary">Submit</button>
        </span>
      </form>
    );
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ fetchWeather }, dispatch);
}


export default connect(null, mapDispatchToProps)(SearchBar);
