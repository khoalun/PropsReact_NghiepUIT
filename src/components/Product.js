import React, {Component} from 'react';


class Product extends Component {
  render() {
    return (
      <div>
       
        <h1>Product Component</h1>
      


    <div className="thumbnail">
        <img alt="" />
        <div className="caption">
            <h3>
            { this.props.name }
            </h3>
            <p>
              {this.props.price} VND
            </p>
            <p>
                <a  className="btn btn-primary"> Mua Ngay</a>
               
            </p>
        </div>
    </div>
 
          
      </div>
    );
  }
}


export default Product;
