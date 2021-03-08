import React, { Component } from 'react'
import { Product } from '../../model/Product';
import { productService } from '../../service/axios/ProductService'
import ckeditor from '@ckeditor/ckeditor5-react'
export default class PopUpAddProduct extends Component<Props, State> {
    constructor(props: any) {
        super(props);
        this.state = {
            product: {
                id: 'new Date().getTime()',
                image: '',
                name: '',
                price: 0,
                salePrice: 0,
            }

        }
    }
    render() {
        console.log(this.state.product.image);
        return (
            <div>
                <div className="pop-up" id="popUpEditProduct"><div className="container">
                    <div className="content">
                        <h1 className="title">Nhập thông tin sản phẩm</h1>
                        <div className="item">
                            <label htmlFor="name">Tên sản phẩm</label>
                            <input type="text" id="nameProduct" name="name" placeholder="Nhập tên sản phẩm"
                                onChange={(event) => {
                                    const curentProduct = this.state.product;
                                    curentProduct.name = event.target.value;
                                    this.setState({
                                        product: curentProduct
                                    })
                                }
                                }
                                value={this.state.product.name}
                            />

                        </div>
                        <div className="item">
                            <label htmlFor="afterSale">Giá bán</label>
                            <input type="number" id="afterSale" name="afterSale" placeholder="Nhập giá bán"
                                onChange={(event) => {
                                    let currentProduct = this.state.product;
                                    currentProduct.salePrice = event.target.valueAsNumber;
                                    this.setState({
                                        product: currentProduct
                                    })
                                }}
                                value={this.state.product.salePrice}
                            />
                        </div>
                        <div className="item">
                            <label htmlFor="beforSale">Giá gốc</label>
                            <input type="number" id="beforSale" name="beforSale" placeholder="Nhập giá gốc"
                                onChange={(event) => {
                                    const currentProduct = this.state.product;
                                    currentProduct.price = event.target.valueAsNumber;
                                    this.setState({
                                        product: currentProduct
                                    })
                                }}
                                value={this.state.product.price}
                            />


                        </div>
                        <div className="item">
                            <label htmlFor="imgProduct">Hình ảnh sản phẩm</label>
                            <input type="file" pattern="https?://.+" title="Bắt đầu với http hoặc https" id="imgProduct" name="imgProduct" placeholder="Nhập link hình ảnh sản phẩm (Khuyến khích ảnh dạng hình vuông)"
                                onChange={(event) => {
                                    // const currentProduct = this.state.product;
                                    // currentProduct.image = event.target.value;
                                    // this.setState({
                                    //     product: currentProduct
                                    // })
                                    this.uploadImage(event);
                                }}
                            // value={this.state.product.image}

                            />

                        </div>
                        <div className="item">
                            <label htmlFor="">Nội dung sản phẩm</label>
                            {/* <input type="text" name="description" /> */}
                           
                        </div>
                        <div className="button-item">
                            <button className="btn btn-outline" onClick={() => {
                                this.props.turnOffPopUpAdd()
                            }} >Hủy</button>
                            <button className="btn btn-primary" onClick={() => {
                                this.addProduct()
                                setTimeout(() => {
                                    this.props.turnOffPopUpAdd()
                                }, 1000)
                            }} >Tạo sản phẩm mới</button>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        )
    }
    addProduct = () => {
        console.log(this.state.product)
        const list = this.state.product
        productService.addProduct(list)
    }
    // 
    uploadImage = async (event: any) => {
        const file = event.target.files;
        const base64 = await this.converBase64(file);
        console.log('HAHA => ', base64);
        this.setState({
            product: {
                ...this.state,
                image: base64
            }
        })
    }
    // 
    converBase64 = (file: any) => {

        return new Promise((resolve, reject) => {

            const fileReader = new FileReader();
            fileReader.readAsDataURL(file[0]);

            fileReader.onload = () => {
                resolve(fileReader.result);
            }

            fileReader.onerror = (error) => {
                reject(error);
            }
        });
    };
}
interface Props {
    turnOffPopUpAdd(): void

}

interface State {
    product: Product
}


