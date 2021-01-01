import React, { Component } from 'react'
import BuyerInformation from '../components/cart/BuyerInformation'
import BuyingList from '../components/cart/BuyingList'
import Header from '../components/Header'
import { CartProduct } from '../model/CartProduct';

import { cartService, CartService } from '../service/CartService'

export default class Cart extends Component<{}, State> {

    constructor(props : any){
        super(props);
        this.state = {
            listCarts : cartService.list(),
            true : true
        }
    }
    render() {
        return (
            <div className='container-list-cart'>
                <Header/>
                {
                   this.state.true === true && <BuyingList listCart = {this.state.listCarts} />
                }
                <BuyerInformation  />
            </div>
        )
    }
}
export interface State  {
    listCarts : CartProduct[]
    true: boolean
}