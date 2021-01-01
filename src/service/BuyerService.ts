import { BuyerProduct } from './../model/BuyerProduct';
export class BuyerService {
    list():BuyerProduct[]{
        let jsonBuyer = localStorage.getItem("buyer");
        let buyer = JSON.parse(jsonBuyer || "[]");
        return buyer;
    }

    save = (buyer : BuyerProduct[]) => {
        let jsonBuyer = localStorage.setItem("buyer", JSON.stringify(buyer));
      };

    addBuyer = (buyer : BuyerProduct ) => {
        let buyers = this.list();
        buyers.push(buyer) ;
        this.save(buyers)    


    };

}

export const buyerService = new BuyerService() ;