import React, { createContext, useState } from "react";


export const ModoDarkContext = createContext({});

const ModoDarkContextProvider = ({ children }) => {
  const [isDark, setIsDark ]  = useState(false);
  const state = {
    isDark,
    setIsDark
  };

  return (
    <ModoDarkContext.Provider value={state}>
      {children}
    </ModoDarkContext.Provider>
  )

}
export default ModoDarkContextProvider