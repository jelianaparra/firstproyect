const Coments = require("../coments/coments.controller");
const { Router } = require("express");
const router = Router();

// obtener todas los comentarios
router.get("/allcoments", Coments.getComents);
// insertar comentario
router.post("/addcoments", Coments.addComents);
// actualizar comentario
router.put("/uptadecoments", Coments.uptadeComents);
// eliminar comentario
router.delete("/deletecoments", Coments.deleteComents);

module.exports = router;
