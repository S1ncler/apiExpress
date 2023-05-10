import { Router } from "express";
import Controllers from "../controllers/index";

const router = Router();

// importacion de controladores

router.get("/suma/:num1/:num2", Controllers.Math.sumar);

router.get("/resta", Controllers.Math.restar)

router.get("/multiplicar", Controllers.Math.multiplicar)

router.get("/dividir/:num1/:num2", Controllers.Math.dividir)

// ESS -> module.exports = router
export default router;