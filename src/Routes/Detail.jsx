import React,{useEffect,useState} from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import {infoDent} from "../Components/Card";
import axios from 'axios';
//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
  const [DetailData , setDetailData]= useState(null);
    // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico
const navigate = useNavigate();
const {id}=useParams();
useEffect(()=>{
  axios.get(`${infoDent}/${id}`)
  .then(res => setDetailData(res.data))
 .catch(err => console.error(err));
}, []);
console.log(DetailData);
  return (
    <div>
      
      <h1>Detail Dentist id </h1>
     
      {
      DetailData && (

        <div>
            <h1>{DetailData.name}</h1>
            <p>
Odont {DetailData.id}
<br />
Email : {DetailData.email}
<br />
Telefono : {DetailData.phone}
<br />
Website : {DetailData.website}
            </p>
            
        </div>
                )}
      
            
             <button onClick={() => navigate(-1)}>Volver</button>
      
      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
   
      </div>
    
  )
}

export default Detail