const { model, Schema } = require("mongoose");

const postSchema = new Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: false,
    },
    images: {
      type: Array,
      required: false,
    },
    tags: {
      type: Array,
      required: false,
    },
  },
  { timestamps: true }
);
module.exports = model("posts", postSchema);
