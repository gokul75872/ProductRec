import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import './login.css';
import profile from "./../image/a.png";
import email from "./../image/email.jpg";
import pass from "./../image/pass.png";
import Axios from "axios";


const Login = () => {
    const [username, usernameupdate] = useState('');
    const [password, passwordupdate] = useState('');
    const [list, setList] = useState([]);


    const usenavigate=useNavigate();

    useEffect(()=>{
        sessionStorage.clear();
    },[]);

    const ProceedLogin = (e) => {
        e.preventDefault();
        if (validate()) {
            toast.success('Success');
            sessionStorage.setItem('username',username);
            usenavigate('/home',{
                state : list,
            });  
        }
    }

    const validate = () => {
        let result = true;
        if (username === '' || username === null) {
            result = false;
            toast.warning('Please Enter Username');
        }
        if (password === '' || password === null) {
            result = false;
            toast.warning('Please Enter Password');
        }
        if (username <1 || username >5000) {
            result = false;
            toast.warning('Invalid Username or Password');
        }    
           
        return result;
    }
    
    return (
        <div className="main">
     <div className="sub-main">
       <div>
         <div className="imgs">
           <div className="container-image">
             <img src={profile} alt="profile" className="profile"/>

           </div>


         </div>
         <br></br>
         <div>
           <div>
             <img src={email} alt="email" className="email"/>
             <input type="text" placeholder="user name" className="name" onChange={e => usernameupdate(e.target.value)}/>
           </div>
           <div className="second-input">
             <img src={pass} alt="pass" className="email"/>
             <input type="password" placeholder="password" className="name" onChange={e => passwordupdate(e.target.value)}/>
           </div>
          <div className="login-button">
          <button onClick={ProceedLogin}>Login</button>
          </div>
           
            <p className="link">
              <a href="#">Forgot password ?</a>
            </p>
           
 
         </div>
       </div>
       

     </div>
    </div>
    );
}

export default Login;