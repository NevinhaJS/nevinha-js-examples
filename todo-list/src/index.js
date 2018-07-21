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
				<input placeholder="What needs to be done?" className="input" onChange={this.handleChange} type="text" value={name} />
				<input className="btn submit" type="submit" value="Add todo" />
			</form>
		);
	}
}

const List = ({todos, handleEdit, handleRemove}) => {
	return (
		<div>
			{todos.map(({name, watched}, index) => (
				<p key={index} className="data-index">
					<div data-index={index} className="space">
						<div className="justifc">
							<input className="checkbox" checked={watched} onClick={handleEdit} type="checkbox" />
							<span style={`text-decoration: ${watched ? 'line-through' : 'none'};`}>{name}</span>
						</div>
						<a className="btn sub" href="#" onClick={handleRemove}><i class="fa fa-times"></i></a>
					</div>
				</p>
			))}
		</div>
	)
}

class App extends NevinhaComponent {
	constructor() {
		super();

		this.state.todos = [{name: 'asdasda', watched: true}];

		this.addTodo = this.addTodo.bind(this);
		this.handleEdit = this.handleEdit.bind(this);
		this.handleRemove = this.handleRemove.bind(this);
	}

	handleEdit({target}){
		const index = target.parentNode.parentNode.dataset.index;
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

		const index = e.target.parentNode.parentNode.dataset.index;
		const filteredTodos = this.state.todos.filter((todo, todoIndex) => index != todoIndex);

		this.setState({
			todos: filteredTodos
		});
	}

	render() {
		const {todos} = this.state;

		return (
			<div>
				<h1 className="hello margin-hello">Film</h1>
				<div className="bg-list">
					<Form
						addTodo={this.addTodo}
					/>
					<List
						handleEdit={this.handleEdit}
						handleRemove={this.handleRemove}
						todos={todos}
					/>
					{/* <div className="space margin-item">
						<p className="cl-font1">1 item left</p>
						<span className="all-flex-span">
							<a href="#" className="margin-all cl-font" id="buttom">All</a>
							<a href="#" className="margin-all cl-font">Active</a>
							<a href="#" className="margin-all cl-font">Clompleted</a>
						</span>
					</div> */}
				</div>
			</div>
		);
	}
}

const $root = document.querySelector('#my-app');
render(App, $root);