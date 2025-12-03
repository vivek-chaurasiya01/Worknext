const UserModel = require("../Model/SingUp");
const jwt = require("jsonwebtoken");

const SingUp = async (req, res) => {
  try {
    const { name, email, Number, password } = req.body;
    const existUser = await UserModel.findOne({ email });
    if (existUser) {
      return res.status(400).json({ message: "Email already exists" });
    }

    const newUser = new UserModel({
      name,
      email,
      Number,
      password,
    });

    await newUser.save();

    res.status(200).json({ message: "Signup successful", newUser });
  } catch (error) {
    res.status(500).json({ message: "Internal error", error });
  }
};

const Login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Email Check
    const existUser = await UserModel.findOne({ email });
    if (!existUser) {
      return res.send("Email not found");
    }

    // Password Check
    if (existUser.password !== password) {
      return res.send("Password not match");
    }

    const token = jwt.sign({ userId: existUser._id }, process.env.JWT_SECRET
     );

    // Success
    return res.status(200).json({ message: "Login successful", token });
  } catch (error) {
    return res.status(500).json({ message: "Internal Server Error", error });
  }
};


const ChangePassword = async (req, res) => {
  try {
    const { email, currentPassword, newPassword } = req.body;

    // Find user by email
    const user = await UserModel.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Check current password
    if (user.password !== currentPassword) {
      return res.status(400).json({ message: "Current password is incorrect" });
    }

    // Update password
    user.password = newPassword;
    await user.save();

    return res.status(200).json({ message: "Password changed successfully" });
  } catch (error) {
    return res.status(500).json({ message: "Internal Server Error", error });
  }
};



module.exports = { SingUp, Login, ChangePassword };
