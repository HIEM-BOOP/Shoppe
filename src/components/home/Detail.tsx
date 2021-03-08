import React, { useState , useEffect} from 'react';
import NumberFormat from 'react-number-format';
import { Product } from '../../model/Product';
import { productService } from '../../service/axios/ProductService';






const Detail = () => {
    const [state, setstate] = useState<Product>({id : ''})
    useEffect(() => {
        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);
        const id_product = (urlParams.get("id") || "null");
        console.log("day la :",id_product);
        productService.getById(id_product).then((product) => {
            setstate({
                ...state,
                image : product.image ,
                name : product.name ,
                price : product.price ,
                salePrice : product.salePrice ,
            })
        })
    }, [])
    
    return (
        <div className="pop-up" id="popUpEditProduct"><div className="container">
            <div className="content" >
                <h1 className="title">Thông tin sản phẩm</h1>

                <div className="detail">
                    <div className="content_left" style={{ width: "300px", height: 'auto' }}>
                        <img src={state.image} alt="" />
                    </div>
                    <div className="content_right">
                        <div className="item">
                            <div className="nameProduct">
                                <h2>{state.name}</h2>
                            </div>
                            <div className="price"><span>
                            <NumberFormat value= {state.salePrice} displayType={'text'} thousandSeparator={true} prefix={'VND'} />
                                </span></div>
                        </div>
                        <div className="item">
                            <input type="number" name="" id="" min={1} />
                        </div>
                        <div className="item">
                            <p>Sản phẩm tốt chất lượng đến từ Hang dt , Sự đột phá về mặt công nghệ với cảm biến vân tay không cần chạm vào điện thoại chỉ cần đưa ra trước màn hình đã có thể quét đc vân tay ...Gắt chưa!!!</p>
                        </div>
                    </div>
                </div>
                <button className="btn btn-primary"
                onClick={() => {
                    window.location.href = "/home"
                }}
                >huy</button>
            </div>
        </div></div>
    );
}

export default Detail;
