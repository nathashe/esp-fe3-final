
import Contact from "../Routes/Contact";
import Detail from  "../Routes/Detail";
import Favs from "../Routes/Favs";
import Home from "../Routes/Home";
import Login from "../Routes/Login";
export const rutas = [
    {
      id: 1,
      path: "/home",
      Component: Home
    },
    {
      id: 2,
      path: "/favs",
      Component: Favs
    },
    {
      id: 3,
      path: "/contact",
      Component: Contact
    },
    {
      id: 4,
      path: "home/detail/:id",
      Component: Detail
    }

  ];
  
  export {Login}