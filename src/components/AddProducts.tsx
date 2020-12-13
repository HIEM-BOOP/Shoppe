import React, { Component } from 'react'
import PopUpAddProduct from './PopUpAddProduct';
import ProductAdded from './ProductAdded'


export default class AddProducts extends Component<{}, State> {
    constructor(props: any) {
        super(props);
        this.state = {
            isOpenPopup: false
        
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
                                <button className="btn btn-primary" onClick = {() => {
                                    this.setState({
                                        isOpenPopup : true 
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
                                <ProductAdded />
                            </div>
                        </div>
                    </div>
                </div>
                {this.state.isOpenPopup && <PopUpAddProduct turnOffPopUpAdd = {this.closePopup}  />}
            </div>

        )
    }
    turnOnPopUpAdd = () => {

    }
    closePopup = () => {
        this.setState({
            isOpenPopup : false ,
        })
         
     }

}
interface State {
    isOpenPopup: boolean,
}  
