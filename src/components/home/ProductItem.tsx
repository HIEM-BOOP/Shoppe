import { Button } from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search'
import React, { Component } from 'react'
import NumberFormat from 'react-number-format'
import {
    Link
} from "react-router-dom"
import { Product } from '../../model/Product'
export default class ProductItem extends Component<Props, State> {
    render() {
        // const pcl = Number(this.props.product.salePrice)
        // const pc = Number(this.props.product.price)

        // const priceSale = pcl.toLocaleString('vi-VN',{
        //     style: 'currency',
        //     currency: 'VND'
        // })

        // const price = pc.toLocaleString('vi-VN',{
        //     style: 'currency',
        //     currency: 'VND'
        // })

        return (

            <div className="productCard">
                <img src={this.props.product.image} alt="" />
                <div className="nameProduct">
                    <p>{this.props.product.name}</p>
                </div>
                <div className="price">
                    <p>
                        <span className="afterSale">
                            <NumberFormat value={this.props.product.salePrice} displayType={'text'} thousandSeparator={true} prefix={'VND'} />
                        </span>
                        <span className="beforSale">
                            <NumberFormat value={this.props.product.price} displayType={'text'} thousandSeparator={true} prefix={'VND'} />
                        </span>
                    </p>
                </div>
                <div className="bottom" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>

                    <div className="detail" >
                        <Link to={`/detail/?id=${this.props.product.id}`}>
                            <Button onClick={() => {
                            }}>
                                <SearchIcon />
                            </Button>
                        </Link>
                    </div>
                    <div className="button">
                        <button className="btn btn-primary"
                        // onClick={(event) => {
                        //     cartService.addToCart(this.props.product.id)
                        //     this.props.onNotifycation()
                        // }}
                        >Đưa vào giỏ</button>
                    </div>
                </div>
            </div>
        )
    }
}

export interface Props {
    product: Product;
    // onNotifycation(): void;

}

export interface State {
}