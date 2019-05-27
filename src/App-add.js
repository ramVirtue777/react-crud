import React, { Component } from 'react';

var AddId = 3;

class AppAdd extends Component {
	onSubmit = (event) => {
		event.preventDefault();
		this.props.onAdd(AddId, this.prodName.value, this.prodPrice.value);
		this.prodName.value = '';
		this.prodPrice.value = '';
		AddId++;
	};

	render() {
		return (
			<React.Fragment>
				<form onSubmit={this.onSubmit}>
					<input placeholder="Product Name" ref={(prodName) => (this.prodName = prodName)} />
					<input placeholder="Price" ref={(prodPrice) => (this.prodPrice = prodPrice)} />
					<button type="submit">Add</button>
				</form>
			</React.Fragment>
		);
	}
}

export default AppAdd;
