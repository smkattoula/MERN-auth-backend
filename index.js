// set up the requirements 

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

// set up express 
// set up middleware: app.use (runs whenever we try to interact with any routes in express)
// express.json() is a json body parser that allows you to read json objects from the requests we send to express
// app.use(cors()) enables the cross-origin resource sharing, in case it's required

const app = express();
app.use(express.json());
app.use(cors());

// set up the server
// since we're using localhost for our test server, process.env.PORT allows other host platforms, such as heroku, to assign you an environment variable called PORT so that your project can be seen publicly.
//app.listen(PORT) starts the server with a callback function: () => console.log(`The server has started on port: ${PORT}`)

const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log(`The server has started on port: ${PORT}`));

// set up mongoose
// include useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true (because we want to upgrade to the new code whenever mongoose releases an update)
// include callback function for possible errors


mongoose.connect(process.env.MONGODB_CONNECTION_STRING, 
{
    useNewUrlParser: true, 
    useUnifiedTopology: true, 
    useCreateIndex: true,
}, 
    (err) => {
    if (err) throw err;
    console.log("MongoDB connection established successfully!")
});

// set up routes (using middleware)
// if a user is on the /users path, the middleware will then enable the userRouter which will continue the all of the paths that are in userRouter ("/register", "/login")

app.use("/users", require("./routes/userRouter"));
 