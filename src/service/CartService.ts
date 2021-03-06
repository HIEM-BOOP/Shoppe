import { count } from "console";
import { isTypeQueryNode } from "typescript";
import { CartProduct } from "../model/CartProduct";
import { Product } from "../model/Product";

export class CartService {
  
  list(): CartProduct[] {
    let jsonProduct = localStorage.getItem("cart");
    let product = JSON.parse(jsonProduct || "[]");
    return product;
  }

  save = (cart: CartProduct[]) => {
    let jsonProduct = localStorage.setItem("cart", JSON.stringify(cart));
  };

  delete = (id: string, listCart: CartProduct[]) => {
    listCart = listCart.filter((item) => item.productId !== id);
    this.save(listCart);
    return listCart;
  };
  /**
   * Dua san pham vao gio hang
   * Neu san pham da ton tai, thi tang so luong
   * Neu san pham chua ton tai, thi them moi va so luong mac dinh la 1
   * @date 2020-12-19
   * @param {any} productId:number
   * @returns {any}
   */


  addToCart(productId: string) {
    // buoc 1: lay danh sach cart
    const cart = this.list();
    // buoc 2: kiem tra ton tai
    const item = cart.find((item) => item.productId === productId);
    // buoc 3: neu khong ton tai thi push moi
    if (item === undefined) {
      cart.push({
        productId: productId,
        quantity: 1,
      });
      this.save(cart);
    }
    // buoc 4: neu da ton tai, thi tim trong danh sach ra dung san pham va tang so luong
    else {
      if (item.productId === productId) {
        item.quantity++;
        this.save(cart);
      }

    }
  }

}

export const cartService = new CartService();
  