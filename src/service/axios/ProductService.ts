import { PaginationProduct } from './../../model/PaginationProduct';
import axios from 'axios';
import { Product } from './../../model/Product';


export class ProductService {

  list(page: any, pageSize: any): Promise<PaginationProduct> {
    return axios.get(`http://localhost:8080/API/product`)
      .then(res => {
        const product = res.data;
        const start = (page - 1) * pageSize;
        const end = start + pageSize;
        

        return Promise.resolve({
          page: page,
          pageSize: pageSize,
          totalPage: product.length / pageSize,
          product: product.slice(start, end)
        })

      });
  }

  list1():  Promise<Product[]> {
    return axios.get(`http://localhost:8080/API/product`).then(res =>{
        console.log(res);
        return res.data
      })
  }
  
  getById = (id: string) => {
    return axios.get(`http://localhost:8080/API/product/${id}`).then(res => {
      return res.data;
    })

  }
  
  save = (product: Product[]) => {
  };
  addProduct = (product: Product) => {
    axios.post('http://localhost:8080/API/product/', product);
  };
  deleteProduct = (id: string, listProduct: Product[]) => {
    axios.delete(`http://localhost:8080/API/product/${id}`).then(res => {
      let newArray = new Array
      listProduct.map(item => {
        item.id !== id ? newArray.push(item) : console.log()
      })
      console.log(newArray)
      return newArray

    })
  };
  updateProduct = (id: string, product: Product) => {
    return axios.put(`http://localhost:8080/API/product/`, product).then(res => {
      return res.data

    })
  }

}
export const productService = new ProductService();
