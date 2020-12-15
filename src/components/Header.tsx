import React, { Component } from 'react';
import { AiOutlineShoppingCart, AiOutlineDropbox } from "react-icons/ai";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
export default class Header extends Component {
    render() {
        return (
            <div>
                <div className="nav-bar">
                    <div className="contaner">
                        <div className="content">
                            <ul className="menu-left-lv1">
                                <li className="menu">
                                    <a href="/src/pages/Home.tsx" className="menu-lv1">Home</a>
                                </li>
                                <li className="menu">
                                    <a href="/src/pages/Home.tsx" className="menu-lv1">Quần áo</a>
                                    <ul className="menu-left-lv2">
                                        <li className="menu-lv2">
                                            <a href="">Quần áo nam</a>
                                        </li>
                                        <li className="menu-lv2">
                                            <a href="">Quần áo nữ</a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="menu">
                                    <a href="" className="menu-lv1">Phụ kiện</a>
                                </li>
                                <li className="menu">
                                    <a href="" className="menu-lv1">Đồ điện tử</a>
                                    <ul className="menu-left-lv2">
                                        <li className="menu-lv2">
                                            <a href="" >Điện thoại</a>
                                        </li>
                                        <li className="menu-lv2">
                                            <a href="">Đồ gia dụng</a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                            <ul className="menu-right-lv1">
                                <li className="menu">
                                    <Link to="#" className="fas" >< AiOutlineDropbox style={{ fontSize: 25 }} /></Link>

                                </li>
                                <li className="menu">
                                    <Link to="/add-products" className="fas fa-box-open" ><AiOutlineShoppingCart style={{ fontSize: 25 }} />Kho Hàng</Link>

                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}