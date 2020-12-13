import { Product } from "../model/Product";

export class ProductService {
  
  list(): Product[] {
    let jsonProduct = localStorage.getItem("danhSachSanPham");
    let product = JSON.parse(jsonProduct || "[]");

    return product;
  }
  addProduct = (product: Product) => {
    //TODO: them san pham xuong local
    
  }

  
}

export const productService = new ProductService();
