import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import { BrowserRouter, Routes,Route } from "react-router-dom";
import Contact from "./Routes/Contact";
import Detail from  "./Routes/Detail";
import Favs from "./Routes/Favs";
import Home from "./Routes/Home";


function App() { 

  return (
      <div className="App">
         
    <BrowserRouter>
     <Routes>
     <Route path='/contact' element={<Contact/>}/>
     <Route path='/detail' element={<Detail/>}/>
     <Route path='/home' element={<Home />}/> 
    <Route path='/home/detail/:id' element={<Detail />}/> 
     <Route path='/favs' element={<Favs/>}/>
     </Routes>
     </BrowserRouter>
        
          <Navbar/>
          <Footer/> 
      </div>
  );
}


export default App;

