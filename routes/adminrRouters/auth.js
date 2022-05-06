const express = require("express")
const router = express.Router()
const userControllers = require("../../controllers/authController/auth.controller")

router.post("/signup", userControllers.signup)
router.post("/login", userControllers.login)
// router.post("/forget-password", userControllers.userForgetPassword)

module.exports = router
