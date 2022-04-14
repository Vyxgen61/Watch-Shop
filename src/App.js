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

function App() {
  return (
 <>
    <Header/>
    <Navbar/>
    <Routes>
      <Route path="/" element={<HomePage />}/>
    </Routes>
    <Footer/>
    <BackTop/>
 </>
  );
}

export default App;
