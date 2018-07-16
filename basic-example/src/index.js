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
		const test = ['asd', 'bbc',3]

		return (
			<div class="form">
				<input
					onKeyUp={handleKeyPress}
					type="text"
					className="input"
					placeholder="Edit page name"
				/>
				<footer>
					<p className="footer">
						Type the page name in the input about
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
				<h1 className="hello">
					<p className="margin-hello">Hello! This is the new: </p>
					{name ? name : 'NevinhaJS'}
				</h1>
				<div>
					<Form handleKeyPress={this.handleKeyPress} />
				</div>
			</div>
		);
	}
}

const $root = document.querySelector('#my-app');
render(App, $root);