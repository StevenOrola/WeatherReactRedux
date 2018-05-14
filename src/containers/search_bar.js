import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';

class SearchBar extends Component {
	constructor(props) {
		super(props);

		this.state = { term: '' };

		this.onInputChange = this.onInputChange.bind(this);
	}

	onInputChange(event) {
		this.setState( { term: event.target.value});
	}

	onFormSubmit(event) {
		event.preventDefault();
	}

	render() {
		return (
			<form className="input-group" onSubmit={this.onFormSubmit}>
				<input 
					placeholder="Type a city and get a 5-day forecast"
					className="form-control"
					value={this.state.term}
					onChange={this.onInputChange} 
				/>
				<span className="input-group-btn">
					<button type="submit" className="btn btn-secondary">
						Submit
					</button>
				</span>
			</form>
		)
	}
}

function mapDispatchToProps(dispatch) {
	bindActionCreators( {fetchWeather}, dispatch);
}

export default SearchBar;