import { keys } from '@material-ui/core/styles/createBreakpoints';
import React, { Component } from 'react'
import { AiFillDelete } from "react-icons/ai";
import { Product } from '../model/Product';
import PopUpUpDate from '../components/PopUpUpdate'
import { productService } from '../service/ProductService';

export default class ProductAdded extends Component<Props,{}> {


    render() {

        return (
            <div>

                <div className="productCard">
                    <div className="setting">
                        <span className="material-icons" onClick={(event) => {
                            this.props.itemDelete(this.props.product.id)
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
                        onClick = {() => {this.props.isUpdate(this.props.product.id)
                        console.log(this.props.product.id);
                        this.props.setProduct(this.props.product)
                        }}
                        >Chỉnh sửa</button>
                    </div>

                </div>
            </div>

        )
    }
   
}

export interface Props {
    isUpdate(id : number) : void ,
    product: Product;
    itemDelete(event : number) : void;
    setProduct(item : Product):void
}

