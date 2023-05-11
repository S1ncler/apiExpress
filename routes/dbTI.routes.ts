import { Router } from "express";
import Controllers from "../controllers/index";

const router = Router();

// importacion de controladores

router.get("/getproducts", Controllers.dbTI.getProducts);
router.get("/get10randomproducts", Controllers.dbTI.get10RandomProducts);
router.get("/getmarcas", Controllers.dbTI.getMarcas);
router.get("/getcategorias", Controllers.dbTI.getCategorias);

// ESS -> module.exports = router
export default router;