import axios from 'axios';
import { CartProduct } from './../../model/CartProduct';


export class CartService {
  
  list():  Promise<CartProduct[]> {
    return axios.get(`http://localhost:5030/cart`).then(res =>{
        console.log(res);
        return res.data
      })
  }
  delete = (id: number, listCart: CartProduct[]) => {
    
  };
  /**
   * Dua san pham vao gio hang
   * Neu san pham da ton tai, thi tang so luong
   * Neu san pham chua ton tai, thi them moi va so luong mac dinh la 1
   * @date 2020-12-19
   * @param {any} productId:number
   * @returns {any}
   */


  addToCart(productId: number) {
    
  }

}

export const cartService = new CartService();
  