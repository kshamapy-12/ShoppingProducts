import React from 'react'
import { Route, Routes } from 'react-router-dom';
import AllProducts from './components/AllProducts';
import CartItems from './pages/CartItems';
import WishList from './pages/WishList';
import Layout from './components/Layout';

const App = () => {
  
  return (
    <div>
     <Routes>
      <Route element={ <Layout/> }>
      <Route path='/' element={ <AllProducts/> }/>
      <Route path='/cart' element={ <CartItems /> } />
      <Route path ='/wishlist' element={ <WishList /> } />
      </Route>
     </Routes>
     
     
    </div>
  )
}

export default App
