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

        return (
            <div>
                <div className="cart">
                    <div className="detailInfor">
                        <div className="img-item">
                            <img src={this.state.product.images} className="img" />
                        </div>
                    </div>
                    <div className="detailInfor"><span>{this.state.product.name} </span></div>
                    <div className="detailInfor">
                        <span className="afterSale">{this.state.product.priceSale}</span>
                        <span className="beforSale">{this.state.product.price}đ</span>
                    </div>
                    <div className="detailInfor">
                        <input type="number" min={1} id="quantityProduct" defaultValue={this.props.quantityProduct}
                            onChange={(event) => {
                                this.setState({ quantityProduct: event.target.valueAsNumber })
                                console.log(this.state.quantityProduct);
                            }}

                        />
                    </div>
                    <div className="detailInfor">
                        <span>{(this.state.quantityProduct || 1) * (this.state.product.priceSale || 0)}đ</span>
                    </div>
                    <div className="detailInfor">
                        <AiFillDelete className = "delete" onClick={(event) => this.props.itemDelete(this.props.id)} style={{ fontSize: 30, color: 'red' }} />

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