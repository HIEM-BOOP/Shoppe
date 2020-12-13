import React, { Component } from 'react'
import ProductAdded from './ProductAdded'

export default class AddProducts extends Component {
    render() {
        return (
            <div>
                <div>

                    <div className="them-sp">
                        <div className="container">
                            <div className="content">
                                <div className="addProduct">
                                    <h1 className="title">DANH SÁCH SẢN PHẨM TRONG KHO</h1>
                                    <button className="btn btn-primary">Thêm sản phẩm</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="pr">
                        <div className="products">
                            <div className="container">
                                <div className="content" id="products">

                                    <ProductAdded/>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
