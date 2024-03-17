import Tarea from "../database/model/tarea.js";

export const listarTareas = (req, res) => {
  console.log("desde listar tareas");
  res.send("Enviar lista de tareas...");
};

export const crearTarea = async(req,res)=>{
  try{
   console.log(req.body)
   const tareaNueva= new Tarea(req.body);
   await tareaNueva.save();
   res.status(201).json({mensaje:'La tarea fue creada correctamente'})
  }catch(error){
 console.log(error)
 res.status(400).json({mensaje: 'No se pudo procesar la solicitud de crear tarea'})
  }
}