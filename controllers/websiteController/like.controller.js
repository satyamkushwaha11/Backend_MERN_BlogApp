const Post = require("../../models/post.model");

const Joi = require("joi");

const addLike = async(req, res) => {
  const { postId } = req.params;
  const schema = Joi.object({
    userId: Joi.string().required(),
    likeType: Joi.number().required(),
  });
  
  var validSchema = schema.validate(req.body);

  if (validSchema.error) {
    return res.status(400).json({
      message: validSchema.error.message || "Bad Request",
      status: 400,
    });
  }
  let likeData = validSchema.value;
  try {
    // FINDING USER ACCOUNT
    const postExist = await Post.findOne({ _id: postId });
    console.log(postExist, "postExist");
    if (postExist) {
      const likeAdded = await Post.updateOne({ _id: postId }, { $push: { likes: likeData}  });
      console.log(likeAdded, "casdafsdfasfsaf");
      return res.status(201).json({
        massage: "liked added  successfully",
      });
    } else {
      return res.status(404).json({
        error: "post does not exist with this id",
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
    addLike
}