
import React, { useState, useContext} from 'react'
import { useNavigate } from 'react-router-dom';
import '../index.css'

const Login = () => {

    const [values, setValues] = useState({email:"", password:""});
    // const { handleLogin } = useContext(AuthContext);
    const navigate = useNavigate();    
    const handleSubmit = (e) => {
      e.preventDefault();
     // handleLogin();
      navigate("/home");
      console.log(values);
    };
  
      
    return (
      
      <form id='form' onSubmit={ handleSubmit } className='login' >
          <div className='loginCard'>
            <input
              name='email'
              size='small'
              type='email'
              label='Email *'
              placeholder='Email'
              value={values.email}
              onChange={(e) => setValues({...values, email: e.target.value })}
            />  
            <input
              name='password'
              size='small'
              type='password'
              label='Password *'
              placeholder='Password'
              value={values.password}
              onChange={(e) => setValues({...values, password: e.target.value })}
            />  
          <button type='submit'  from= "form">
            iniciar sesión
          </button>
        </div>
      </form>
    )
  }
  


export default Login