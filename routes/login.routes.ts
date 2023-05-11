import { Router } from "express";
import Controllers from "../controllers/index";

const router = Router();

// importacion de controladores

router.post("/loggear", Controllers.Login.loggear);

// ESS -> module.exports = router
export default router;