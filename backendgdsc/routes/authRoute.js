const express = require("express");

const { registerController } = require("../controllers/uploadMember");
const router = express.Router();

router.route("/addmember").post(registerController);


module.exports = router;
