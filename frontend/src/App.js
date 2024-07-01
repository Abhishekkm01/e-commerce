import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home';
import Loginsignup from './pages/Loginsignup';
import Cart from './pages/Cart';
import ShopCategory from './pages/ShopCategory';
import Product from './pages/Product';
import Shop from './pages/Shop';
import Footer from './components/Footer/Footer';
import men_banner from './Assets/banner_mens.png';
import women_banner from './Assets/banner_women.png'
import kids_banner from './Assets/banner_kids.png'


function App() {
  return (
    <div>
<BrowserRouter>
<Navbar/>
<Routes>
  <Route path='/' element={<Shop/>}/>
  <Route path='/login' element={<Loginsignup/>} />
  <Route path='/cart' element={<Cart/>}/>
  <Route path='/men' element={<ShopCategory category='men' banner={men_banner}/>}/>
  <Route path='/women' element={<ShopCategory category='women' banner={women_banner}/>}/>
  <Route path='/kids' element={<ShopCategory category='kid' banner={kids_banner}/>}/>
  <Route path='/product' element={<Product/>}>
    <Route path=':productId' element={<Product/>}/>
</Route>

  
</Routes>


<Footer/>
</BrowserRouter>

    
    </div>
  );
}

export default App;
