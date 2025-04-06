import './App.css';
import {BrowserRouter as Router ,Routes,Route } from "react-router-dom";
import Navbar from './Navbar';
import Shop from './Shop';
import PopularWomen from './PopularWomen';
import NewCollection from './NewCollection';
import NewsLetter from './NewsLetter';
import Login from './Login';
import Footer from './Footer';
import Cart from './Cart';
import Men from './Men';
import ProductDetails from './ProductDetails';
import DescriptionBox from './DescriptionBox';
function App() {
  return (
    <Router>
          <Navbar />
          <div>
            <Routes>
              <Route path="/" el ement={<><Shop /><PopularWomen /><NewCollection /><NewsLetter /></>} />
              <Route path="/shop" element={<><Shop /><PopularWomen /><NewCollection /><NewsLetter /></>} />
              <Route path="/men" element={<Men/>} /> 
              <Route path="/women" element={<women/>} /> 
              <Route path="/kids" element={<kids/>} /> 
              <Route path="/login" element={<Login/>} /> 
              <Route path="/cart" element={<Cart/>} />
              <Route path="/product/:id" element={<><ProductDetails /><DescriptionBox/></>} /> 
            </Routes>
          </div>
          <Footer/>
        </Router>
  );
}

export default App;
