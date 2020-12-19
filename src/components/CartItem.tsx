import React, { Component } from 'react'

import { AiFillDelete } from "react-icons/ai";


export default class CartItem extends Component<Props, State> {


    constructor(props: any) {
        super(props);
        let jsonProduct = localStorage.getItem("danhSachSanPham");
        let product = JSON.parse(jsonProduct || "[]");

        product.map((item: any, index: number) => {
            if (this.props.id === item.id) {
                this.state = {
                    id: item.id,
                    quantityProduct: this.props.quantityProduct,
                    name: item.name,
                    images: item.images,
                    priceSale: item.priceSale,
                    price: item.price,
                }
            }
        })
    }
  
    render() {

        return (
            <div>
                <div className="cart">
                    <div className="detailInfor">
                        <div className="img-item">
                                <img src={this.state.images} className="img" />
                        </div>
                    </div>
                    <div className="detailInfor"><span>{this.state.name} </span></div>
                    <div className="detailInfor">
                        <span className="afterSale">{this.state.priceSale}</span>
                        <span className="beforSale">{this.state.price}đ</span>
                    </div>
                    <div className="detailInfor">
                        <input type="number" min={1} id="quantityProduct" defaultValue={this.state.quantityProduct}
                            onChange={(event) => {
                                this.setState({ quantityProduct: event.target.valueAsNumber })
                                console.log(this.state.quantityProduct);
                            }}

                        />
                    </div>
                    <div className="detailInfor">
                        <span>{(this.state.quantityProduct || 1) * (this.state.priceSale || 0   )}đ</span>


                    </div>
                    <div className="detailInfor">
                        <AiFillDelete /* onClick = {this.tongGia} */  onClick = {(event) => this.props.itemDelete(this.props.id)} style={{ fontSize: 30, color: 'red' }} />

                    </div>
                </div>
            </div>

        )
    }
}

interface Props {
    id: number,
    quantityProduct: number,
    itemDelete(event : number) : void ,
}
interface State {

    id: number,
    quantityProduct: number,
    name: string,
    images: string,
    priceSale: number,
    price: number,
}