const express = require("express");
const mongoose = require("mongoose")
const bodyParser = require("body-parser")
// Get All The Routes
const apiRouter = require("../routes/index");

const app = express();

/*************** MIDDLEWARE **********/

// Body parser middleware
app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.urlencoded({ extended: false, limit: "50mb" }));
app.use(bodyParser.json({ limit: "50mb" }));

/************ ROUTES *************/

app.use("/api", apiRouter)

// Add headers in order to perform all operation on API
// Because CORS Thing (Google it if you do not know)
app.use((err,req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Header", "*");

    next();
  });

app.use((err,req,res,next) => {
    console.log(err.stack)
    res.status(500).send({
        error : "An unexpected error occurred, please try again"
    })
})

// set up mongodb atlast cluster connection
const mongoURI = require("../Config/key").mongoURI;
mongoose.connect(mongoURI, {useNewUrlParser: true,useUnifiedTopology: true})
    .then(() => {
        console.log("Mongo DB connected successfully")
    })
    .catch((e) => {
        console.log(`Error connecting to Mongo DB cluster - ${e}`)
    })


const port = process.env.PORT || 3000
app.listen(port, ()=> {
    console.log("Listening To Port 3000")
})