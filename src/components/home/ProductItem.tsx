import React, { Component } from 'react'
import { Product } from '../../model/Product'
import { cartService } from '../../service/CartService'

export default class ProductItem extends Component<Props, State> {
    render() {
        const pcl = Number(this.props.product.salePrice)
        const pc = Number(this.props.product.price)

        const priceSale = pcl.toLocaleString('vi-VN',{
            style: 'currency',
            currency: 'VND'
        })

        const price = pc.toLocaleString('vi-VN',{
            style: 'currency',
            currency: 'VND'
        })
        return (

            <div className="productCard">
                <img src={this.props.product.image} alt="" />
                <div className="nameProduct">
                    <p>{this.props.product.name}</p>
                </div>
                <div className="price">
                    <p>
                        <span className="afterSale">{priceSale}</span>
                        <span className="beforSale">{price}</span>

                    </p>
                </div>
                <div className="button">
                    <button className="btn btn-primary"
                        onClick={(event) => {
                            cartService.addToCart(this.props.product.id)
                            this.props.onNotifycation()
                        }}
                    >Đưa vào giỏ</button>
                </div>
            </div>
        )
    }
}

export interface Props {
    product: Product;
    onNotifycation() : void ;
}

export interface State {
}