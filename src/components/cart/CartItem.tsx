import React, { Component } from 'react'
import { AiFillDelete } from "react-icons/ai";
import { Product } from '../../model/Product';
import { productService, ProductService } from '../../service/ProductService';


export default class CartItem extends Component<Props, State> {
    constructor(props: any) {
        super(props);
        this.state = {
            quantity: this.props.quantity,
            product: productService.getById(this.props.id) as Product
        }
    }
    render() {
        const pcl = Number(this.state.product.salePrice)
        const pc = Number(this.state.product.price)

        const priceSale = pcl.toLocaleString('vi-VN', {
            style: 'currency',
            currency: 'VND'
        })

        const price = pc.toLocaleString('vi-VN', {
            style: 'currency',
            currency: 'VND'
        })

        const quatityProduct = Number(this.state.quantity);

        const spc = quatityProduct * pcl

        const sumprice = spc.toLocaleString('vi-VN', {
            style: 'currency',
            currency: 'VND'
        })

        return (
            <div>
                <div className="cart">
                    <div className="detailInfor">
                        <div className="img-item">
                            <img src={this.state.product.image} className="img" />
                        </div>
                    </div>
                    <div className="detailInfor"><span>{this.state.product.name} </span></div>
                    <div className="detailInfor">
                        <span className="afterSale">{priceSale}</span>
                        <span className="beforSale">{price}</span>
                    </div>
                    <div className="detailInfor">
                        <input type="number" min={1} multiple placeholder="Số lớn hơn 0" id="quantityProduct" defaultValue={this.props.quantity}
                            onChange={(event) => {
                                this.setState({ quantity: event.target.valueAsNumber })
                                console.log(this.state.quantity);
                            }}

                        />
                    </div>
                    <div className="detailInfor">
                        <span>{sumprice}</span>
                    </div>
                    <div className="detailInfor">
                        <AiFillDelete className="delete" onClick={(event) => this.props.itemDelete(this.props.id)} style={{ fontSize: 30, color: 'red' }} />
                    </div>
                </div>
            </div>
        )
    }
}

interface Props {
    id: string,
    quantity: number,
    itemDelete(event: string): void,
}
interface State {
    product: Product
    quantity: number;
}