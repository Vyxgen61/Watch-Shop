import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import "../../App.css";
import "./style.css";

ProductList.propTypes = {
    
};

function ProductList() {
    const [productList ,setProductList] = useState([])
    const [limitShow ,setLimitShow] = useState(8)
    
    const getProductList = () => {
        fetch('https://radiant-stream-23882.herokuapp.com/api/v1/product')
        .then(response => response.json())
        .then(brand => setProductList(brand.data));
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


    const handleShowMoreProduct = () => {
        setLimitShow(limitShow + 4)
    }

    const ClassifyWatch = [
     {
         id :1,
         title :'Đồng hồ nam',
         data:watchOfMale,
     },
     {
         id :2,
         title :'Đồng hồ nữ',
         data:watchOfFemale,
     },
    ]

    return (
        <>
            {
                ClassifyWatch.map((dataWatch) => (
                    <div className = "section_wrap" key={dataWatch.id}>
                    <div className ="section_title">
                        <div className ="seperate"></div>
                        <h3 className ="name">{dataWatch.title}</h3>
                    </div>
                    <div className ="list_wrap">
                        {dataWatch.data.slice(0,limitShow).map((product) => (
                            <div className="product" key={product._id}>
                               <img className='product_img' src={`https://radiant-stream-23882.herokuapp.com/img/product/${product.logo}`} alt={product.logo} />
                               <span className="product_name">{product.title}</span>
                               <span className="product_price">{product.price.toLocaleString('vi', {style : 'currency', currency : 'VND'})}</span>
                               <div className="icon"><i class="fa-solid fa-cart-arrow-down"></i></div>
                           </div>
                        ))}
                    </div>
                    <button className="read_more" onClick= {handleShowMoreProduct} >XEM TẤT CẢ</button>
                </div>
                ))
            }
        </>
    );
}

export default ProductList;