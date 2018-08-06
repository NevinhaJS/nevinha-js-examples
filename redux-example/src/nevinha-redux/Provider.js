import {NevinhaComponent, NevinhaDOM} from 'nevinha-js';

export class Provider extends NevinhaComponent {
  getChildContext() {
    return {
      store: this.props.store
    };
  }

  render(){
    return (
      <div>{this.children}</div>
    );
  }
}