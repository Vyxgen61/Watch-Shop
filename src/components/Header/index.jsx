import React from 'react';
import './style.css'

function Header() {
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
                <button className = "btn btn-login">ĐĂNG NHẬP</button>
                <span>|</span>
                <button className = "btn btn-cart">GIỎ HÀNG/0 SẢN PHẨM</button>
            </div>
        </div>
    );
}

export default Header;