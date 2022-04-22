import React from 'react';
import "./style.css"
import {
    useRecoilState,
    useRecoilValue
} from 'recoil';
import { cartQuantity, cartTotal ,cartState, deleteItemCart} from '../../State/CartState';
import { useNavigate } from "react-router-dom";
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure()


function CartInfo() {
    const cart = useRecoilValue(cartState)
    const quantity = useRecoilValue(cartQuantity)
    const total = useRecoilValue(cartTotal)
    let navigate = useNavigate();
    const [cartList, setCartList] = useRecoilState(cartState);
    const backHome = () => {
        navigate('/product')
    }
    const hanldeDeleteCart = (idDelete) => {
        const newCart = deleteItemCart(cart, idDelete);
        setCartList(newCart);
        toast.success('Xoá sản phẩm thành công.',
        {
            position: toast.POSITION.BOTTOM_RIGHT,
            theme: 'dark'
        })
    }
    return (
        <div className='cart_wrap'>
           <div className="cart_header">
             <h4>Cart</h4>
             <span>{`Bạn đang có ${quantity} sản phẩm trong giỏ 🛒`}</span>
             <span>{`Thành tiền : ${total.toLocaleString('vi', {style : 'currency', currency : 'VND'})}💰`}</span>
           </div>
           {cart.length > 0 ?  <div className="cart">
              {cart.map((item) => (
                 <div key={item.id} className="cart_item">
                     <img className='cart_img' src={`https://radiant-stream-23882.herokuapp.com/img/product/${item?.product?.logo}`} alt="" />
                    <span className='cart_title'>Tên sản phẩm : {item?.product?.title} </span> 
                    <span className='cart_price'>Giá :{item?.product?.price.toLocaleString('vi', {style : 'currency', currency : 'VND'})} </span>  
                    <span className='cart_quantity'>Số lượng: {item?.quantity} </span>
                    <span className='cart_total'>Tổng cộng: {(item?.product?.price * item?.quantity).toLocaleString('vi', {style : 'currency', currency : 'VND'})}</span>
                    <span className='delete' onClick={() => hanldeDeleteCart(item?.id)}>  
                    <i className="fa-solid fa-trash-can"></i>
                    </span>
                </div>
              ))}
            </div> : <img className='img_placeholder' src="https://sethisbakery.com/assets/website/images/empty-cart.png" alt="" srcset="" />
            }
             <span onClick={backHome} className='back_home'>Trở về trang chủ        <i className="fa-solid fa-arrow-left-long"></i></span>
        </div>
    );
}

export default CartInfo;