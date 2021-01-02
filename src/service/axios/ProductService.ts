import axios from 'axios';
import { Product } from './../../model/Product';

export class ProductService {

  list(): Promise<Product[]> {
    return axios.get(`http://localhost:5030/product`)
      .then(res => {
        console.log(res)
        return res.data
      });
  }
  getById = (id: number) => {
    axios.get(`http://localhost:5030/product/${id}`)
  }
  save = (product: Product[]) => {
  };
  addProduct = (product: Product) => {
    axios.post('http://localhost:5030/product', product);
  };
  deleteProduct = (id: number, listProduct: Product[]) => {
    axios.delete(`http://localhost:5030/product/${id}`).then(res => {
    
        let newArray = new Array
        listProduct.map(item => {
          item.id !== id ? newArray.push(item) : console.log()
        })
        console.log(newArray)
        return newArray
      
    })
  };
  updateProduct = (id: number, product: Product) => {
  }
}
export const productService = new ProductService();
