import {NevinhaComponent, NevinhaDOM} from 'nevinha-js';
import ShopTable from './components/ShopTable';
import ShopList from './components/ShopList';

class App extends NevinhaComponent {
  render() {
    return (
      <div>
        <header id="header">
          <h1>My Store</h1>
          <div className="car"></div>
        </header>

        <ShopTable />
        <ShopList />
      </div>
    );
  }
}

export default App;