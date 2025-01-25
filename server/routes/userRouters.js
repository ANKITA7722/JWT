const express= require("express");
const route= express.Router();
const userController= require("../controllers/userController");

route.post("/registration", userController.userRegistration);
route.post("/login", userController.userLogin);

route.post("/checkuservalidation", userController.userValidation);





module.exports= route;