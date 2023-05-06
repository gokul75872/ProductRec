import React from "react";
import { useEffect, useState } from "react";
import { BrowserRouter as Router, useHistory} from 'react-router-dom'
import { useNavigate } from 'react-router-dom';

import "../styles/navbar.css";

const Navbar = ({ setShow, size }) => {

  const usenavigate=useNavigate();

  const username = sessionStorage.getItem('username');

  const logout= () => {
    sessionStorage.clear();
    usenavigate('/');
  };

  const shoppingHistory = () =>{
    usenavigate('/history')
  };

  const gethome = () =>{
    usenavigate('/home');
  }
  return (
    <nav>
      <div className="nav_box">
        <span className="my_shop" onClick={() => {setShow(true);gethome()}}>
          Product Rec
        </span>
        {username && <div className="cart" onClick={() => {setShow(false)}}>
          <span>
          <i class="fas fa-history" onClick={shoppingHistory}></i>
          </span>
        </div>

        }
        
        
          
          {username && <p className="icons"><i class="fa fa-user" aria-hidden="true"></i>  {username}</p>}
        <div >
            {username && <button className="btn btn-primary" onClick ={logout}>Logout</button>}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

