import {NevinhaComponent, NevinhaDOM} from 'nevinha-js';
import {Connect} from 'nevinha-redux';
import {addTodo} from './actions/todo-actions';

class Form extends NevinhaComponent {
  constructor(props, context) {
    super(props, context);

    this.handleAdd = this.handleAdd.bind(this);
    this.change = this.change.bind(this);

    this.state = {
      items: this.props.items
    };
  }

  handleAdd(e) {
    e.preventDefault();

    const {name} = this.state;
    const {nevinha} = this.props;

    nevinha(name);
  }

  change(e) {
    this.setState({name: e.target.value});
    return this.props.handleKeyPress(e);
  }

  render() {
    return (
      <form class="app-form" data-name={this.props.name}>
        <input
          className="input"
          onKeyUp={this.change}
          placeholder="Edit page name"
          type="text"
          value={this.props.name}
        />

        <button onClick={this.handleAdd}>Add todo</button>

        <footer>
          <p pulseSlow>Type the page name in the input above</p>
        </footer>
      </form>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    nevinha: name => dispatch(addTodo(name))
  };
}

function mapStateToProps(state) {
  return {
    items: state.todos
  };
}

Form = Connect(mapDispatchToProps, mapStateToProps)(Form);

class Test extends NevinhaComponent {
  componentUnmount() {}

  render() {
    return <Form {...this.props} />;
  }
}

export default Test;