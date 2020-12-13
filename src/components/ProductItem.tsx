import React, { Component } from 'react'
import { Product } from '../model/Product'

export default class ProductItem extends Component<Props, {}> {
    constructor(props: any) {
        super(props);
      
        this.state = {
           

        }
    }

    render() {
        return (

            <div className="productCard">
                <img src ={this.props.product.images} alt="" />
                <div className="nameProduct">
                    <p>{this.props.product.name}</p>
                </div>
                <div className="price">
                    <p>
                        <span className="afterSale">{this.props.product.price}</span>
                        <span className="beforSale">{this.props.product.priceSale}</span>

                    </p>
                </div>
                <div className="button">
                    <button className="btn btn-primary">Đưa vào giỏ</button>
                </div>
            </div>
        )
    }
}

export interface Props {
    product: Product;
}