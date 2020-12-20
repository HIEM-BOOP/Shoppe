import React, { Component } from 'react'

export default class BuyerInformation extends Component {
    render() {
        return (
            <div>
                <div className="buyerInformation" id="buyerInformation"><div className="container">
                    <div className="content">
                        <h1 className="title">Mua hàng</h1>
                        <div className="form">
                            <div className="customerInfo">
                                <label htmlFor="hoTen">Họ tên</label>
                                <input type="text" name="hoTen" id="nameCustomer" />
                                <p id="nameCustomerError" className="error">Tên người nhận không được bỏ trống</p>
                            </div>
                            <div className="customerInfo">
                                <label htmlFor="phonenumber">Số điện thoại</label>
                                <input type="number" name="phonenumber" id="phoneCustomer" />
                                <p id="phoneCustomerError" className="error">SĐT người nhận không hợp lệ</p>
                            </div>
                            <div className="customerInfo">
                                <label htmlFor="email">Email</label>
                                <input type="email" name="email" id="emailCustomer" />
                                <p id="emailCustomerError" className="error">Email người nhận không hợp lệ</p>
                            </div>
                            <div className="customerInfo">
                                <label htmlFor="birthday">Ngày sinh</label>
                                <input type="date" name="birthday" id="birthdayCustomer" />
                            </div>
                            <div className="customerInfo">
                                <label htmlFor="recieveDate">Thời gian nhận hàng trong ngày 8-18h
          </label>
                                <input type="number" min={8} max={18} name="recieveday" id="recieveDay" />
                            </div>
                            <div className="order">
                                <button className="btn btn-primary" >Mua hàng</button>
                            </div>
                        </div>
                    </div>
                </div>
                </div>

            </div>
        )
    }
}
