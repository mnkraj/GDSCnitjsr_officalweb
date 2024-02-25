const Model = require("../models/model");
const Admin=require("../models/Admin")
const registerController = async (req, res) => {
    try {
      const { name, branch, teamType, team, year,profilePhoto,registration } = req.body;
      console.log(req.file)
      if(!name)
      {return res.status(400).send({msg:"Name is required!"})}
      if(!registration)
      {return res.status(400).send({msg:"registration is required!"})}
      if(!branch){
          return  res.status(400).send({msg:'branch. is required!'})
      }
      if(!team){
          return  res.status(400).send({msg:'team is required!'})
      }
      if(!teamType){
          return  res.status(400).send({msg:'team_____type is required!'})
      }
      if(!year){
        return  res.status(400).send({msg:'year is required!'})
       }
      const user = await Model.findOne({ registration: registration.toUpperCase() });
  
      if (user) {
        return res.status(200).send({
          success: false,
          msg: `User with the registrationNumber ${registration} already exists`,
        });
      }
  
      
      const newUser = await new Model({
        name,
        branch,
        registration: registration.toUpperCase(),
        year,
        team,
        teamType,
        profilePhoto: req.file.filename, // Use the filename provided by multer
        imageurl:req.file.path,

      }).save();
  
      res.status(201).send({
        success: true,
        msg: "User registered successfully",
        newUser,
      });
    } catch (error) {
      console.log(error);
      res.status(500).send({ msg: "Internal server error" });
    }
  };
  const authenticate = async (req, res) => {
    const {email}=req.body;
    const user=await Admin.findOne({email})

  if(user && user.verified){
    res.json({success:true,msg:"loggined"})
    }
    else{
      //
      return res.json({success:false,msg:"please login"})
    }
  }
module.exports = {
    registerController,authenticate
   
  };