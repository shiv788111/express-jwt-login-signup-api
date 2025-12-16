export function getProfile(req, res) {
  res.status(200).json({
    message: "Profile fetched successfully. Welcome back!",
    success: true,
    user: req.user,
  });
}
