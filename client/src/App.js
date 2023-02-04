import React from 'react';
import {browserRouter,
Routes,
Route,
useLocation,
BrowserRouter} 
from 'react-router-dom';
import Home from './scenes/home/Home';
import ItemDetails from './scenes/itemDetails/ItemDetails';
import Checkout from './scenes/checkout/Checkout';
import Confirmation from './scenes/checkout/Confirmation';
import Navbar from './scenes/common/Navbar';
import CartMenu from './scenes/common/CartMenu';
import Footer from './scenes/common/Footer';
import { Box } from '@mui/material';


const ScrollToTop =() =>{
  const {pathname} = useLocation();

  React.useEffect(()=>{
    window.scrollTo(0,0);
  }, [pathname])

  return null;
}


function App() {
  return (
    <Box className="app">
    <BrowserRouter>
    <Navbar />
      <ScrollToTop />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="item/:itemId" element={<ItemDetails />} />
        <Route path="checkout" element={<Checkout />} />
        <Route path="checkout/success" element={<Confirmation />} />
      </Routes>
      <CartMenu />
      <Footer />
      
    </BrowserRouter>
    
      
    </Box>
  );
}

export default App;
