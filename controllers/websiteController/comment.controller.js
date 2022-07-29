const Post = require("../../models/post.model");

const Joi = require("joi");

const addComment = async(req, res) => {
  const { postId } = req.params;
  const schema = Joi.object({
    userId: Joi.string().required(),
    comment: Joi.string().required(),
  });
  
  var validSchema = schema.validate(req.body);

  if (validSchema.error) {
    return res.status(400).json({
      message: validSchema.error.message || "Bad Request",
      status: 400,
    });
  }
  let commentData = validSchema.value;
  try {
    // FINDING USER ACCOUNT
    const postExist = await Post.findOne({ _id: postId });
    console.log(postExist, "postExist");
    if (postExist) {
      const commentAdded = await Post.updateOne({ _id: postId }, { $push: { comments: commentData}  });
      console.log(commentAdded, "casdafsdfasfsaf");
      return res.status(201).json({
        massage: "comment added  successfully",
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
    addComment
}