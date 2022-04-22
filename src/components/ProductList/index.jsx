import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import "../../App.css";
import "./style.css";
import {
    useRecoilState,
    useRecoilValue,
  } from 'recoil';
import { productListState } from '../../State/ProductState';
import { addToCart, cartState } from '../../State/CartState';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure()

function ProductList() {
    const [productList ,setProductList] = useRecoilState(productListState)
    const [limitShowMale ,setLimitShowMale] = useState(8)
    const [limitShowFemale ,setLimitShowFemale] = useState(8)
    const [isLoading, setIsLoading] = useState(true)
    const [cart, setCart] = useRecoilState(cartState);

    let navigate = useNavigate();

    const getProductList = () => {
        fetch('https://radiant-stream-23882.herokuapp.com/api/v1/product')
        .then(response => response.json())
        .then(brand => {
            setProductList(brand.data)
            setIsLoading(false)
        });
    }

    useEffect(() => {
        getProductList()
    },[])

    const watchOfMale = productList.filter((product) => {
        return product.type === 'nam'
    })
    
    const watchOfFemale = productList.filter((product) => {
        return product.type === 'nu'
    })


    const handleShowMoreProductMale = () => {
        setLimitShowMale(limitShowMale + 4)
    }
    const handleShowMoreProductFeMale = () => {
        setLimitShowFemale(limitShowFemale + 4)
    }
    
    const handleGoToDetail = (productID) => {
        navigate(productID)
    }

    const handleAddToCart = (product) => {
        const newCart = addToCart(cart, product);
        setCart(newCart);
        toast.success('Thêm vào giỏ hàng thành công.',
        {
            position: toast.POSITION.BOTTOM_RIGHT,
            theme: 'dark'
        })
    }

    const ClassifyWatch = [
     {
         id :1,
         title :'Đồng hồ nam',
         data:watchOfMale,
         limit: limitShowMale,
         handleShowMore : handleShowMoreProductMale,
     },
     {
         id :2,
         title :'Đồng hồ nữ',
         data:watchOfFemale,
         limit: limitShowFemale,
         handleShowMore : handleShowMoreProductFeMale,

     },
    ]


    return (
        <>
        {isLoading && 
             <div className='loading'>
                 <div className="loader"></div>
                 <h3>Đang lấy thông tin sản phẩm....</h3>
            </div>
         }
            {
                ClassifyWatch.map((dataWatch) => (
                    <div className = "section_wrap" key={dataWatch.id}>
                    <div className ="section_title">
                        <div className ="seperate"></div>
                        <h3 className ="name">{dataWatch.title}</h3>
                    </div>
                    <div className ="list_wrap">
                        {dataWatch.data.slice(0,dataWatch.limit).map((product) => (
                            <div className="product" key={product._id}>
                               <img  onClick ={() => handleGoToDetail(product._id)} className='product_img' src={`https://radiant-stream-23882.herokuapp.com/img/product/${product.logo}`} alt={product.logo}  />
                               <span className="product_name"  onClick ={() => handleGoToDetail(product._id)}>{product.title}</span>
                               <span className="product_price">{product.price.toLocaleString('vi', {style : 'currency', currency : 'VND'})}</span>
                               {product.amount !== 0 && <div className="icon" onClick={() => handleAddToCart(product)}><i className="fa-solid fa-cart-arrow-down"></i></div>}
                               {product.amount === 0 && <span className ="out_of_stock">Hết Hàng</span>}
                           </div>
                        ))}
                    </div>
                    <button className="read_more" onClick= {dataWatch.handleShowMore} >XEM THÊM</button>
                </div>
                ))
            }
        </>
    );
}

export default ProductList;