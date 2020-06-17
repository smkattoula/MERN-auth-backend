 // Require Mongoose

 const mongoose = require("mongoose");

 // Create user schema 

 const userSchema = new mongoose.Schema({
     email: { type: String, required: true, unique: true},
     password: { type: String, required: true, minlength: 5},
     displayName: { type: String},
 });

 // Export the mongoose model in order to interact with our mongoDB.
 // 'User' is the file or variable that we will export
 // It houses the 'mongoose.model()' method which allows you to search or save users in the database
 // It requires a name for the collection to store the model in ("user") and the schema of how it should be formated (userSchema). 

 module.exports = User = mongoose.model("user", userSchema);
