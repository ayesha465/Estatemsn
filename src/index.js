const express = require("express");
const bodyParser = require("body-parser");
const formparser=require('express-fileupload')

const app = express();
const dotenv = require("dotenv");
const db = require("./config/db").get("${process.env.NODE_ENV}");
const User = require('./routes/admin');
const user = require('./routes/User');
const property = require('./routes/Property');
const Auction = require('./routes/Auction');
const cors = require("cors");
app.use(cors(corsOptions));
app.use(formparser());
app.use("/images",express.static(__dirname + '/uploads'))
console.log(__dirname)
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

app.use('/users', User);
app.use('/', user);
app.use('/', property);
app.use('/', Auction);
const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
mongoose.connect(
  db.DATABASE,
  { useNewUrlParser: true, useUnifiedTopology: true },
  
)
.then(() => console.log(' database connected successfully'))
.catch((error) => console.log('Error connecting to the database', error));

var corsOptions = {
  //origin: "https://api.pennyfarthing.nl",
  origin: "http://localhost:3000",
};
// routes
//require("./routes/auth.routes")(app);
//require("./routes/user.routes")(app);

app.get("/", (req, res) => {
  res.json({ message: "Welcome to bycycle application." });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
