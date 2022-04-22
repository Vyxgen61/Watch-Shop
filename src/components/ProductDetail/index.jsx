import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './style.css';
import { Link } from "react-router-dom";
import "../../App.css";

ProductDetail.propTypes = {
    singleProduct: PropTypes.object
};

function ProductDetail({ singleProduct }) {
    const [brandInfo, setBrandInfo] = useState([])
    const [isLoading , setIsLoading] = useState(true)
    useEffect(() => {
        if (singleProduct) {
            fetch(`https://radiant-stream-23882.herokuapp.com/api/v1/brand`)
                .then(response => response.json())
                .then(brand => {
                    setBrandInfo(brand.data) 
                    setIsLoading(false)
                });
        }
    }, [singleProduct])

    const brandOfProduct = brandInfo.filter((brand) => {
        return brand.title === singleProduct.brand
    })

    return (

      <>
        {isLoading && 
            <div className='loading'>
                <div className="loader"></div>
                <h3>Đang lấy thông tin sản phẩm....</h3>
           </div>
        }
            <div className="product_detail">
            <div className="product_detail_info">
                <div className='detail_img'>
                    <div className='detail_redirect'>
                        <Link to='/product' className='redirect_home'>Trang Chủ</Link>
                        <span>/</span>
                        {singleProduct?.type === 'nam' ? <Link to='/product' className='redirect_type'>Đồng Hồ Nam</Link> : <Link to='/product' className='redirect_type'>Đồng Hồ Nữ</Link>}
                    </div>
                    <img src={`https://radiant-stream-23882.herokuapp.com/img/product/${singleProduct?.logo}`} alt={singleProduct?.logo} />
                </div>
                <div className="detail_info">
                    <span className='detail_name'>{singleProduct?.title}</span>
                    <span className='detail_price'>Giá : {singleProduct?.price?.toLocaleString('vi', { style: 'currency', currency: 'VND' })}</span>
                    <span className='detail_amount'>Số lượng : {singleProduct?.amount} sản phẩm</span>
                    <span className='detail_insurance'>Chính sách bảo hành: {singleProduct?.guarantee} Năm</span>
                    <span className='detail_type'>Sản phẩm: {singleProduct?.type === 'nam' ? 'Nam' : 'Nữ'} </span>
                    <div className='button_detail'>
                        <button className='btn_action'>Thêm vào giỏ hàng</button>
                        <button className='btn_action'>Mua ngay</button>
                    </div>
                </div>
            </div>
            <div className="brand_wrap">
                {brandOfProduct.map((brand) => (
                    <img key={brand?.id} src={`https://radiant-stream-23882.herokuapp.com/img/brand/${brand?.logo}`} alt="" className='brand_img' />
                ))}
                <div className="brand_info">
                    <img src="https://dongho-jnjw57w2n.vercel.app/assets/4.png" alt="" className='brand_icon' />
                    <p className="brand_decs">
                        <span>THƯƠNG HIỆU HÀNG ĐẦU </span>Với hơn 20 năm kinh nghiệm trong lĩnh vực bán lẻ đồng hồ.
                    </p>
                </div>
                <div className="brand_info">
                    <img src="https://dongho-jnjw57w2n.vercel.app/assets/6.png" alt="" className='brand_icon' />
                    <p className="brand_decs">
                        <span>BẢO HÀNH LÊN ĐẾN 5 NĂM </span>Ngoài bảo hành chính hãng. Khi mua hàng tại VINAWATCH được hỗ trợ thêm
                    </p>
                </div>
            </div>
        </div>
      </>
    
    );
}

export default ProductDetail;