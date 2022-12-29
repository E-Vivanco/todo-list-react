import React from 'react';
import '../estilos/Tarea.css';

import { AiOutlineCloseCircle } from 'react-icons/ai';

const Tarea = ({id, texto, eliminarTarea,agregarTarea }) => {
 console.log("soy Tarea",Tarea)
  return (
    <div className='contenedor-tareas'>
        <div className='tarea-texto'
        onClick={()=> agregarTarea(texto)}>
        {texto}
        </div>
        <div className='tarea-contenedor-iconos'
        onClick={()=>eliminarTarea(id)}>
        <AiOutlineCloseCircle className='tarea-icono' />
        </div>

    </div>
  );
}

export default Tarea;
