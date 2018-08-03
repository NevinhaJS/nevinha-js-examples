import {NevinhaComponent, render, NevinhaDOM} from 'nevinha-js';

class App extends NevinhaComponent {
	constructor() {
		super();

		this.handleClickToggle = this.handleClickToggle.bind(this);

		this.state.toggle = true;
	}

	handleClickToggle() {
		this.setState({
			toggle: !this.state.toggle
		});
	}

	renderButton() {
		return <button onClick={this.handleClickToggle}>toggle</button>
	}

	renderCard(title, animationName) {
		return (
			<div class={'card'}>
				<header>
					<img src={`http://api.adorable.io/avatars/136/${title}`} />

					<h1>{title}</h1>
				</header>
				<main>
					{'panel content with '}<strong>{animationName}</strong>
				</main>
				<footer>
					{this.renderButton()}
				</footer>
			</div>
		);
	}

	render() {
		const {toggle} = this.state;

		return (
			<div>
				{toggle ? (
					<div enterLeftBounce>
						{this.renderCard('front', 'enterLeftBounce')}
					</div>
				) : (
					<div enterRightBounce>
						{this.renderCard('back', 'enterRightBounce')}
					</div>
				)}
			</div>
		);
	}
}

const $root = document.querySelector('#my-app');
render(App, $root);