const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MenuSchema = new Schema(
    {
      name: {
        type: String,
        required: true,
      },
      type: {
        type: String,
        enum : ['foods','drinks','snacks','sauces','salads'],
        default:"foods",
        required: true
      },
      price: {
        type: String,
        required: true,
      },
      image: {
        type: String,
        default:""
      }
    }
  );
  

  
const Menu = mongoose.model("Menu", MenuSchema);

module.exports = Menu;