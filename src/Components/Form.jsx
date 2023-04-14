import { useState } from "react";



const Form = () => {
  //Aqui deberan implementar el form completo con sus validaciones
 
/* 
  const validateName = (name) => {
  
    const wihtoutSpaces = name.trim();
 
    if (wihtoutSpaces.length > 2) {
    return true;
    } else {
       alert("Alguno de los datos ingresados no son correctos");
    }
    };
         
    validateName(values.name)   */
      

  const[values,setValues]=useState({
    name:"",
    email:"",
     });  
  
  const onSubmit =(e) => {
    e.preventDefault();
    console.log({values});
    setValues({
      name:"",
      email:"",
     
    }
          )
          alert(`Gracias  ${values.name} te contactaremos cuando antes vía mail` );
        
  };

  const handleChange=(e) =>{
    const key =e.target.name;
    const value =e.target.value;
    setValues({...values, [key]:value});
  }



  return (
    <div>
      <form id="register-form" onSubmit={onSubmit}>
      
      <label>Name:</label>
          <input
        name="name"
         type= "text"
        placeholder={"Ingresa tu  nombre"} 
        value={values.name}
     
onChange={handleChange}/>
///////////////
<label>Email:</label>
          <input  
          name="email"
          type= "email"
         placeholder={"Ingresa tu  Email"} 
         value={values.email}
         
         onChange={handleChange}
                    />
       

/////////////////

      </form>
      <button form="register-form">Enviar</button>
<button>Cancel</button>
    </div>
  );
};

export default Form;
