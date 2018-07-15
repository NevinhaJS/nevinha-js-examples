import {NevinhaComponent, render} from 'nevinha-js';

/*eslint-disable */
/** @jsx h */
function h(type, attributes, ...args) {
	const children = args.length ? [].concat(...args) : [];
	return {type, attributes: attributes || {}, children};
}
/*eslint-enable */

class Form extends NevinhaComponent {
	constructor(props, context){
		super(props, context);

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.state.name = '';
	}

	handleSubmit(e){
		e.preventDefault();
		const {addTodo} = this.props;
		const {name} = this.state;

		addTodo({
			name,
			watched: false
		})

		this.setState({name: ''});
	}

	handleChange(e){
		this.setState({
			name: e.target.value
		});
	}

	render() {
		const {name} = this.state;

		return (
			<form class="form" onSubmit={this.handleSubmit}>
				<input onChange={this.handleChange} type="text" value={name} />
				<input className="btn" type="submit" value="Add todo" />
			</form>
		);
	}
}

const List = ({todos, handleEdit, handleRemove}) => {
	return (
		<div>
			{todos.map(({name, watched}, index) => (
				<p data-index={index} key={index}>
					<input checked={watched} onClick={handleEdit} type="checkbox" />
					<span style={`text-decoration: ${watched ? 'line-through' : 'none'}`}>Film name: {name}</span>
					<a className="btn" href="#" onClick={handleRemove}>Remove film</a>
				</p>
			))}
		</div>
	)
}

class App extends NevinhaComponent {
	constructor() {
		super();

		this.state.todos = [{
			name: 'Suits',
			watched: true
		}, {
			name: 'Gotham',
			watched: false
		}, {
			name: 'Game of thrones',
			watched: false
		}];

		this.addTodo = this.addTodo.bind(this);
		this.handleEdit = this.handleEdit.bind(this);
		this.handleRemove = this.handleRemove.bind(this);
	}

	handleEdit({target}){
		const index = target.parentNode.dataset.index;
		const filteredTodos = this.state.todos.map((todo, todoIndex) => {
			if(index == todoIndex){
				return {...todo, watched: !todo.watched}
			}

			return todo;
		});

		this.setState({
			todos: filteredTodos
		})
	}

	addTodo({name, watched}){
		if(!name) return;

		const todos = [...this.state.todos, {name, watched}];

		this.setState({
			todos
		});
	}

	handleRemove(e){
		e.preventDefault();

		const index = e.target.parentNode.dataset.index;
		const filteredTodos = this.state.todos.filter((todo, todoIndex) => index != todoIndex);

		this.setState({
			todos: filteredTodos
		});
	}

	render() {
		const {todos} = this.state;

		return (
			<div>
				<Form
					addTodo={this.addTodo}
				/>
				<List
					handleEdit={this.handleEdit}
					handleRemove={this.handleRemove}
					todos={todos}
				/>
			</div>
		);
	}
}

const $root = document.querySelector('#my-app');
render(App, $root);