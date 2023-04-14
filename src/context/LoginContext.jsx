import React, { createContext, useState } from 'react'


export const LoginContext = createContext({});

const LoginContextProvider = ({ children }) => {
  const [isLogged, setIsLogged] = useState(localStorage.getItem("auth") ? true : false);

  const handleLogin = () => {
    setIsLogged(true);
    localStorage.setItem("auth", true);
  };

  const State = {
    isLogged,
    handleLogin,
  };

  return (
   
    <LoginContext.Provider value={State}>
      {children}
    </LoginContext.Provider>
 
  )
}

export default LoginContextProvider