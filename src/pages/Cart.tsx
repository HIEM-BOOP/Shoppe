import React, { Component } from 'react'
import BuyerInformation from '../components/BuyerInformation'
import BuyingList from '../components/BuyingList'
import Header from '../components/Header'

export default class Cart extends Component {
    render() {
        return (
            <div className='container-list-cart'>
                <Header/>
                <BuyingList/>
                <BuyerInformation/>
            </div>
        )
    }
}
