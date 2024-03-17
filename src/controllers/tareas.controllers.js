import Tarea from "../database/model/tarea.js";

export const listarTareas = (req, res) => {
  console.log("desde listar tareas");
  res.send("Enviar lista de tareas...");
};

