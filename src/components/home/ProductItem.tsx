import React, { Component } from 'react'
import { Product } from '../../model/Product'
import { cartService } from '../../service/CartService'

export default class ProductItem extends Component<Props, State> {
    render() {
        return (

            <div className="productCard">
                <img src={this.props.product.images} alt="" />
                <div className="nameProduct">
                    <p>{this.props.product.name}</p>
                </div>
                <div className="price">
                    <p>
                        <span className="afterSale">{this.props.product.priceSale}</span>
                        <span className="beforSale">{this.props.product.price}</span>

                    </p>
                </div>
                <div className="button">
                    <button className="btn btn-primary"
                        onClick={(event) => {
                            cartService.addToCart(this.props.product.id)
                            
                        }}
                    >Đưa vào giỏ</button>
                </div>
            </div>
        )
    }
}

export interface Props {
    product: Product;
}

export interface State {
}