import React from 'react';
import '../estilos/ListaTareas.css';
import FormularioTareas from './FormularioTareas';
import { useState } from 'react';
import Tarea from './Tarea';

const ListaTareas = () => {
    const [tarea, setTarea] = useState([]);
//console.log("soy las tareas:",tarea)
    const agregarTarea = tare =>{
        if(tare.texto.trim()){
        const tareasAgregadas = [tare, ...tarea];
      //  console.log("lista soy",agregarTarea)
        setTarea(tareasAgregadas)
        }
    }

    const eliminarTarea = id =>{
        const tareasAgregadas = tarea.filter(tarea => tarea.id !== id);
        setTarea(tareasAgregadas)
        //console.log(setTarea)
    }

  return (
    <>
       <FormularioTareas onSubmit={agregarTarea} />
       <div className='contenedor-lista-tareas'>
        { 
        tarea.map((job,index)=> 
        
         <Tarea
            key={job.index}
            id={job.id}
            texto={job.texto}
            eliminarTarea={eliminarTarea} />            
        )}  
        
       
        </div>
    </>
  );
}

export default ListaTareas;
