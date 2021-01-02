import React, { Component } from 'react'
import { AiFillDelete } from "react-icons/ai";
import { Product } from '../../model/Product';
import { productService } from '../../service/ProductService';


export default class CartItem extends Component<Props, State> {
    constructor(props: any) {
        super(props);
        this.state = {
            quantityProduct: this.props.quantityProduct,
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

        const quatityProduct = Number(this.state.quantityProduct);

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
                        <input type="number" min={1} multiple placeholder="Số lớn hơn 0" id="quantityProduct" defaultValue={this.props.quantityProduct}
                            onChange={(event) => {
                                this.setState({ quantityProduct: event.target.valueAsNumber })
                                console.log(this.state.quantityProduct);
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
    id: number,
    quantityProduct: number,
    itemDelete(event: number): void,
}
interface State {
    product: Product
    quantityProduct: number;
}