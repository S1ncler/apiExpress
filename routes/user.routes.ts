//todas las rutas que tengan que ver con el usuario

import { Router } from "express";

const router = Router();

// importacion de controladores

router.get("/Login", (req, res) => {
    res.status(200).json({msg: "Logged"});
});

router.get("/Logout", (req,res) => {
    res.status(200).json({msg: "unlogged"});
})

// ESS -> module.exports = router
export default router;