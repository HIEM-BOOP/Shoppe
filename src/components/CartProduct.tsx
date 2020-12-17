import React, { Component } from 'react'

import { AiFillDelete } from "react-icons/ai";

export default class CartProduct extends Component {
    render() {
       
        return (
            <div>
                <div className="cart">
                    <div className="detailInfor">
                        <div className="img-item">
                            <img src="https://p.ipricegroup.com/uploaded_f35ab8869d582eff3577af47a03f9315.jpg" />
                        </div>
                    </div>
                    <div className="detailInfor"><span>Học Bài React js </span></div>
                    <div className="detailInfor">
                        <span className="afterSale">0đ</span>
                        <span className="beforSale">0đ</span>
                    </div>
                    <div className="detailInfor">
                        <input type="number" min={1} id="quantityProduct"  defaultValue={1} />
                    </div>
                    <div className="detailInfor">
                        <span>0đ</span>
                    </div>
                    <div className="detailInfor">
                        <AiFillDelete  style = {{fontSize : 30 , color : 'red'}}/>
                        
                    </div>
                </div>
               </div>

        )
    }
}
