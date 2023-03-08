const express = require("express");
const app = express();
const port = 3000;
const bodyParse = require("body-parser");
const connectDB = require("./db/connection");
const router = require("./routing/route");


app.set("view engine", "ejs")
app.use(bodyParse.urlencoded({ extended: false }))
app.use(express.static("public"))
connectDB();
app.use("/", router)
app.listen(port, () => console.log("działa"));
