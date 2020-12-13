import { Product } from "../model/Product";

export class ProductService {
  list(): Product[] {
      let jsonproduct =  localStorage.getItem('danhsachsanpham');
      let product = JSON.parse(jsonproduct || '[]');

    return product ;
    
        
  }
   addProduct () {
     
   }


}

export const productService = new ProductService() ;
