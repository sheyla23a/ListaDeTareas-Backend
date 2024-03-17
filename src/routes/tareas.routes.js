import { Router } from "express";
import { crearTarea, listaTareas, obtenerTarea } from "../controllers/tareas.controllers.js";

const router = Router();

router.route('/tareas').get(listaTareas).post(crearTarea)
router.route('/tarea/:id').get(obtenerTarea)

export default router;
