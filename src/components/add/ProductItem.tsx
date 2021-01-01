import React, { Component } from 'react'
import { AiFillDelete } from "react-icons/ai";
import { Product } from '../../model/Product';
export default class ProductAdded extends Component<Props, {}> {
    render() {

        const pcl = Number(this.props.product.priceSale)
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
            <div>
                <div className="productCard">
                    <div className="setting">
                        <span className="material-icons" onClick={() => {
                            this.props.onDelete(this.props.product.id)
                        }}><AiFillDelete style={{ fontSize: 30 }} /></span>
                    </div>
                    <img
                        className='image'
                        width="400" height="400"
                        src={this.props.product.images}
                        alt=""
                    />
                    <div className="nameProduct">
                        <p> {this.props.product.name} </p>
                    </div>
                    <div className="price">
                        <p>
                            <span className="afterSale">{priceSale}</span>
                            <span className="beforSale">{price}</span>
                        </p>
                    </div>
                    <div className="button">
                        <button className="btn btn-primary"
                            onClick={() => {
                                this.props.onUpdate(this.props.product.id)
                                console.log(this.props.product);
                                this.props.onSetProduct(this.props.product)
                                console.log(this.props.product)
                            }}

                        >Chỉnh sửa</button>
                    </div>

                </div>
            </div>
        )
    }
}

export interface Props {
    product: Product;
    onUpdate(id: number): void,
    onDelete(id: number): void;
    onSetProduct(item: Product): void
}

