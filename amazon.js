import React, { useState , useEffect} from "react";
import list from "../data";
import Cards from "./card";
import "../styles/amazon.css";
import axios from "axios";
import { Link, useNavigate, useLocation } from "react-router-dom";



const Amazon = ({ handleClick }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [respdata, setRespData] = useState([]);
  const location = useLocation();
  const username = sessionStorage.getItem('username');
  const baseUrl = 'https://b829-34-67-223-108.ngrok-free.app/'

  const searchQuery = () => {
    // const bdata = {
    //   userId: username,
    //   query: [searchTerm]
    // }
    // console.log(bdata);
    // fetch('https://c974-34-172-176-203.ngrok-free.app/rec',{
    //   method: "POST",
    //   mode: "no-cors",
    //   headers: new Headers({'content-type': 'application/json'}),
    //   body: JSON.stringify(bdata)
    // })
    // .then((response) => response.json())
    // .then((data) => {
    //   setRespData([data]);
    //   console.log(setRespData);
    // })
    // .catch((error) =>{
    //   setRespData([]);
    // })

    const apiUrl = baseUrl+'rec';
      const requestData = {
        userId: username,
        query: searchTerm
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
        setRespData(response.data);
    //   console.log(setRespData);
      }).catch((error) => {
        console.log(error);
      });
      

  };


  const getAllRecommendation = () => {
    const apiUrl = baseUrl+'gnn';
    const requestData = {
      userId: username
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
      setRespData(response.data);
  //   console.log(setRespData);
    }).catch((error) => {
      console.log(error);
    });
}
  useEffect(()=>{
   getAllRecommendation()
},[]);
  return (
    <>
    <br></br>
   <div className="searchInput_Container">
  <div className="row">
    <div className="col-md-8">
      <input id="searchInput" type="text" placeholder="Search here..." onChange={(event) => {
          setSearchTerm(event.target.value);
      }} />
    </div>
    <div className="col-md-4">
      <button type="submit" className="btn btn-warning" onClick={searchQuery}>Search</button>
    </div>
  </div>
</div>

    <h2 className="cardholder">Recommendations</h2>
    <section className="cardholder">
    {
            respdata 
              .map((item) => {
                return(
                  <Cards key={item.id} item={item} handleClick={handleClick} />
                )
              })
    }
    </section>
    </>
  );
};

export default Amazon;
