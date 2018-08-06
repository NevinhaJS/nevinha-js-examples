import {NevinhaComponent, render, NevinhaDOM} from 'nevinha-js';

class Form extends NevinhaComponent {
	render() {
		const {handleKeyPress} = this.props;

		return (
			<form class="app-form">
				<input
					className="input"
					onKeyUp={handleKeyPress}
					placeholder="Edit page name"
					type="text"
				/>
				<footer>
					<p pulseSlow>Type the page name in the input above</p>
				</footer>
			</form>
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
			<section>
				<article enterLeftBounce>
					<h1 className="hello">
						<p className="margin-hello">Hello! This is the new: </p>
						{name ? name : 'NevinhaJS'}
					</h1>

					<Form handleKeyPress={this.handleKeyPress} />
				</article>
			</section>
		);
	}
}

const $root = document.querySelector('#my-app');
render(App, $root);
