const express = require("express");
const app = express();
const dotenv = require("dotenv");
const cors = require("cors");
const CntactDB = require("./Config/DB");
const route = require("./Router/Singh");
const ContactRouter = require("./Router/Contact");
const DemoRouter = require("./Router/Demo");
// const { route } = require("./Model/Singh");

dotenv.config();

app.use(express.json());

app.use(cors());
//  Data base coonction
CntactDB();

app.get("/", (req, res) => {
  res.send("hello vivek");
});
//  routing start

app.use("/api/singUp/", route);
app.use("/api/contact/", ContactRouter);
app.use("/api", DemoRouter);
app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
