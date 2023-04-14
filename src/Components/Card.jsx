import React,{useState, useEffect} from 'react'

export const  infoDent = "https://jsonplaceholder.typicode.com/users";


export const Card =({selectOdont})=> {

  const[data, setData] = useState("");
    const[info, setInfo]= useState(null);
    const[value, setValue]= useState(0);
  console.log(info);
const getInfo = async (signal) => {
  const response = await fetch(infoDent, signal);
  const resolve = await response.json();
  setInfo(resolve);
};
    useEffect(() => {
      
      const abortCont = new AbortController();
      getInfo({signal: abortCont.signal});
            
      return () => abortCont.abort();
     
    }, []);

    console.log("renderizando")
  return (
    <div>
  
  
   
    <p>Odontologo: </p> 
     <div style={{display:"grid", flexWrap: "wrap", justifyContent: "center", gap: "20px"}}>
        {
          info?.map(picture => (
            <div 
           
            key={picture?.id} style={{ border: "1px solid gray", 
            padding: "10px", borderRadius: "5px",
            cursor:"pointer" }}>
              <p>Odont. {picture?.name}
              <br />
              Usuario: {picture?.username}
              </p>
              <button  onClick={() =>selectOdont(picture.id)}>ver</button>
              <button> ADD favoritos</button>
            </div>
          ))
        }
      </div>
    </div>
   
  )
};

export default Card;