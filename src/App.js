import React, {Component} from 'react';
import './App.css';
import Product from './components/Product'
class App extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-inverse">
          <a className="navbar-brand">Props</a>
        </nav>

        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12"></div>
              <Product />
              <Product />
              <Product />
              <Product />
              <Product />
          </div>
        </div>
      </div>
    );
  }
}


export default App;
