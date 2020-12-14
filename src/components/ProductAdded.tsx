import React, { Component } from 'react'
import { AiFillDelete } from "react-icons/ai";
import { Product } from '../model/Product';
import { productService } from '../service/ProductService';

export default class ProductAdded extends Component<Props, {}> {

    render() {

        return (
            <div>

                <div className="productCard">
                    <div className="setting">
                        <span className="material-icons" onClick={(event) => {
                            this.deleteProduct()
                        }}><AiFillDelete style={{ fontSize: 30 }} /></span>
                    </div>
                    <img
                        src={this.props.product.images}
                        alt=""
                    />
                    <div className="nameProduct">
                        <p> {this.props.product.name} </p>
                    </div>
                    <div className="price">
                        <p>
                            <span className="afterSale">{this.props.product.priceSale}</span>
                            <span className="beforSale">{this.props.product.price}</span>
                        </p>
                    </div>
                    <div className="button">
                        <button className="btn btn-primary"
                        >Chỉnh sửa</button>
                    </div>

                </div>

            </div>

        )
    }
    deleteProduct = () => {
        console.log("Xóa được rồi");
        
    }
}
export interface Props {
    product: Product;
}