const Users = require("./controllers.profile");
const { Router } = require("express");
const router = Router();

router.post("/profile", Users.getUser);
router.put("/uptadeprofile", Users.uptadeUser);
router.delete("/deleteprofile", Users.deleteUser);

module.exports = router;
