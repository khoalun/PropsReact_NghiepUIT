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
           
            <div className="App-row">

            
              <Product
              name = "Apple Iphone 6 16gb"
              price = "15000000" />
               <Product
              name = "Oppo 5s"
              price = "16000000" />
               <Product
              name = "Apple Iphone XS 512gb"
              price = "20000000" />
              </div>
             
          </div>
        </div>
      </div>
    );
  }
}


export default App;
