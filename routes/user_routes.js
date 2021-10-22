//importing dependencies
const express = require("express");
const { check } = require("express-validator");
//
//importing modules
const { login, signUp } = require("../controller/user_controllers");
const routes = express.Router();

routes.post("/login", [check("email").normalizeEmail().isEmail(), check("password").isLength({ min: 8 })], login);


routes.post("/signUp", [check("email").normalizeEmail().isEmail(), check("password").isLength({ min: 8 }), check("name").not().isEmpty()], signUp);

module.exports = routes;