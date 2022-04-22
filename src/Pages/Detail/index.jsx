import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import ProductDetail from '../../components/ProductDetail';


function SingleProduct() {
    const location = useLocation();
    const productID = location.pathname;
    const [singleProduct, setSingleProduct] = useState({});

    useEffect(() => {
        if(productID){
        fetch(`https://radiant-stream-23882.herokuapp.com/api/v1/${productID}`)
        .then(response => response.json())
        .then(product => setSingleProduct(product.data));
        }
      },[productID])

    return (
        <div>
            <>
            <ProductDetail singleProduct = {singleProduct} />
            </>
        </div>
    );
}

export default SingleProduct;