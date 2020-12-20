import React, { Component } from 'react'
import { Product } from '../../model/Product'
import { productService } from '../../service/ProductService';
import PopUpAddProduct from './PopUpAddProduct';
import PopUpUpdate from './PopUpUpdate';
import ProductAdded from './ProductItem'


export default class AddProducts extends Component<{}, State> {
    constructor(props: any) {
        super(props);
        this.state = {
            isOpenPopupAdd: false,
            isOpenPopupDate: false,
            products: productService.list(),
            product: { id: 0 }
        }
    }
    render() {
        return (
            <div>
                <div className="them-sp">
                    <div className="container">
                        <div className="content">
                            <div className="addProduct">
                                <h1 className="title">DANH SÁCH SẢN PHẨM TRONG KHO</h1>
                                <button className="btn btn-primary" onClick={() => {
                                    this.setState({
                                        isOpenPopupAdd: true
                                    })
                                }}>Thêm sản phẩm</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="pr">
                    <div className="products">
                        <div className="container">
                            <div className="content" id="products">
                                {
                                    this.state.products.map(item =>
                                        <ProductAdded
                                            onUpdate={() => {
                                                this.setState({
                                                    isOpenPopupDate: true
                                                })
                                            }} product={item} key={item.id}
                                            onDelete={(id) => {
                                                productService.deleteProduct(id, this.state.products)
                                                this.setState({ products: productService.deleteProduct(id, this.state.products) })
                                            }}
                                            onSetProduct={(event: Product) => {
                                                console.log(event);
                                                this.setState({ product: event })
                                            }}

                                        />
                                    )
                                }
                            </div>
                        </div>
                    </div>
                </div>
                {this.state.isOpenPopupAdd && <PopUpAddProduct turnOffPopUpAdd={this.closePopup} />}
                {this.state.isOpenPopupDate && <PopUpUpdate product={this.state.product} setProduct={(product: Product) => {
                    console.log(product)
                    console.log("====")
                    product = this.state.product
                }} isOpenPopUpDate={this.closePopupUpdate} />}
            </div>
        )
    }

    closePopup = () => {
        this.setState({
            isOpenPopupAdd: false,
        })
    }

    closePopupUpdate = () => {
        this.setState({
            isOpenPopupDate: false
        })
    }

    isUpdate = () => {
        this.setState({
            isOpenPopupDate: true

        })


    }
}
interface State {
    isOpenPopupAdd: boolean,
    isOpenPopupDate: boolean,
    products: Product[]
    product: Product
}  
