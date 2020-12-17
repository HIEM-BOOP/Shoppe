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
  deleteProduct = (id : number , listProduct:Product[] )  => {
    console.log(id)
    let newArray = new  Array
    listProduct.map(item =>{
        item.id !== id ? newArray.push(item) : console.log()
    })
    console.log(newArray)
    let local = localStorage.setItem("danhSachSanPham" , JSON.stringify(newArray))
    return newArray



  };
}

export const productService = new ProductService();
