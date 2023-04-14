import React, { createContext, useReducer } from 'react'

export const FavsContext = createContext({});

const handleFavs = (state, action) => {
  switch (action.type) {
    case "ADD":
    localStorage.setItem("favorites", JSON.stringify([...state.data, action.payload]));
    return {
      ...state,
      data: [...state.data, action.payload]
    };
    case "REMOVE":
    const resultado = state.data.filter(elemento => elemento.id !== action.payload.id)
    localStorage.setItem("favorites", JSON.stringify(resultado));
    return {
      ...state,
      data: resultado
    };

    default:
      return {
        ...state
      };
  }
};

const FavsContextProvider = ({ children }) => {

  const initialState = { data: [] };
  const [state, dispatch] = useReducer(handleFavs, initialState)

  const State = {
    state,
    dispatch
  }

  return (
    <FavsContext.Provider value={State}>
      {children}
    </FavsContext.Provider>
  )
}

export default FavsContextProvider