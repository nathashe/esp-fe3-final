import React from 'react'
import { useNavigate } from 'react-router-dom';
import Card from '../Components/Card'

const Home = () => {
const navigate = useNavigate();

  const selectOdont = (id) => {
    navigate(`/home/detail/${id}`);
  }
  return (
    <main className="" >
      <h1>Home</h1>
      <div className='card-grid'>
        <Card selectOdont={selectOdont} />
      </div>

    </main>
  )
}

export default Home