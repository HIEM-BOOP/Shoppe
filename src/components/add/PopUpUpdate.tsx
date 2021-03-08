import React, { Component } from 'react'
import { Product } from '../../model/Product';
import { productService } from '../../service/axios/ProductService';


export default class PopUpUpdate extends Component<Props, State> {
    constructor(props: any) {
        super(props);
        this.state = this.props.product

        console.log(this.props.product)
    }
    render() {
        return (

            <div className="pop-up" id="popUpEditProduct"><div className="container">
                <div className="content">
                    <h1 className="title">Chỉnh sửa thông tin sản phẩm</h1>
                    <div className="item">
                        <label htmlFor="name">Tên sản phẩm</label>
                        <input type="text" id="nameProduct" name="name" defaultValue={this.props.product.name} onChange={(event) => {
                            this.setState({ name: event.target.value })
                        }} />
                    </div>
                    <div className="item">
                        <label htmlFor="afterSale">Giá bán</label>
                        <input type="number" id="afterSale" name="afterSale" defaultValue={this.props.product.salePrice}
                            onChange={(event) => {
                                this.setState({
                                    salePrice: event.target.valueAsNumber
                                })
                            }}
                        />
                    </div>
                    <div className="item">
                        <label htmlFor="beforSale">Giá gốc</label>
                        <input type="number" id="beforSale" name="beforSale" defaultValue={this.props.product.price}
                            onChange={(event) => {
                                this.setState({
                                    price: event.target.valueAsNumber
                                })
                            }} />
                    </div>
                    <div className="item">
                        <label htmlFor="imgProduct">Hình ảnh sản phẩm</label>
                        <input type="url" id="imgProduct" name="imgProduct" defaultValue={this.props.product.image}

                            onChange={(event) => {
                                this.setState({
                                    image: event.target.value
                                })
                                console.log(this.state.image);

                            }}
                        />
                    </div>
                    <div className="button-item">
                        <button className="btn btn-primary"
                            onClick={() => {
                                productService.updateProduct(this.props.product?.id || "null", this.state);
                                this.props.isOpenPopUpDate()
                                // alert("Bạn đã sữa thành công")
                                window.location.href = "http://localhost:3000/add-products"
                            }}
                        >Lưu</button>
                        <button className="btn btn-outline" onClick={() => {
                            this.props.isOpenPopUpDate()
                        }}>Hủy</button>
                    </div>
                </div>
            </div>
            </div>


        )
    }
}
interface Props {
    isOpenPopUpDate(): void
    setProduct(product: Product): void
    product: Product

}
type State = Product