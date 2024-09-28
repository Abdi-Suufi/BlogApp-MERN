const Post = require("../models/Post");

exports.createPost = async (req, res) => {
  try {
    const { title, content } = req.body;
    const post = new Post({ title, content, user: req.user });
    await post.save();
    res.json(post);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};

exports.getPosts = async (req, res) => {
  try {
    const posts = await Post.find().populate("user", "username");
    res.json(posts);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};