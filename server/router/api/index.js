const express = require("express");

const router = express.Router();

const infoRouter = require("router/api/info");
const userRouter = require("router/api/user");
const adminRouter = require("router/api/admin");
const uniformRouter = require("router/api/uniform");
const uploadRouter = require("router/api/uploadFile");
const removeRouter = require("router/api/removeFile");

router.use("/info", infoRouter);
router.use("/user", userRouter);
router.use("/admin", adminRouter);
router.use("/uniform", uniformRouter);
router.use("/", uploadRouter);
router.use("/", removeRouter);

module.exports = router;
