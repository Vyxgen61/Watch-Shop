import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import HomePage from './Pages/Home';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import BackTop from './components/BackTop';
import Detail from './Pages/Detail';
import FormLogin from './components/FormLogin';
import CartInfo from './components/CartInfo';

function App() {
  const isLogin = Boolean( localStorage.getItem('token'))
  return (
 <>
    <Header/>
    <Navbar/>
    <Routes>
      <Route path="/" element={<FormLogin />}/>
      <Route path="/product" element={<HomePage />}/>
      <Route path="/cart" element={<CartInfo />}/>
      <Route path="product/:id" element={<Detail />}/>
    </Routes>
    <Footer/>
    <BackTop/>
 </>
  );
}

export default App;
