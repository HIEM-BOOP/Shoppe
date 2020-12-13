import React, { Component } from 'react'
import AddProducts from '../components/AddProducts'
import Home from './Home'

export default class Add extends Component {
    render() {
        return (
            <div>
               <Home/>
               <AddProducts/>
               
            </div>
        )
    }
}
