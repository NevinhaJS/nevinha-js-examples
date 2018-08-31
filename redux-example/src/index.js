import {NevinhaComponent, render, NevinhaDOM} from 'nevinha-js';
import {createStore} from 'redux';
import {Provider} from 'nevinha-redux';
import todoApp from './reducers/reducer';

import App from './App';

const store = createStore(todoApp);

class Main extends NevinhaComponent {
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}

const $root = document.querySelector('#my-app');
render(Main, $root);