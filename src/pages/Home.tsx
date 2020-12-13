import React, { Component } from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Products from '../components/Products'
import products from '../components/Products'
import Showcase from '../components/Showcase'

export default class Home extends Component {
    render() {
        return (
            <div>
                <Header></Header>
                <Showcase></Showcase>
                <Products></Products>
                <Footer></Footer>
            </div>
        )
    }
}
