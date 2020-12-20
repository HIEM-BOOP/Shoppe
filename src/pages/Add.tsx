import { Menu } from '@material-ui/core'
import React, { Component } from 'react'
import AddProducts from '../components/add/AddProducts'
import Header from '../components/Header'



export default class Add extends Component {
    render() {
        return (
            <div>
                <Header></Header>
                <AddProducts></AddProducts>
            </div>
            
        )
    }
}
