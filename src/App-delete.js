import React, { Component } from 'react';

class AppDelete extends Component {
	state = {
		isEdit: false
	};

	onEdit = () => {
		this.setState({ isEdit: true });
	};

	onEditSubmit = (event) => {
		event.preventDefault();
		this.props.onEditSubmit(this.prodName.value, this.prodPrice.value, this.props.name);

		this.setState({ isEdit: false });
	};

	render() {
		const { name, price } = this.props;
		return (
			<li>
				{this.state.isEdit ? (
					<form onSubmit={this.onEditSubmit}>
						<input
							placeholder="Product Name"
							ref={(prodName) => (this.prodName = prodName)}
							defaultValue={name}
						/>
						<input
							placeholder="Price"
							ref={(prodPrice) => (this.prodPrice = prodPrice)}
							defaultValue={price}
						/>
						<button type="submit">Save</button>
					</form>
				) : (
					<div>
						{name}
						<span> | </span>
						{price}
						<span> | </span>
						<button onClick={this.onEdit}>Edit</button>
						<span> | </span>
						<button onClick={() => this.props.onDelete(name)} className="delete">
							Delete
						</button>
					</div>
				)}
			</li>
		);
	}
}

export default AppDelete;
