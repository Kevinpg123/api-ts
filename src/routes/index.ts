import { Router } from "express";
import tareasRouter from "./tareas.routes"

const router = Router()

router.use('/tareas', tareasRouter)

export default router