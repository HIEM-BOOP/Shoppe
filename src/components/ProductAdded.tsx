import React, { Component } from 'react'
import { AiFillDelete } from "react-icons/ai";

export default class ProductAdded extends Component {
    render() {
        return (
            <div>

                <div className="productCard">
                    <div className="setting">
                        <span className="material-icons" onClick={(event) => {
                        }}><AiFillDelete style={{ fontSize: 30 }} /></span>
                    </div>
                    <img
                        src=""
                        alt=""
                    />
                    <div className="nameProduct">
                        <p> "" </p>
                    </div>
                    <div className="price">
                        <p>
                            <span className="afterSale"></span>
                            <span className="beforSale">10đ</span>
                        </p>
                    </div>
                    <div className="button">
                        <button className="btn btn-primary"
                        >Chỉnh sửa</button>
                    </div>

                </div>

            </div>

        )
    }
}
