
import { useState } from "react";



const Form = () => {
  //Aqui deberan implementar el form completo con sus validaciones

  const validateUserName = (userName) => {
    // Eliminamos los espacios en blanco
    const withoutSpaces = userName.trim();
    // Validamos la extension
    if (withoutSpaces.length > 2) {
      return true;
    } else {
      return false;
    }
  };

  const [values, setValues] = useState({
    name: "",
    email: "",
  });

  const onSubmit = (e) => {
    e.preventDefault();
    console.log({ values });
    setValues({
      name: "",
      email: "",

    }
    )
    const userName = values.name;
    if (!validateUserName(userName)) {
      alert("Alguno de los datos ingresados no son correctos");
    } else {
      // Por ahora solo mostramos el nombre del usuario
      alert(`Gracias  ${userName} te contactaremos cuando antes vía mail`);
    }
  };

  const handleChange = (e) => {
    const key = e.target.name;
    const value = e.target.value;
    setValues({ ...values, [key]: value });
  }

  return (
    <div>
      <form id="register-form" onSubmit={onSubmit} className="form">

        <label>Name:</label>
        <input
          name="name"
          type="text"
          placeholder={"Ingresa tu  nombre"}
          value={values.name}
          onChange={handleChange} />

        <label>Email:</label>
        <input
          name="email"
          type="email"
          placeholder={"Ingresa tu  Email"}
          value={values.email}
          onChange={handleChange}
        />

      </form>

      <button form="register-form">Enviar</button>

    </div>
  );
};

export default Form;
