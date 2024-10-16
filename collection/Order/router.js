const router = require("express").Router();
const { verifyAccessToken, isAdmin } = require("../../middlewares/verifyToken");
const OrderControl = require("./controller");

module.exports = router;
