// almacenamos todas las turas existentes y las podamos
// separar por cada uno de los modules
import { Router } from "express";
//routes
import Math from "./math.routes";
import User from "./user.routes";
import Conversacion from "./conversacion.routes";

const router = Router();

//math
router.use("/math", Math);
router.use("/user", User);
router.use("/conversacion", Conversacion);

export default router;