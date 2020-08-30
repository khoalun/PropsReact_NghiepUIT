import React, {Component} from 'react';


class Product extends Component {
  render() {
    return (
      <div>
       
       <div> <h1>Product Component</h1>
      </div>

<div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
    <div className="thumbnail">
        <img alt="" />
        <div className="caption">
            <h3>Tên sản phẩm</h3>
            <p>
                5.000.0000 VND
            </p>
            <p>
                <a  className="btn btn-primary"> Mua Ngay</a>
               
            </p>
        </div>
    </div>
 </div>
          
      </div>
    );
  }
}


export default Product;
