import { Product } from "../model/Product";

export class ProductService {
  list(): Product[] {   
    let jsonProduct = localStorage.getItem("danhSachSanPham");
    let product = JSON.parse(jsonProduct || "[]");

    return product;
  }
  getById = (id : number) => {
      const products = this.list();

      const product = products.find((item) =>{
        if(item.id === id)
        return true;
        else return false;
      })
      return product;
  }

  save = (product : Product[]) => { 
      let jsonProduct = localStorage.setItem('danhSachSanPham',JSON.stringify(product));
  } ;
  addProduct = (product: Product) => {
    //TODO: them san pham xuong local
    const products = this.list();
    products.push(product);
    this.save(products)
  };
  deleteProduct = (id : number , listProduct:Product[] )  => {
    console.log(id)
    let newArray = new  Array
    listProduct.map(item =>{
        item.id !== id ? newArray.push(item) : console.log()
    })
    console.log(newArray)
    this.save(newArray)
    return newArray 

  };
  updateProduct = (id : number ,listProduct:Product[] ) => {
    let newArray = new Array
    const product = this.list()
    product.map((item: any) => {
        item.idProduct === id ? newArray.push() : newArray.push(item)
    })
    this.save(product)
  }
}

export const productService = new ProductService();
