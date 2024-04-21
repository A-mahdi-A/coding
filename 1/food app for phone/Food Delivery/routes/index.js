const express = require("express");
const router = express.Router();
const User = require("../models/user");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const authMiddleware = require("../middleware/authMiddleware");
const Menu = require("../models/menu");
const Order = require("../models/order");

router.post("/sign-up", async (req, res) => {
  const { fullName, mobile, email, password, address } = req.body;

  const creatUser = new User({
    fullName,
    mobile,
    email,
    password,
    address,
  });
  await creatUser.save();
  res.json({ data: creatUser });
});

router.post("/sign-in", async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({
    email,
  });
  if (!user) {
    return res.status(404).json({ message: "user not found" });
  }
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    return res.status(401).json({ message: "password incorrect" });
  }
  let token = jwt.sign(
    {
      _id: user._id,
      email: user.email,
      mobile: user.mobile,
    },
    "SECRET_JWT_CODE_A&#%_765",
    {
      expiresIn: "1h",
    }
  );
  res.json({
    token,
  });
});

router.get("/user", authMiddleware, async (req, res, next) => {
  res.json({
    data: req.user,
  });
});

router.post("/menu", authMiddleware, async (req, res, next) => {
  try {
    const { name, type, price } = req.body;

    const createMenu = new Menu({
      name,
      type,
      price,
    });
    await createMenu.save();
    res.json({
      data: createMenu,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "can not create menu",
    });
  }
});

router.get("/menu", authMiddleware, async (req, res, next) => {
  const { type } = req.query;
  const menu = await Menu.find({ type });
  res.json({
    total: menu.length,
    data: menu,
  });
});

router.get("/search/menu", authMiddleware, async (req, res, next) => {
  const { name } = req.query;
  const menu = await Menu.find({ name });
  res.json({
    total: menu.length,
    data: menu,
  });
});

router.post("/order", authMiddleware, async (req, res, next) => {
  try {
    const { orderItems } = req.body;

    // Calculate total amount based on menu item prices and quantities
    const totalAmount = await Promise.all(orderItems.map(async (item) => {
      const menuItem = await Menu.findById(item.menuItemId);
      return Number(menuItem.price) * item.quantity;
    }))
    .then(amounts => amounts.reduce((total, amount) => total + amount, 0));

    const order = new Order({
      user: req.user._id,
      items: orderItems,
      totalAmount: totalAmount.toFixed(2), // Assuming you want a fixed decimal point
    });

    const savedOrder = await order.save();
    res.json({
      data: savedOrder,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Cannot create order",
      error: error.message,
    });
  }
});


router.get("/order/:orderId", authMiddleware, async (req, res, next) => {
  try {
    const { orderId } = req.params;
    const order = await Order.findById(orderId)
      .populate("user",'-password')
      .populate("items.menuItemId");
    if (!order) {
      return res.status(404).json({
        message: "order not found",
      });
    }
    res.json({
      data: order,
    });
  } catch (error) {
    return res.status(500).json({
      message: "can not find order",
    });
  }
});

router.get("/orders", authMiddleware, async (req, res, next) => {
  try {
    const orders = await Order.find({ user: req.user._id })
      .populate("user",'-password')
      .populate("items.menuItemId");
      res.json({
        data:orders
      })
  } catch (error) {
    return res.status(500).json({
      message: "error find order",
    });
  }
});

router.patch('/order/:orderId', authMiddleware, async(req, res, next)=>{
  const {newStatus} = req.body
  const {orderId} = req.params
  try {
    const order = await Order.findByIdAndUpdate(orderId, { status: newStatus }, { new: true });
    res.json({
      data:order
    })
  } catch (error) {
    return res.status(500).json({
      message: "order error",
    });
  }
})

module.exports = router;
