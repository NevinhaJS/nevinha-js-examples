import { NevinhaComponent, NevinhaDOM } from "nevinha-js";
import {Connect} from 'nevinha-redux'

import {addItem} from '../actions/todo-item';

const productList = [
  {
    id: 1, name: 'Adidas Shoes', price: '11,20', description: 'Lore ipsum at dolor sit atenuet by a lore ipsum at dolor.'
  },
  {
    id: 2, name: 'Nike Shoes', price: '21,20', description: 'Lore ipsum at dolor sit atenuet by a lore ipsum at dolor.'
  },
  {
    id: 3, name: 'Nevinha Shoes', price: '1,20', description: 'Lore ipsum at dolor sit atenuet by a lore ipsum at dolor.'
  },
  {
    id: 4, name: 'Puma Shoes', price: '30,20', description: 'Lore ipsum at dolor sit atenuet by a lore ipsum at dolor.'
  },
  {
    id: 5, name: 'Nevinhosa Shoes', price: '121,20', description: 'Lore ipsum at dolor sit atenuet by a lore ipsum at dolor.'
  },
  {
    id: 6, name: 'Nervosa Shoes', price: '130,00', description: 'Lore ipsum at dolor sit atenuet by a lore ipsum at dolor.'
  }
]

class ShopList extends NevinhaComponent {
  constructor(props, context) {
    super(props, context);

    this.handleBuyClick = this.handleBuyClick.bind(this);
    this.state = {
      productList
    };
  }

  /**
   * @private
   */
  handleBuyClick(event){
    event.preventDefault();
    const {parentNode} = event.target;
    const {productList} = this.state;
    const itemId = parseInt(parentNode.dataset.id);

    this.setState({
      productList: productList.filter(({id}) => id !== itemId)
    });

    this.props.addItem(productList.find(({id}) => id === itemId))
  }

  render() {
    const {productList} = this.state;

    return (
      <section class="shop-list">
        {productList.map(({id, name, price, description}, index) => (
          <article
            className="shop-list--item"
            data-id={id}
            key={id}>
            <header>
              <h2>{name}</h2>
              <h3>R$: <span>{price}</span></h3>
            </header>
            <p>{description}</p>
            <a className="btn" href="javascript:;" onClick={this.handleBuyClick} pulseSlow>Buy now</a>
          </article>
        ))}
      </section>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return {
    addItem: item => dispatch(addItem(item))
  };
}

export default Connect(mapDispatchToProps)(ShopList);