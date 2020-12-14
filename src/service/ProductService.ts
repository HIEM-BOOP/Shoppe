import { Product } from "../model/Product";

export class ProductService {
  list(): Product[] {
    let jsonProduct = localStorage.getItem("danhSachSanPham");
    let product = JSON.parse(jsonProduct || "[]");

    return product;
  }
  addProduct = (product: Product) => {
    //TODO: them san pham xuong local
    let jsonProducts = localStorage.getItem("danhSachSanPham");
    let products = JSON.parse(jsonProducts || "[]");
    products.push(product);
    localStorage.setItem("danhSachSanPham", JSON.stringify(products));
  };
  deleteProduct = (id: number) => {
    let jsonProduct = localStorage.getItem("danhSachSanPham");
    let product = JSON.parse(jsonProduct || "[]");
    console.log(id);

    
    
  };
}

export const productService = new ProductService();
