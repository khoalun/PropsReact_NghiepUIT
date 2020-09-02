import React, { Component } from 'react';
import './App.css';
import Product from './components/Product'
class App extends Component {
 
render() {
  var products = [
    {
      id: 1,
      name: ' Apple Iphone 6 16gb',
      price: 150000000,
      image: 'https://www.mytrendyphone.fi/images2/iPhone-6-4-7-Repair-Diagnose-07102014-01-p.jpg',
      status: true
    },
    {
      id: 2,
      name: ' Oppo 5s',
      price: 160000000,
      image: 'https://image.oppo.com/content/dam/oppo/en/mkt/product-list/product-list-item/A92-white.png',
      status: false
    },
    {
      id: 3,
      name: ' Apple Iphone XS 512gb',
      price: 200000000,
      image: 'https://assets.kogan.com/files/product/HKI/apple/IphoneX_SLV.jpg?auto=webp&canvas=340%2C226&fit=bounds&height=226&quality=75&width=340',
      status: false
    },
  ];
  let elements = products.map((product, index) => {
  
  
      return <Product
      key = {product.id}
      price={product.price}
      image={product.image} >
      {product.name}
  
    </Product>
  });
  return (
    <div>
      <nav className="navbar navbar-inverse">
        <a className="navbar-brand">Props</a>
      </nav>

      <div className="container">
        <div className="row">

          <div className="App-row">


            {/* <Product
              
              price = "15000000" 
              image = "https://www.mytrendyphone.fi/images2/iPhone-6-4-7-Repair-Diagnose-07102014-01-p.jpg"
              >
              Apple Iphone 6 16gb
              </Product>
               <Product
              
              price = "16000000"
              image = "https://image.oppo.com/content/dam/oppo/en/mkt/product-list/product-list-item/A92-white.png"
               >
               Oppo 5s
               </Product>
               <Product
              
              price = "20000000"
              image = "https://assets.kogan.com/files/product/HKI/apple/IphoneX_SLV.jpg?auto=webp&canvas=340%2C226&fit=bounds&height=226&quality=75&width=340"
              >
              Apple Iphone XS 512gb
              </Product> */}
            {elements}

          </div>

        </div>
      </div>
    </div>
  );
}
}


export default App;
