import React, { Component } from 'react';

class PopUpnotifycation extends Component {
    render() {
        return (
            <div>
                <div className="win-notification" id="winNotifyAddToCart">
                    <div className="content">
                        <p> <i className="fas fa-check-circle"></i> Thêm vào giỏ hàng thành công </p>
                    </div>
                </div>
            </div>
        );
    }
}

export default PopUpnotifycation;
