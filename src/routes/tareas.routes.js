import { Router } from "express";
import { crearTarea, editarTarea, listaTareas, obtenerTarea } from "../controllers/tareas.controllers.js";

const router = Router();

router.route('/tareas').get(listaTareas).post(crearTarea)
router.route('/tarea/:id').get(obtenerTarea).put(editarTarea)

export default router;
