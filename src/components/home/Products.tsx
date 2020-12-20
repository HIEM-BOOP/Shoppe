import React, { Component } from 'react'
import { Product } from '../../model/Product'
import { productService, ProductService } from '../../service/ProductService';
import ProductItem from './ProductItem'

export default class Products extends Component<{},State> {
    
    constructor(props: any){
        super(props);
        this.state = {
            products: productService.list() ,
        }
    }

    render() {
        return (
            <div className="products">
            <div className="container">
                <div className="content" id="products">
                  {
                      this.state.products.map(item => 
                          <ProductItem product= {item}></ProductItem>
                      )
                  }
                </div>
            </div>
        </div>
        )
    }
}

interface State {
    products: Product[]
}
