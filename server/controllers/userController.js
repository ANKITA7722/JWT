const UserModel= require("../models/userModels");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");


const userValidation=async(req, res)=>{
  const token = req.header("x-auth-token");

  if (!token) return res.json(false);
  const verified = jwt.verify(token, "raj1234");
  if (!verified) return res.json(false);
   return res.json(true);

}


const userRegistration=async(req, res)=>{
        const {username, email, password}= req.body;
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);      
        const Data= await UserModel.create({
            username:username,
            email:email,
            password:hashedPassword
        })
        res.send("OK");
}


const userLogin=async(req, res)=>{

    const {email, password} = req.body;
    const User = await UserModel.findOne({
        email: email
      });   

     if (!User) {
        res.status(404).json({
          message: "Email not found",
          status: "404 Not Found",
        });
        return;
      }

     const validPassword = await bcrypt.compare(
        password,
        User.password
      );

      if (!validPassword) {
        res.status(400).json({
          message: "Invalid password",
          status: "400 Bad Request",
        });
        return;
      }
  const token = jwt.sign({ id: User._id, name:User.name, email:User.email }, "ankita1234");
      res.json({ token, user: { id: User._id, username: User.username } });
}

module.exports={
     userRegistration,
     userLogin,
     userValidation
}