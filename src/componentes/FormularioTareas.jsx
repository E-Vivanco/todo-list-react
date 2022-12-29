import React from 'react';
import '../estilos/FormularioTareas.css';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const FormularioTareas = (props) => {
    const [input,setInput] = useState([])

  //  console.log("soy la tarea:",input)
    const handleEnvioValorInput = (e)  =>{
  //      console.log("tengo el valor")
        e.preventDefault();
       const tareaNew={
        id: uuidv4(),
        texto: input
       } 
       props.onSubmit(tareaNew);
   // console.log("soy handle",handleEnvioValorInput)
    }
    
    const manejarCambioClick = e =>{
        setInput(e.target.value)
    //    console.log("soy manej click",manejarCambioClick)
    }
    // aqui vamos a crear un input que recibe tareas del usuario
  return (
    
      <form className='contenedor-formulario' onSubmit={handleEnvioValorInput}>
        <input 
            className='contenido-input'
            type="text"
            placeholder="Que piensas hacer ahora?"
            name='texto'
            onChange={manejarCambioClick}
            />
      </form>
  );
}

export default FormularioTareas;