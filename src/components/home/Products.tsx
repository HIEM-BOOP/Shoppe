import React, { Component, useEffect, useState } from 'react'
import { Product } from '../../model/Product'
import PopUpnotifycation from '../notifycation/PopUpnotifycation';
import ProductItem from './ProductItem'
import Pagination from '@material-ui/lab/Pagination';
import { Typography } from '@material-ui/core';
import { productService } from '../../service/axios/ProductService';
import { PaginationProduct } from '../../model/PaginationProduct';

export default function Products() {
    const [state, setstate] = useState<PaginationProduct>({
            product: [],
            page: 1,
            pageSize: 6,
            totalPage: 1,
        // isNotifycation: false

    })
    useEffect(() => {
        productService.list(state?.page, state?.pageSize).then(
            paging => {
                setstate({
                        product: paging.product,
                        page: paging.page,
                        pageSize: paging.pageSize,
                        totalPage: paging.totalPage
                })
                console.log(state?.page)
                console.log(state?.product)
            }
        )
    }, [state?.page])
    // const closePopup = () => {
    //     setstate({
    //         isNotifycation: true,

    //     })
    //     setTimeout(() => {
    //         setstate({
    //             isNotifycation: false
    //         })
    //     }, 2000);
    // }

    const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
        
        setstate({
                ...state,
                page: value
        })
    }
    return (
        <div className="products">
            <div className="container">
                <div className="content" id="products">
                    {
                        state?.product?.map((item: any)=>
                            <ProductItem /* onNotifycation={ closePopup} */ product={item}></ProductItem>
                        )
                    }
                </div>
            </div>
            {/* {state.isNotifycation && <PopUpnotifycation />} */}
            <div className="content" style={{ width: '1100px', margin: 'auto', alignItems: "center", padding: '10px', justifyContent: "center" }}>
                <Typography>Page: {state?.page}</Typography>
                <Pagination count={state?.totalPage} page={state?.page} color="secondary" onChange={handleChange} showFirstButton showLastButton />
            </div>
        </div>
    )
}

export interface State {
    products?: PaginationProduct,
    isNotifycation?: boolean,
}
