import {NevinhaComponent, render, NevinhaDOM} from 'nevinha-js';

class Form extends NevinhaComponent {
	handleClick(){
		this.setAnimation(this.context.teste, {
			name: "pulseSlow",
			values: {
				speed: 0.3
			}
		})
	}

	render() {
		const {handleKeyPress} = this.props;

		return (
			<div ref="teste" class="form">
				<input
					className="input"
					onKeyUp={handleKeyPress}
					placeholder="Edit page name"
					type="text"
				/>
				<footer pulseSlow>
					<p className="footer" onClick={this.handleClick.bind(this)}>
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
				<div enterLeftBounce>
					<h1 className="hello">
						<p className="margin-hello">Hello! This is the new: </p>
						{name ? name : 'NevinhaJS'}
					</h1>

					<Form handleKeyPress={this.handleKeyPress} />
				</div>
			</div>
		);
	}
}

const $root = document.querySelector('#my-app');
render(App, $root);