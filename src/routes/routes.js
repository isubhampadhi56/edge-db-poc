const {Router} = require("express");
const router = Router();
const controller = require("../controller/controller.js");
router.post("/addStore", controller.addStore);
router.post("/addCategory", controller.addCategory);
router.post("/addProduct",controller.addProduct);
router.post("/addUser", controller.addUser);

module.exports = router;