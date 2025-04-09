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
import Women from './Women';
import ProductDetailsWomen from './ProductDetailsWomen';
import Kids from './Kids';
import ProductDetailsKids from './ProductDetailsKids';
import SearchResults from './SearchResults';
import { CartProvider } from './CartContext';
function App() {
  return (
    <CartProvider>
    <Router>
          <Navbar />
          <div>
            <Routes>
              <Route path="/" element={<><Shop /><PopularWomen /><NewCollection /><NewsLetter /></>} />
              <Route path="/shop" element={<><Shop /><PopularWomen /><NewCollection /><NewsLetter /></>} />
              <Route path="/men" element={<Men/>} /> 
              <Route path="/women" element={<Women/>} /> 
              <Route path="/kids" element={<Kids/>} /> 
              <Route path="/login" element={<Login/>} /> 
              <Route path="/cart" element={<Cart/>} />
              <Route path="/product/:id" element={<><ProductDetails /><DescriptionBox/></>} /> 
              <Route path="/product-women/:id" element={<><ProductDetailsWomen /><DescriptionBox/></>} />
              <Route path="/product-kids/:id" element={<><ProductDetailsKids /><DescriptionBox/></>} />
              <Route path="/search" element={<SearchResults/>}/>
            </Routes>
          </div>
          <Footer/>
        </Router>
    </CartProvider>
  );
}

export default App;
