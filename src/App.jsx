import { useContext } from "react";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { rutas, Login } from "./navigate/Routes";
import { ModoDarkContext } from "./context/ModoDarkContext";
import LoginContextProvider, { LoginContext } from "./context/LoginContext";




function App() {
  const {  isDark } = useContext(ModoDarkContext);

  return (
    <LoginContextProvider>
    <BrowserRouter>
     <div className={isDark ? "dark" : "app"}>
      
        <Routes>
          <Route path="/login" element={<Login />} />
         <Route>
          {
            rutas.map(({ id, path, Component }) => (
              <Route key={id} path={path} element={<> <Navbar/> <Component /><Footer/></>}/>))
          }
          </Route>
          <Route path='/' element={<Navigate to='/login'/>}/>
        </Routes>
      
      </div>
    </BrowserRouter>
    </LoginContextProvider>
  )
}


export default App;

