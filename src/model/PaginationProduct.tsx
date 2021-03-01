import { Product } from "./Product";

export interface PaginationProduct {
    product ?: Product[],
    page : number ,
    pageSize ?: number ,
    totalPage ?: number ,
}
