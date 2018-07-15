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
		const {handleChange} = this.props;

		return (
			<div class="form">
				<input onKeyUp={handleChange} type="text" />
			</div>
		);
	}
}

class App extends NevinhaComponent {
	constructor() {
		super();

		this.handleChange = this.handleChange.bind(this);
		this.state.name = 'NevinhaJS';
	}

	handleChange({target}) {
		this.setState({
			name: target.value
		});
	}

	render() {
		const {name} = this.state;

		return (
			<div>
				<Form handleChange={this.handleChange} />

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