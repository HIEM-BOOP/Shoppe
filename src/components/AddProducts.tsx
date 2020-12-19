import React, { Component } from 'react'
import { Product } from '../model/Product'
import { productService } from '../service/ProductService';
import PopUpAddProduct from './PopUpAddProduct';
import PopUpUpdate from './PopUpUpdate';
import ProductAdded from './ProductAdded'


export default class AddProducts extends Component<{}, State> {
    constructor(props: any) {
        super(props);
        this.state = {
            isOpenPopup: false,
            isOpenPopupDate : false,
            products: productService.list() ,
            product : {id:0}
        }
    }
  /*   deleteProduct = (id : number) => {
        console.log(id)
        let newArray = new  Array
        this.state.products.map((item) =>{
            item.id !== id ? newArray.push(item) : console.log()
        })
        console.log(newArray)
        this.setState({products : newArray})
        let local = localStorage.setItem("danhSachSanPham" , JSON.stringify(newArray))


        
    } */
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
                                {
                                    this.state.products.map(item=> 
                                        <ProductAdded isUpdate = {() => {
                                            this.setState({
                                                isOpenPopupDate : true
                                            })
                                        }} product={item} key={item.id} 
                                        itemDelete={(id) =>{
                                           
                                            productService.deleteProduct(id , this.state.products )
                                            this.setState({products : productService.deleteProduct(id , this.state.products )})
                                        }}
                                            setProduct={(event : Product)=>{
                                                this.setState({product:event})
                                            }}

                                        />
                                        )
                                }
                            </div>
                        </div>
                    </div>
                </div>
                {this.state.isOpenPopup && <PopUpAddProduct turnOffPopUpAdd = {this.closePopup}  />}
                {this.state.isOpenPopupDate && <PopUpUpdate product={this.state.product } setProduct={ (product : Product) =>{
                    product =this.state.product
                    
                } }  isOpenPopUpDate = {this.closePopupUpdate}  />}
            </div>

        )
    }
   
    closePopup = () => {
        this.setState({
            isOpenPopup : false ,
            
        })
         
     }
     closePopupUpdate = () => {
         this.setState({
             isOpenPopupDate : false 
         })
     }

     isUpdate = () => {
         this.setState({
             isOpenPopupDate : true 

         })
       
         
     }
}
interface State {
    isOpenPopup: boolean,
    isOpenPopupDate : boolean ,
    products : Product[]
    product :Product
}  
