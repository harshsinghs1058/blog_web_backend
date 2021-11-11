//importing dependencies
const express = require("express");
const userRoutes = require("./routes/user_routes");
const db = require("mongoose");
require('dotenv').config();
const cors = require("cors");

//
//Express - usage work
const app = express();
const PORT = process.env.PORT || 9000;
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

//data base initializing work
db.connect(process.env.DB_URL, { useNewUrlParser: true, useUnifiedTopology: true }).catch((error) => {
    console.log(error);
})


//adding routes
app.use("/api/user", userRoutes);


//temporary routes
app.get("/", (req, res) => {
    console.log("/");
    res.send("hello world");
});

//staring server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});