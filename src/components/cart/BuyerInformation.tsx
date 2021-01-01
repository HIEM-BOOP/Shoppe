import React, { Component } from 'react'
import { BuyerProduct } from '../../model/BuyerProduct';
import {buyerService} from '../../service/BuyerService';
import { productService } from '../../service/ProductService';


export default class BuyerInformation extends Component<{}, State> {
    constructor(props: any) {
        super(props);
        this.state = {
            buyer: {
                id:  new Date().getTime(),
                name: '',
                dateBirth: 0,
                email: '',
                numberPhone: '',
                time: 0,
            },
        }
    }
    render() {
        return (
            <div>
                <div className="buyerInformation" id="buyerInformation"><div className="container">
                    <div className="content">
                        <h1 className="title">Mua hàng</h1>
                        <div className="form">
                            <div className="customerInfo">
                                <label htmlFor="hoTen">Họ tên</label>
                                <input type="text" name="hoTen" id="nameCustomer"
                                    onChange={(e) => {
                                        let currentBuyer = this.state.buyer
                                        currentBuyer.name = e.target.value
                                        this.setState({
                                            buyer: currentBuyer
                                        })
                                        console.log(currentBuyer.name)
                                    }}
                                />
                                <p id="nameCustomerError" className="error">Tên người nhận không được bỏ trống</p>
                            </div>
                            <div className="customerInfo">
                                <label htmlFor="phonenumber">Số điện thoại</label>
                                <input type="number" name="phonenumber" id="phoneCustomer"
                                    onChange={(e) => {
                                        let currentBuyer = this.state.buyer
                                        currentBuyer.numberPhone = e.target.value
                                        this.setState({
                                            buyer: currentBuyer
                                        })
                                    }}
                                />
                                <p id="phoneCustomerError" className="error">SĐT người nhận không hợp lệ</p>
                            </div>
                            <div className="customerInfo">
                                <label htmlFor="email">Email</label>
                                <input type="email" name="email" id="emailCustomer"
                                    onChange={(e) => {
                                        let currentBuyer = this.state.buyer
                                        currentBuyer.email = e.target.value
                                        this.setState({
                                            buyer: currentBuyer
                                        })
                                    }}
                                />
                                <p id="emailCustomerError" className="error">Email người nhận không hợp lệ</p>
                            </div>
                            <div className="customerInfo">
                                <label htmlFor="birthday">Ngày sinh</label>
                                <input type="date" name="birthday" id="birthdayCustomer"
                                    onChange={(e) => {
                                        let currentBuyer = this.state.buyer
                                        currentBuyer.dateBirth = e.target.valueAsNumber
                                        this.setState({
                                            buyer: currentBuyer
                                        })
                                    }}
                                />
                            </div>
                            <div className="customerInfo">
                                <label htmlFor="recieveDate">Thời gian nhận hàng trong ngày 8-18h
          </label>
                                <input type="number" min={8} max={18} name="recieveday" id="recieveDay"
                                    onChange={(e) => {
                                        let currentBuyer = this.state.buyer
                                        currentBuyer.time = e.target.valueAsNumber
                                        this.setState({
                                            buyer: currentBuyer
                                        })
                                    }}
                                />
                            </div>
                            <div className="order">
                                <button className="btn btn-primary" onClick = {this.add}>Mua hàng</button>
                            </div>
                        </div>
                    </div>
                </div>
                </div>

            </div>
        )
    }
    add = () => {
        const list = this.state.buyer
        console.log(list);
        buyerService.addBuyer(list)
        window.localStorage.removeItem('cart');
      

    }
}


interface State {
    buyer: BuyerProduct,
}