import React from 'react'
import {useNavigate} from 'react-router-dom';
import Card from '../Components/Card'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  const navigate = useNavigate();

  const selectOdont = (id)=>{
    navigate(`/home/detail/${id}`);
    console.log("id", id);
  }
  return (
    <main className="" >
      <h1>Home</h1>

      <button  onClick={() => navigate('/contact')} >Contacto</button>
     <div className='card-grid'>
        <Card selectOdont={selectOdont}/>  
            {/* Aqui deberias renderizar las cards */}
      </div>
 
    </main>
  )
}

export default Home