const Post = require("../models/postModel");

exports.getAllPosts = async (req, res, next) => {
  try {
    const posts = await Post.find();

    res.status(200).json({
      status: "Lấy tất cả posts Thành công",
      results: posts.length,
      data: {
        posts,
      },
    });
  } catch (e) {
    res.status(400).json({
      status: "Thất bại",
    });
  }
};

exports.getOnePost = async (req, res, next) => {
  try {
    const post = await Post.findById(req.params.id);

    res.status(200).json({
      status: "Lấy 1 post thành công",

      data: {
        post,
      },
    });
  } catch (e) {
    res.status(400).json({
      status: "Thất bại",
    });
  }
};

exports.createPost = async (req, res, next) => {
  try {
    const post = await Post.create(req.body);

    res.status(200).json({
      status: "Tạo Thành công",

      data: {
        post,
      },
    });
  } catch (e) {
    console.log(e);
    res.status(400).json({
      status: "Tạo Thất bại",
    });
  }
};

exports.updatePost = async (req, res, next) => {
  try {
    const post = await Post.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    res.status(200).json({
      status: "Cập nhật thành công",

      data: {
        post,
      },
    });
  } catch (e) {
    res.status(400).json({
      status: "Cập nhật thất bại",
    });
  }
};

exports.deletePost = async (req, res, next) => {
  try {
    const post = await Post.findByIdAndDelete(req.params.id);

    res.status(200).json({
      status: "Xóa thành công",
    });
  } catch (e) {
    res.status(400).json({
      status: "Xóa thất bại",
    });
  }
};
