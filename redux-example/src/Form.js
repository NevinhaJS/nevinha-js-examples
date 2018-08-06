import {NevinhaComponent, NevinhaDOM} from 'nevinha-js';
import {addTodo, toggleTodo, setVisibilityFilter} from './actions/todo-actions';

function connect(mapDispatchToProps, mapStateToProps) {
	return function(WrappedComponent) {
    class Connect extends NevinhaComponent {
      constructor(props, context){
        super(props, context);

        this.state = {
          mappedDispatch: mapDispatchToProps(this.getDispatch()),
          mappedState: mapStateToProps(this.getStoreState())
        }

        this.unsubscribe = this.subscribeStore();
      }

      componentUnmount(){
        this.unsubscribe();
      }

      subscribeStore(){
        const store = this.context.store;

        return store.subscribe(() => {
          this.setState({
            mappedState: mapStateToProps(this.getStoreState())
          });
        });
      }

      getStoreState() {
        return this.context.store.getState();
      }

      getDispatch(){
        return this.context.store.dispatch;
      }

      render() {
        const {mappedState, mappedDispatch} = this.state;
        const data = {
          ...mappedState,
          ...mappedDispatch,
          ...this.props
        }

        if(this.children) {
          return <WrappedComponent {...data}  />
        }

        return (
          <WrappedComponent {...data}>
            {this.children}
          </WrappedComponent>
        )
      }
    }

    return Connect;
  }
}


class Form extends NevinhaComponent {
  constructor(props, context){
    super(props, context);

    this.handleAdd = this.handleAdd.bind(this);
    this.change = this.change.bind(this);
    this.state = {
      items: this.props.items
    }
  }

  handleAdd(e){
    e.preventDefault();

    const {name} = this.state;
    const {nevinha} = this.props;
console.log(this.props)
    nevinha(name)
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
          value={this.props.name}
          placeholder="Edit page name"
          type="text"
        />

        <button onClick={this.handleAdd}>Add todo</button>
        {this.props.name == 't' && (<Some />)}
        <footer>
          <p pulseSlow>Type the page name in the input above</p>
        </footer>
      </form>
    );
  }
}

class Some extends NevinhaComponent {
  render() {
    return (<div>asd</div>)
  }
}

function mapDispatchToProps(dispatch){
  return {
    nevinha: name => dispatch(addTodo(name))
  }
}

function mapStateToProps(state){
  return {
    items: state.todos
  }
}

Form = connect(mapDispatchToProps, mapStateToProps)(Form)

class Test extends NevinhaComponent {

  componentUnmount(){
  }

  render() {
    return (
      <Form {...this.props} />
    )
  }
}

export default Test;