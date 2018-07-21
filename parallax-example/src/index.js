import {NevinhaComponent, render, ParallaxProvider} from 'nevinha-js';

/*eslint-disable */
/** @jsx h */
function h(type, attributes, ...args) {
	const children = args.length ? [].concat(...args) : [];
	return {type, attributes: attributes || {}, children};
}
/*eslint-enable */

class App extends NevinhaComponent {
	render() {
		return (
			<div>
				<ParallaxProvider className="provider">
					<h1>Nevinha JS</h1>

					<img src="img/nevinha-js.png" parallax={{
						size: 0.2
					}} />
					<img src="img/nevinha-js.png" parallax={{
						size: 1.9
					}} />
					<img src="img/nevinha-js.png" parallax={{
						size: 1.4
					}} />
					<img src="img/nevinha-js.png" parallax={{
						size: 1.6
					}} />
					<img src="img/nevinha-js.png" parallax={{
						size: 1
					}} />
					<img src="img/nevinha-js.png" parallax={{
						size: 1.4
					}} />
					<img src="img/nevinha-js.png"  parallax={{
						size: 0.7
					}} />
					<img src="img/nevinha-js.png"  parallax={{
						size: 1.3
					}} />
					<img src="img/nevinha-js.png"  parallax={{
						size: 1.9
					}} />
					<img src="img/nevinha-js.png"  parallax={{
						size: 0.55
					}} />
					<img src="img/nevinha-js.png"  parallax={{
						size: 1.34
					}} />
					<img src="img/nevinha-js.png"  parallax={{
						size: 1.22
					}} />
					<img src="img/nevinha-js.png"  parallax={{
						size: 0.4
					}} />
					<img src="img/nevinha-js.png"  parallax={{
						size: 0.2
					}} />
					<img src="img/nevinha-js.png"  parallax={{
						size: 1.6
					}} />
					<img src="img/nevinha-js.png"  parallax={{
						size: 1.2
					}} />
					<img src="img/nevinha-js.png"  parallax={{
						size: 0.1
					}} />
					<img src="img/nevinha-js.png"  parallax={{
						size: 0.3
					}} />
					<img src="img/nevinha-js.png"  parallax={{
						size: 1.7
					}} />
					<img src="img/nevinha-js.png"  parallax={{
						size: 1.5
					}} />
					<img src="img/nevinha-js.png"  parallax={{
						size: 0.6
					}} />
					<img src="img/nevinha-js.png"  parallax={{
						size: 0.9
					}} />
					<img src="img/nevinha-js.png"  parallax={{
						size: 1.4
					}} />
				</ParallaxProvider>
			</div>
		);
	}
}

const $root = document.querySelector('#my-app');
render(App, $root);