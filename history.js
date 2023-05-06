import React, { useState , useEffect} from "react";
import list from "../data";
import Cards from "./card";
import "../styles/amazon.css";
import 'bootstrap/dist/css/bootstrap.css';
import axios from "axios";
import { useNavigate } from 'react-router-dom';


const History = ({ item, handleClick }) => {
    const [histdata, setHistData] = useState([]);
    const username = sessionStorage.getItem('username');
    const usenavigate=useNavigate();



    useEffect(()=>{
        getUserHistory()
     },[]);

    const getUserHistory = () => {

          const apiUrl = 'https://b829-34-67-223-108.ngrok-free.app/history';
          const requestData = {
            userId: username,
          }
          console.log(requestData);
          const options = {
            method: 'POST',
            mode: 'no-cors',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(requestData)
          };
    
          const body= JSON.stringify(requestData)
    
          axios.post(apiUrl, body, {
            headers: {
              'Content-Type': 'application/json'
            },
            mode: 'no-cors'
          }).then((response) => {
            console.log(response.data);
            setHistData(response.data);
        //   console.log(setRespData);
          }).catch((error) => {
            console.log(error);
          });
    }

    return (
        <div>
        <p className="cardholder">User History</p>
        <section className="cardholder">
        {
                histdata 
                  .map((item) => {
                    return(
                      <Cards key={item.id} item={item} handleClick={handleClick} />
                    )
                  })
        }
        </section>
        </div>
    );
  };
  
  export default History;