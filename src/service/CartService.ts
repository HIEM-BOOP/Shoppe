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

  delete = (id: number, listCart: CartProduct[]) => {
    listCart = listCart.filter((item) => item.id !== id);
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
  addToCart(productId: number) {
    // buoc 1: lay danh sach cart
    const cart = this.list();
    // buoc 2: kiem tra ton tai
    const item = cart.find((item) => item.id === productId);
    // buoc 3: neu khong ton tai thi push moi
    if (item === undefined) {
      cart.push({
        id: productId,
        quantityProduct: 1,
      });
      this.save(cart);
      alert("Bạn đã thêm vào thành công")
    }
    // buoc 4: neu da ton tai, thi tim trong danh sach ra dung san pham va tang so luong
    else {
      if (item.id === productId) {
        item.quantityProduct++;
        this.save(cart);
        alert("Sản phẩm đã được tăng thêm ")
      }

    }
  }
}

export const cartService = new CartService();
  