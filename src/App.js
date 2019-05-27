import React, { Component } from 'react';
import AppAdd from './App-add';
import AppDelete from './App-delete';
import './App.css';

const products = [
	{
		id: 1,
		name: 'Ipad',
		price: 'Rs.38000'
	},
	{
		id: 2,
		name: 'Iphone',
		price: 'Rs.90000'
	}
];

localStorage.setItem('products', JSON.stringify(products));

class App extends Component {
	componentWillMount() {
		this.getProducts();
	}

	state = {
		products: JSON.parse(localStorage.getItem('products'))
	};

	getProducts() {
		return this.state.products;
	}

	onAdd = (id, name, price) => {
		const products = this.getProducts();
		products.push({
			id,
			name,
			price
		});
		this.setState({
			products
		});
	};

	onDelete = (name) => {
		const products = this.getProducts();
		const modified_product = products.filter((product) => product.name !== name);
		this.setState({ products: modified_product });
	};

	onEditSubmit = (name, price, originalName) => {
		let products = this.getProducts();

		products = products.map((product) => {
			if (product.name === originalName) {
				product.name = name;
				product.price = price;
			}
			return product;
		});

		this.setState({ products });
	};

	render() {
		return (
			<React.Fragment>
				<div className="products_block">
					<h1>Products Management</h1>

					<div className="add_prod">
						<h4>Add Product</h4>
						<AppAdd onAdd={this.onAdd} />
					</div>

					<ul>
						{this.state.products.map((product) => (
							<AppDelete
								key={product.id}
								{...product}
								onDelete={this.onDelete}
								onEditSubmit={this.onEditSubmit}
							/>
						))}
					</ul>
				</div>
			</React.Fragment>
		);
	}
}

export default App;
