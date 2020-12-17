import React, { Component } from 'react'
import { Product } from '../model/Product';


export default class PopUpUpdate extends Component<Props , State> {

    render() {
        return (
            
                <div className="pop-up" id="popUpEditProduct"><div className="container">
                    <div className="content">
                        <h1 className="title">Chỉnh sửa thông tin sản phẩm</h1>
                        <div className="item">
                            <label htmlFor="name">Tên sản phẩm</label>
                            <input type="text" id="nameProduct" name="name" defaultValue= {this.props.product.name} />
                        </div>
                        <div className="item">
                            <label htmlFor="afterSale">Giá bán</label>
                            <input type="number" id="afterSale" name="afterSale" defaultValue={this.props.product.priceSale} />
                        </div>
                        <div className="item">
                            <label htmlFor="beforSale">Giá gốc</label>
                            <input type="number" id="beforSale" name="beforSale" defaultValue={this.props.product.price} />
                        </div>
                        <div className="item">
                            <label htmlFor="imgProduct">Hình ảnh sản phẩm</label>
                            <input type="url" id="imgProduct" name="imgProduct" defaultValue={this.props.product.images} />
                        </div>
                        <div className="button-item">
                            <button className="btn btn-primary"
                            onClick = {() => {
                                this.props.setProduct(this.props.product)
                                console.log(this.props.setProduct(this.props.product));
                                
                            }}
                            >Lưu</button>
                            <button className="btn btn-outline" onClick = {() => {
                                this.props.isOpenPopUp()
                            }}>Hủy</button>
                        </div>
                    </div>
                </div>
                </div>
                 
           
        )
    }
}
interface Props {
    isOpenPopUp() : void
    product : Product
    setProduct( product : Product ) : Product



}
interface State {
    
}