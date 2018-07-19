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
					className="input"
					onKeyUp={handleKeyPress}
					placeholder="Edit page name"
					type="text"
				/>
				<footer>
					<p className="footer">
						Type the page name in the input above
					</p>
				</footer>
			</div>
		);
	}
}

class App extends NevinhaComponent {
	constructor() {
		super();

		this.handleKeyPress = this.handleKeyPress.bind(this);
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
				<h1 className="hello" fadeIn>
					<p className="margin-hello">Hello! This is the new: </p>
					{name ? name : 'NevinhaJS'}
				</h1>
				<Form handleKeyPress={this.handleKeyPress} />
			</div>
		);
	}
}

const $root = document.querySelector('#my-app');
render(App, $root);