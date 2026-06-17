import { Router } from "express";
import {getTareas, createTarea} from "../controllers/tareas.controller"

const router = Router()

router.get('/', getTareas)
router.post('/', createTarea)

export default router