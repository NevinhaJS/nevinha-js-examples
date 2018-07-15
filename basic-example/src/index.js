import {NevinhaComponent, render} from 'nevinha-js';

/*eslint-disable */
/** @jsx h */
function h(type, attributes, ...args) {
	const children = args.length ? [].concat(...args) : [];
	return {type, attributes: attributes || {}, children};
}
/*eslint-enable */

class Form extends NevinhaComponent {
	render() {
		const {handleKeyPress} = this.props;

		return (
			<div class="form">
				<input
					onKeyUp={handleKeyPress}
					type="text"
				/>
			</div>
		);
	}
}

class App extends NevinhaComponent {
	constructor() {
		super();

		this.handleKeyPress = this.handleKeyPress.bind(this);
		this.state.name = 'NevinhaJS';
	}

	handleKeyPress({target}) {
		this.setState({
			name: target.value
		});
	}

	render() {
		const {name} = this.state;

		return (
			<div>
				<Form handleKeyPress={this.handleKeyPress} />

				<h1>
					<p>Hello! This is the new: </p>
					{name}
				</h1>
			</div>
		);
	}
}

const $root = document.querySelector('#my-app');
render(App, $root);