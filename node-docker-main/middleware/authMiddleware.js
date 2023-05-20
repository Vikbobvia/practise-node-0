// Phần mềm chạy trước các công cụ controllers
const protect = (req, res, next) => {
  const { user } = req.session;

  if (!user) {
    return res
    .status(401)
    .json({ status: "Thất bại", message: "Không được cho phép" });
  } //chạy nếu authenticate thất bại

  req.user = user;

  next();
};

module.exports = protect;
