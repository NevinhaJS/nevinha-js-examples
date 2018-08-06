import {NevinhaComponent, render, NevinhaDOM} from 'nevinha-js';
import {createStore} from 'redux';
import {Provider} from './nevinha-redux/Provider';
import Test from './Form';
import todoApp from './reducers/reducer';

const store = createStore(todoApp);

class App extends NevinhaComponent {
  constructor(props, context) {
    super(props, context);

    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  handleKeyPress({target}) {
    this.setState({
      name: target.value
    });
  }

  render() {
    const {name = 'NevinhaJS'} = this.state;

    return (
      <section>
        <article enterLeftBounce>
          <h1 className="hello">
            <p className="margin-hello">Hello! This is the new: </p>
            {name}
          </h1>

          <Test handleKeyPress={this.handleKeyPress} name={name} />
        </article>
      </section>
    );
  }
}

class Main extends NevinhaComponent {
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    )
  }
};

const $root = document.querySelector('#my-app');
render(Main, $root);

// // Log the initial state
// console.log(store.getState());

// // Every time the state changes, log it
// // Note that subscribe() returns a function for unregistering the listener

// // Dispatch some actions
// store.dispatch(addTodo('Learn about actions'));
// store.dispatch(addTodo('Learn about reducers'));
// store.dispatch(addTodo('Learn about store'));
// store.dispatch(toggleTodo(0));
// store.dispatch(toggleTodo(1));
// store.dispatch(setVisibilityFilter(VisibilityFilters.SHOW_COMPLETED));

// // Stop listening to state updates
// unsubscribe();