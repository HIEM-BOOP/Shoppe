import React, { Component } from 'react'
import { Product } from '../../model/Product'
import { productService } from '../../service/axios/ProductService';
import PopUpnotifycation from '../notifycation/PopUpnotifycation';
import ProductItem from './ProductItem'

export default class Products extends Component<{}, State> {

    constructor(props: any) {
        super(props);
        this.state = {
            products:[],
            isNotifycation: false,
        }
    }

    componentDidMount(){
        productService.list().then(products =>{
            console.log(products)
            this.setState({
                products:products
            })
        })
    }
    render() {
        return (
            <div className="products">
                <div className="container">
                    <div className="content" id="products">
                        {
                            this.state.products.map(item =>
                                <ProductItem onNotifycation={this.closePupup} product={item}></ProductItem>
                            )
                        }
                    </div>
                </div>
                {this.state.isNotifycation && <PopUpnotifycation />}
            </div>
        )
    }

    closePupup = () => {
        this.setState({
            isNotifycation : true
        })
        setTimeout(
            () => this.setState({
                isNotifycation: false,
            }),
            2000 , 
            );
        
    }
    
}

interface State {
    products: Product[],
    isNotifycation: boolean,
}
