

const jwt = require("jsonwebtoken");

const JWT_SECRET = "gnergrigheirg748327bhrbebfr()foeihb!"

const express = require("express");
const app = express();
const mongoose = require("mongoose");
app.use(express.json());
const cors = require("cors");
app.use(cors());
const bcrypt = require("bcryptjs");

const mongoUrl = "mongodb+srv://manoj:manoj@cluster0.owisi19.mongodb.net/?retryWrites=true&w=majority";
mongoose.set('strictQuery', false);
mongoose.connect(mongoUrl,{
  useNewUrlParser : true,
}).then (() => {
  console.log("connected to the database"); 
})
.catch((e) => {
  console.log(e);
});

require("./UserDetails")
// making the register api
const User = mongoose.model("UserInfo");
app.post("/register", async(req, res) => {
  const {fname, lname, email, password} = req.body;
  const encryptedPassword = await bcrypt.hash(password, 10);
  try {
    const OldUser = await User.findOne({email})
    if(OldUser){
      return res.send({error : "User Exists"});
    }
    await User.create({
      fname,
      lname, 
      email, 
      password : encryptedPassword,
    });
    res.send({status : "ok"});
  } catch (error) {
    res.send({status : "error"});
  }
});

app.post("/login", async (req, res) => {
  const {email, password} = req.body;
  const user = await User.findOne({email});
  if(!user) {
    return res.json({error : "User not found"});
  }
  if(await bcrypt.compare(password, user.password)){
    const token = jwt.sign({}, JWT_SECRET);

    if(res.status(201)) {
      return res.json({userid:user._id,status : "ok", data : token});
    }else{ 
      return res.json({error : "error"});
    }
  }
  res.json({status : "error", error : "Invalid Password"});
});

app.get("/register",async(req,res)=>{
    try{
        const coll = await User.find() ;
        return res.json(coll);
    }catch(e){
        return res.json(e);
    }
})

app.listen(3001,() => {
  console.log("server connected!");
});