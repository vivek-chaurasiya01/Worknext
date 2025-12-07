const express = require("express");
const app = express();
const dotenv = require("dotenv");
const cors = require("cors");
const path = require("path"); // <<--- FIXED
const CntactDB = require("./Config/DB");

const route = require("./Router/Singh");
const ContactRouter = require("./Router/Contact");
const DemoRouter = require("./Router/Demo");
const Applyrouter = require("./Router/applyRoute");

dotenv.config();

app.use(express.json());
app.use(cors());

// Static uploads folder
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

CntactDB();

app.get("/", (req, res) => {
  res.send("hello vivek");
});

// Routes
app.use("/api/singUp", route);
app.use("/api/contact", ContactRouter);
app.use("/api", DemoRouter);
app.use("/api", Applyrouter);

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
