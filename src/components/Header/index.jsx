import React from 'react';
import { useNavigate } from "react-router-dom";
import {
    useRecoilValue
} from 'recoil';
import { cartQuantity } from '../../State/CartState';
import './style.css';

function Header() {
    let navigate = useNavigate();
    const isLogin = Boolean(localStorage.getItem('token'))
    const handleGoToLoginPage = () => {
        navigate('/')
    }
    const handleGoToLogout = () => {
        navigate('/')
        localStorage.removeItem('token')
    }
    const handleGoToCart = () => {
        navigate('/cart')
    }
    const quantity = useRecoilValue(cartQuantity);
    return (
        <div className = "header">
            <div className ="header_search">
                <input className ="search_input" type="text" placeholder ="Tìm kiếm...." />
                <div className ="search_icon">
                    <i className="fa-solid fa-magnifying-glass"></i>
                </div>
            </div>
            <div className ="header_logo">
                <h3>WATCH</h3>
            </div>
            <div className ="header_action">
                {isLogin ? <button className = "btn btn-login" onClick={handleGoToLogout}>ĐĂNG XUẤT</button> : <button className = "btn btn-login" onClick={handleGoToLoginPage}>ĐĂNG NHẬP</button>}
                <span>|</span>
                <button onClick={handleGoToCart} className = "btn btn-cart">{`GIỎ HÀNG / ${quantity || 0} SẢN PHẨM`}</button>
            </div>
        </div>
    );
}

export default Header;