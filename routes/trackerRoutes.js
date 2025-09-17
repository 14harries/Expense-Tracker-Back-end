const express = require("express");
const { getExp, postExp, deleteExp, updateExp } = require("../controller/trackerController");

const router = express.Router();

router.get("/",getExp)
router.post("/post",postExp)
router.delete("/:id",deleteExp)
router.put("/:id",updateExp)


module.exports = router;

