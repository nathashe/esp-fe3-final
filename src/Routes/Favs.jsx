import React, { useContext } from "react";
import Card from "../Components/Card";
import { FavsContext } from "../context/FavContext";



const Favs = () => {
const {state, dispatch}=useContext(FavsContext);
  return (
    <>
      <h1>Dentists Favs</h1>
      <div className="card-grid">

      {
          state.data?.map(({id,name,username}) => (
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
          </div>
          ))
        }
      </div>
    </>
  );
};

export default Favs;
