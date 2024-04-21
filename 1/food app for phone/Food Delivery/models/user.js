const bcrypt = require('bcryptjs');
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema(
    {
      fullName: {
        type: String,
        required: true,
      },
      mobile: {
        type: String,
        required: true
      },
      email: {
        type: String,
        unique: true,
        required: true,
      },
      password: {
        type: String,
        required: true,
      },
      address:{
        type:String
      }
    }
  );
  
  // hash the plain text password before saving
UserSchema.pre("save", async function (next) {
    if (this.isModified("password")) {
      this.password = await bcrypt.hash(this.password, 8);
    }
    next();
});
  
const User = mongoose.model("User", UserSchema);

module.exports = User;