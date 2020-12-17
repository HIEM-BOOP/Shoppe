import React, { Component } from 'react';
import CartProduct from './CartProduct';
import TotalAmounts from './TotalAmounts';

class BuyingList extends Component {
    render() {
        return (
            <div>
                <div className="buyingList">
                    <div className="container">
                        <div className="content">
                            <h1 className="title">Giỏ hàng của bạn</h1>
                            <div className="headList">
                                <div className="item-headList" />
                                <div className="item-headList"><span>Sản phẩm</span></div>
                                <div className="item-headList"><span>Đơn giá</span></div>
                                <div className="item-headList"><span>Số lượng</span></div>
                                <div className="item-headList"><span>Tổng tiền</span></div>
                                <div className="item-headList"><span>Thao tác</span></div>
                            </div>
                            <div className="productInfor" id="carts" />
                            <CartProduct/>
                            <CartProduct/>
                            <CartProduct/>

                        </div>
                            <TotalAmounts/>
                    </div>
                </div>
                {/* THÔNG TIN KHÁCH HÀNG  */}
                <div className="buyerInformation" id="buyerInformation">
                </div>
                <div className="popUpOrder" id="popUpWinOrder">
                </div>
            </div>
        );
    }
}

export default BuyingList;