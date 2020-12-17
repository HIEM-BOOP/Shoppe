import { Product } from "../model/Product";

export class CartService {
    list(): Product[] {
        let jsonProduct = localStorage.getItem("danhSachSanPham");
        let product = JSON.parse(jsonProduct || "[]");
    
        return product;
      }
      
}