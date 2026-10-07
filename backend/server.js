const express = require("express");
const cors = require("cors");
const Razorpay = require("razorpay");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET
});

app.get("/", (req, res) => {
  res.send("Smart Canteen Backend Running");
});

app.post("/create-order", async (req, res) => {
  try {
    const { amount } = req.body;

    const order = await razorpay.orders.create({
      amount: Math.round(amount * 100),
      currency: "INR",
      receipt: "canteen_" + Date.now()
    });

    res.json(order);

  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Payment order failed"
    });
  }
});

app.listen(5000, () => {
  console.log("Backend running on http://localhost:5000");
});