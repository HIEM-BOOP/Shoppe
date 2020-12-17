import { CartProduct } from "../model/CartProduct";
import { Product } from "../model/Product";

export class CartService {
    list(): CartProduct[] {
        let jsonProduct = localStorage.getItem("cart");
        let product = JSON.parse(jsonProduct || "[]");
    
        return product;
      }
      deleteCart =  (id : number , listCart : CartProduct[]) => {
        console.log(id);

        let newArray = new Array 
        listCart.map(item => {
          item.id !== id ? newArray.push(item) : console.log("Haha")
          
        })
        
        let jsonProduct = localStorage.setItem('cart' , JSON.stringify(newArray))
        
        console.log(jsonProduct)
        console.log(newArray)
        
        return newArray
        
        
      }
      
    }
    export const cartService = new CartService();