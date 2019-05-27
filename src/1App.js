import React, { Component } from 'react';
import './App.css';

class App extends Component {
	state = {
		title: 'Welcome Home',
		button_title: 'Change Title',
		name: 'Initial Name',
		checked: false
	};

	onSubmit = (event) => {
		event.preventDefault();
		// console.log(this.input.value);
	};

	changeTitle = () => {
		this.setState({
			title: 'Welcome to Siam Computing',
			button_title: 'Title Changed'
		});
	};

	updateText = (event) => {
		this.setState({
			name: event.target.value
		});
	};

	updateChecked = () => {
		this.setState({
			checked: !this.state.checked
		});
	};

	render() {
		return (
			<div className="body">
				<h1>{this.state.title}</h1>
				<button className="title" onClick={this.changeTitle}>
					{this.state.button_title}
				</button>
				<form onSubmit={this.onSubmit} className="form_sub">
					<input onChange={this.onChange} ref={(input) => (this.input = input)} />
				</form>

				<div className="form_2">
					<input onChange={this.updateText} type="text" value={this.state.name} />

					<input type="checkbox" checked={this.state.checked} onChange={this.updateChecked} />
				</div>
			</div>
		);
	}
}

export default App;
