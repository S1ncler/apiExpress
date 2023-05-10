import { Router } from "express";
import Controllers from "../controllers/index";

const router = Router();

// importacion de controladores

router.get("/getproducts", Controllers.dbTI.getProducts);

// ESS -> module.exports = router
export default router;