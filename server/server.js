const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const cors = require("cors");

const app = express();

//Import routes
const InvoicesRoute = require("./routes/invoiceRoute");

//Import body parser
const bodyParser = require("body-parser")

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: "true" }));
app.use(express.json());
app.use(cors());

//Import DB conection
const PORT = process.env.PORT || 5000;
const DB_CONNECTION = process.env.DB_CONNECTION;
mongoose
  .connect(DB_CONNECTION)
  .then(() => console.log("Connected to Database"))
  .catch((err) => console.log(err));



app.use("/api", InvoicesRoute);

app.get("/", (req, res) => {
  res.end("Nodejs running");
});

//configurando server básico
app.listen(PORT, function () {
  console.log("Server startup at port 5000");
});
