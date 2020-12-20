import React, { Component } from 'react'
import { Product } from '../../model/Product';
import { productService } from '../../service/ProductService';


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
                        <input type="number" id="afterSale" name="afterSale" defaultValue={this.props.product.priceSale}
                            onChange={(event) => {
                                this.setState({
                                    priceSale: event.target.valueAsNumber
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
                        <input type="url" id="imgProduct" name="imgProduct" defaultValue={this.props.product.images}

                            onChange={(event) => {
                                this.setState({
                                    images: event.target.value
                                })
                                console.log(this.state.images);

                            }}
                        />
                    </div>
                    <div className="button-item">
                        <button className="btn btn-primary"
                            onClick={() => {
                                productService.updateProduct(this.props.product.id,this.state);
                                alert("Bạn đã sữa thành công")
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