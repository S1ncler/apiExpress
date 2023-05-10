import { Router } from "express";
import Controllers from "../controllers/index";

const router = Router();

// importacion de controladores

router.get("/saludar", Controllers.Conversacion.saludar);

router.get("/pregunta", Controllers.Conversacion.pregunta);

router.get("/despedir", Controllers.Conversacion.despedir);

// ESS -> module.exports = router
export default router;