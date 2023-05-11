import { Router } from "express";
import Controllers from "../controllers/index";

const router = Router();

// importacion de controladores

router.get("/getproducts", Controllers.dbTI.getProducts);
router.get("/getrandomproducts", Controllers.dbTI.getRandomProducts);
router.get("/getmarcas", Controllers.dbTI.getMarcas);
router.get("/getcategorias", Controllers.dbTI.getCategorias);


// ESS -> module.exports = router
export default router;