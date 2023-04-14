import { useContext } from "react";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { rutas, Login } from "./navigate/Routes";
import { ModoDarkContext } from "./context/ModoDarkContext";




function App() {
  const { isModoOscuro } = useContext(ModoDarkContext);

  return (
    <BrowserRouter>
     <div className={isModoOscuro ? "dark" : "app"}>
       <Navbar/>
        <Routes>
          <Route path="/login" element={<Login />} />
         <Route>
          {
            rutas.map(({ id, path, Component }) => (
              <Route key={id} path={path} element={<Component />}/>))
          }
          </Route>
          <Route path='/' element={<Navigate to='/login'/>}/>
        </Routes>
      <Footer/>
      </div>
    </BrowserRouter>

  )
}


export default App;

