import React, { Component } from 'react'
import { CartProduct } from '../model/CartProduct';
import { Product } from '../model/Product'

export default class ProductItem extends Component<Props, State> {
    constructor(props: any) {
        super(props);

        this.state = {
            cartItem: {
                id: this.props.product.id,
                quantityProduct: 1,
            },
            objItem: {
                id: this.props.product.id,
                price: this.props.product.price,
                priceSale: this.props.product.priceSale,
                name: this.props.product.name,
                images: this.props.product.images
            }

        }
        let json = localStorage.getItem('cart');
        let products = JSON.parse(json || '[]');
        console.log(products);
        products.map((item: any) => {
            if (item === this.state.cartItem.id) {
                this.state = {
                    cartItem: {
                        id: this.props.product.id,
                        quantityProduct: this.state.cartItem.quantityProduct
                    },
                    objItem: {
                        id: this.props.product.id,
                        priceSale: this.props.product.priceSale,
                        price: this.props.product.price,
                        images: this.props.product.images,
                        name: this.props.product.name,

                    }
                }
            }
        })
    }

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
                            console.log("hAHA");
                            /* const cartnew = []  */
                            let arrayNew = {
                                id: this.state.cartItem.id,
                                quantityProduct: this.state.cartItem.quantityProduct
                            }

                            let jsonProduct = localStorage.getItem("cart");
                            let products = JSON.parse(jsonProduct || "[]");

                            products.map((item: any) => {
                                if (item.id === this.props.product.id) {
                                    item.quantityProduct = item.quantityProduct++;
                                }
                                
                            })
                            console.log(this.state.cartItem.id+ "+++");

                            let kiemTra = false;
                            let isExit = false;

                            products.forEach((item: any) => {
                                if (item.idProduct === this.state.cartItem.id) {
                                    arrayNew.quantityProduct = item.quantityProduct++
                                    localStorage.setItem("cart", JSON.stringify(products));
                                    alert('Chúc mừng bạn đã tăng thành công');
                                    isExit = true;

                                }
                                if (item.idProduct !== this.props.product.id) { kiemTra = true }

                            })
                            if (!isExit) {
                                let objShopee = arrayNew
                                products.push(objShopee)
                                localStorage.setItem("cart", JSON.stringify(products));
                                alert('Chúc mừng bạn đã thêm thành công')
                            }

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
    objItem: Product
    cartItem: CartProduct
}