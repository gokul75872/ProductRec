import React, { useState, useEffect } from "react";
import Amazon from "./components/amazon";
import Navbar from "./components/navbar";
import Cart from "./components/cart";
import LoginForm from "./components/login";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/amazon';
import History from './components/history';
import Login from './components/login';
import { ToastContainer } from 'react-toastify';

const App = () => {
  const [show, setShow] = useState(true);
  const [cart, setCart] = useState([]);

  const handleClick = (item) => {
    if (cart.indexOf(item) !== -1) return;
    setCart([...cart, item]);
  };

  const handleChange = (item, d) => {
    const ind = cart.indexOf(item);
    const arr = cart;
    arr[ind].amount += d;

    if (arr[ind].amount === 0) arr[ind].amount = 1;
    setCart([...arr]);
  };

  // useEffect(() => {
  //   console.log("cart change");
  // }, [cart]);

  return (
    <React.Fragment>
      {/* <Navbar setShow={setShow} size={cart.length} />
      {show ? (
        <Amazon handleClick={handleClick} />
      ) : (
        <Cart cart={cart} setCart={setCart} handleChange={handleChange} />
      )} */}
      
      <Navbar setShow={setShow} size={cart.length} />

    <div className="App">
      <ToastContainer theme='colored' position='top-center'></ToastContainer>
      <Routes>
        <Route path='/' element={<Login/>}></Route>
        <Route path='/home' element={<Home/>}></Route>
        <Route path='/nav' element={<Navbar/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/history' element={<History/>}></Route>

      </Routes>
      
    </div>
    </React.Fragment>
  );
};

export default App;
