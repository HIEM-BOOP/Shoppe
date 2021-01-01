import React, { Component } from 'react'

export default class Notifycation extends Component {
    render() {
        return (
            <div>
                <div className="notification">
                        <h1 className="title">Giỏ hàng của bạn đang trống. Quay lại để lựa chọn sản phẩm yêu thích nhé!</h1>
                        <i className="fas fa-store fa-3x" aria-hidden="true"></i>
                        <a className="btn btn-primary" href="/index.html">Quay lại trang chủ</a>
                    </div>
            </div>
        )
    }
}
