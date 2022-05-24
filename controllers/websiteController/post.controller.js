const Post = require("../../models/post.model");
const User = require("../../models/user.model");
const Joi = require("joi");

const addPost = async (req, res) => {
  const { userId } = req.body;
  const schema = Joi.object({
    userId: Joi.string().required(),
    title: Joi.string().required(),
    description: Joi.string().optional().allow(null, ""),
    images: Joi.array().items().optional(),
    tags: Joi.array().items().optional(),
  });

  var validSchema = schema.validate(req.body);

  if (validSchema.error) {
    return res.status(400).json({
      message: validSchema.error.message || "Bad Request",
      status: 400,
    });
  }
  let postData = validSchema.value;

  try {
    // FINDING USER ACCOUNT
    const user = await User.findOne({ _id: userId });
    console.log(user, "user");
    if (user) {
      const createPost = await Post.create(postData);
      console.log(createPost, "casdafsdfasfsaf");
      return res.status(201).json({
        massage: "post added  successfully",
      });
    } else {
      return res.status(404).json({
        error: "User does not exist with this email",
      });
    }
  } catch (error) {
    return res.status(500).json({
      massage: "Internal server error",
      error,
    });
  }
};

const editPost = async (req, res) => {};

const getPostById = async (req, res) => {};

const getAllPostByUserId = async (req, res) => {};

const getAllPosts = async (req, res) => {
  try {
    const posts = await Post.find({});
    console.log(posts, "posts");
    return res.status(201).json({
      massage: "post added  successfully",
      posts,
    });
  } catch (error) {
    return res.status(500).json({
      massage: "Internal server error",
      error,
    });
  }
};

const deletePost = async (req, res) => {
  const { id:postId } = req.params;
  console.log(req.params,postId);
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
  let data = validSchema.value;

  try {
    const posts = await Post.findOne({_id:postId});
    console.log(posts, "posts");
    if (posts) {
        const deletePost = await Post.deleteOne({_id:postId});
        console.log(deletePost, "casdafsdfasfsaf");
        return res.status(201).json({
          massage: "post deleted  successfully",
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

module.exports = {
  addPost,
  editPost,
  getPostById,
  getAllPostByUserId,
  getAllPosts,
  deletePost,
};
