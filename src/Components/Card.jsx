import React, { useState, useEffect, useContext } from 'react'
import { FavsContext } from '../context/FavContext';
export const infoDent = "https://jsonplaceholder.typicode.com/users";

const Card = ({ selectOdont }) => {
  const [info, setInfo] = useState(null);
  const {state, dispatch}=useContext(FavsContext);
  const getInfo = async () => {
    const response = await fetch(infoDent);
    const resolve = await response.json();
    setInfo(resolve);
  }
  useEffect(() => {
    getInfo();
  }, []);
 
  return (
    <div>
      <p>Odontologo: </p>
      <div style={{ display: "grid", flexWrap: "wrap", justifyContent: "center"}}>
        {
          info?.map(({id,name,username}) => (
            <div
              key={id} style={{
                border: "1px solid gray",
                padding: "10px", borderRadius: "5px",
                cursor: "pointer",
                backgroundColor: "beige",
                color:"gray",
                margin:"10px"
              }}>
              <p>Odont. {name}
                <br />
                Usuario: {username}
              </p>
              <button onClick={() => selectOdont(id)}>ver</button>
              <button onClick={() => dispatch({ type: 'ADD', payload: {id,name,username }  }) }> ADD favoritos</button>
            </div>
          ))
        }
      </div>
    </div>
  )
};

export default Card;