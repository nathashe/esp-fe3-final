import React from 'react'
import Form from '../Components/Form'
import { useNavigate } from 'react-router-dom'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Contact = () => {
  const navigate = useNavigate();
  return (
    <div className='hju'>
      <h2>Want to know more?</h2>
      <p>Send us your questions and we will contact you</p>
      <Form/>

    </div>
  )
}

export default Contact