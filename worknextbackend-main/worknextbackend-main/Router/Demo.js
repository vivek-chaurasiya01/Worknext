const express = require("express");
const { createDemo, getDemos, deleteDemo } = require("../Controler/Demo");
// const { createDemo, getDemos, deleteDemo } = require("../Controller/Demo");

const DemoRouter = express.Router();

DemoRouter.post("/demo", createDemo);
DemoRouter.get("/demo", getDemos);
DemoRouter.delete("/demo/:id", deleteDemo);

module.exports = DemoRouter;
