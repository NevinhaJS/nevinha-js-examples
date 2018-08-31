import {NevinhaComponent, NevinhaDOM} from 'nevinha-js';
import {Connect} from 'nevinha-redux'

class ShopTable extends NevinhaComponent {
  render() {
    const {items} = this.props;
    console.log(items)

    return (
      <section class="shop-table">
        <table>
          <tr>
            <td>Name</td>
            <td class="text-center">Quantity</td>
            <td class="text-center">Price</td>
          </tr>

          {items.map(({id, name, price}) => (
            <tr key={id}>
              <td>{name}</td>
              <td class="text-center">1x</td>
              <td class="text-center">R$: {price}</td>
            </tr>
          ))}
        </table>
      </section>
    )
  }
}

function mapStateToProps({items}) {
  return {
    items
  };
}


export default Connect(()=>{}, mapStateToProps)(ShopTable);