import Tarea from "../database/model/tarea.js";

export const listaTareas = async (req, res) => {
  try{
    const tareas = await Tarea.find();
    res.status(200).json(tareas);
  }catch(error){
   console.log(error)
   res.status(404).json({mensaje: 'No se encontro la lista de tareas'})
  }
};

export const crearTarea = async(req,res)=>{
  try{
   const tareaNueva= new Tarea(req.body);
   await tareaNueva.save();
   res.status(201).json({mensaje:'La tarea fue creada correctamente'})
  }catch(error){
 console.log(error)
 res.status(400).json({mensaje: 'No se pudo procesar la solicitud de crear tarea'})
 }
}

export const obtenerTarea = async (req,res)=>{
  try{
   const tareaBuscada = await Tarea.findById(req.params.id);
   res.status(200).json(tareaBuscada);
  }catch(error){
    console.log(error)
    res.status(404).json({mensaje: 'No se encontro la tarea solicitada'})
  }
 }

 export const editarTarea = async(req,res)=>{
  try{
   const buscarTarea = await Tarea.findById(req.params.id);
   if(!buscarTarea){
     return res.status(404).json({mensaje:'No se pudo editar la tarea, el id es incorrecto'})
   }
   await Tarea.findByIdAndUpdate(req.params.id, req.body);
   res.status(200).json({mensaje:'La tarea fue modificada exitosamente'});
  }catch(error){
      console.error(error)
      res.status(500).json({mensaje:'Ocurrio un error al intentar editar la tarea'})
  }
  }

  export const borrarTarea = async(req,res)=>{
    try{
     const buscarTarea = await Tarea.findById(req.params.id);
     if(!buscarTarea){
       return res.status(404).json({mensaje:'No se pudo eliminar la tarea, el id es incorrecto'})
     }
     await Tarea.findByIdAndDelete(req.params.id);
     res.status(200).json({mensaje:'La tarea fue eliminada exitosamente'});
    }catch(error){
        console.error(error)
        res.status(500).json({mensaje:'Ocurrio un error al intentar borrar la tarea'})
    }
    }