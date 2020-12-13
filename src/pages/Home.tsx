import React, { Component } from 'react'
import Footer from '../components/Footer'
import Menu from '../components/Menu'
import Products from '../components/Products'
import products from '../components/Products'
import Showcase from '../components/Showcase'

export default class Home extends Component {
    render() {
        return (
            <div>
                <Menu></Menu>
                <Showcase></Showcase>
                <Products></Products>
                <Footer></Footer>
            </div>
        )
    }
}
