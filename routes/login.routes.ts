import { Router } from "express";
import Controllers from "../controllers/index";

const router = Router();

// importacion de controladores

router.get("/loggear", Controllers.Login.loggear);
router.post("/register", Controllers.Login.addUser);

// ESS -> module.exports = router
export default router;