const User = require("../../models/user.model");
const Joi = require("joi");

const getAllUsers = async (req, res) => {
    try {
      const users = await User.find({});
      console.log(users, "users");
      return res.status(201).json({
        massage: "post added  successfully",
        users,
      });
    } catch (error) {
      return res.status(500).json({
        massage: "Internal server error",
        error,
      });
    }
  };

  const getUserById=async(req,res)=>{
    const {id}=req.params
    try {
      const posts = await User.findOne({_id:id});
      console.log(posts, "posts");
      if(posts){
        return res.status(200).json({
          massage: "user access  successfully",
          posts,
        });
      }else{
        return res.status(404).json({
          massage: "user with this id is not exist",
          status:404
        });
      }
    
    } catch (error) {
      return res.status(500).json({
        massage: "Internal server error",
        error,
      });
    }
  }

  const deleteUserById = async (req, res) => {
    const { id:userId } = req.params;
    console.log(req.params,userId);
    const schema = Joi.object({
      id: Joi.string().required(),
    });
    var validSchema = schema.validate(req.params);
    if (validSchema.error) {
      return res.status(400).json({
        message: validSchema.error.message || "Bad Request",
        status: 400,
      });
    }
  
    try {
      const exitsUser = await User.findOne({_id:userId});
      console.log(exitsUser, "users");
      if (exitsUser) {
          const deleteuser = await User.deleteOne({_id:userId});
          console.log(deleteuser, "casdafsdfasfsaf");
          return res.status(200).json({
            massage: "user deleted  successfully",
          });
        } else {
          return res.status(404).json({
            error: "user does not exist with this id",
          }); 
        }
  
    } catch (error) {
      return res.status(500).json({
        massage: "Internal server error",
        error,
      });
    }
  };
  
  
module.exports={
    getAllUsers,
    getUserById,
    deleteUserById
}
