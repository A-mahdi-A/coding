const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const OrderSchema = new Schema(
{
      user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
      },
      items: [
        {
          menuItemId: {
            type: Schema.Types.ObjectId,
            ref: 'Menu',
            required: true,
          },
          quantity: {
            type: Number,
            required: true,
          },
        }
      ],
      totalAmount: {
        type: String,
        required: true,
      },
      status: {
        type: String,
        enum: ['pending', 'confirmed', 'delivered'],
        default: 'pending',
      },
    },
    { timestamps: true }
  );
  

  
const Order = mongoose.model("Order", OrderSchema);

module.exports = Order;