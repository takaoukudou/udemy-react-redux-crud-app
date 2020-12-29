import React, { Component } from "react";

const App = () => <Counter></Counter>;

class Counter extends Component {
	constructor(props) {
		super(props);
		this.state = { count: 0 };
	}

	handlePlusButton = () => {
		console.log(this.state.count);
		const currentCount = this.state.count;
		this.setState({ count: currentCount + 1 });
	};
	handleMinusButton = () => {
		console.log(this.state.count);
		const currentCount = this.state.count;
		this.setState({ count: currentCount - 1 });
	};
	render() {
		console.log(this.state);
		return (
			<React.Fragment>
				<div>count: {this.state.count}</div>
				<button onClick={this.handlePlusButton}>+1</button>
				<button onClick={this.handleMinusButton}>-1</button>
			</React.Fragment>
		);
	}
}

export default App;
