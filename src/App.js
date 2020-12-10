import React, { Component } from 'react';
import data from './data.json';
import Products from "./components/products"

class App extends Component {
  
  constructor(props){
    super(props);
    this.state = {
      products : data.products,
      size: "Hello",
      sort: ""
    }
  }
  render() {
    return (
      <div className="grid-container">
        <header>
          <a href="/">React Shopping Cart</a>
        </header>
        <main>
          <Products products = {this.state.products} ></Products>
        </main>
        <footer>
          All right reserved.
        </footer>
      </div>
    );
  }

}

export default App;
