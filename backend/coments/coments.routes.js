const Coments = require("../coments/coments.controller");
const { Router } = require("express");
const router = Router();

// obtener todas las pelis
router.get("/allcoments", Coments.getComents);
// insertar peli
router.post("/addcoments", Coments.addComents);

router.put("/uptadecoments", Coments.uptadeComents);

router.delete("/deletecoments", Coments.deleteComents);

module.exports = router;
