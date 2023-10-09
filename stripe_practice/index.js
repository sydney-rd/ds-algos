const express = require("express");
const stripe = require("stripe")("STRIPE_SECRET_KEY");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static("public"));

// define a route for processing paymnets
app.post("/create-payment-intent", async (req, res) => {
  const { items } = req.body;
});

// this creates paymentIntent with the order amt and currency
const paymentIntent = await stripe.paymentIntents.create({
  amount: calculateOrderAmount(items),
  currency: "usd",
});

// send the client secret to the client
res.json({ clientSecret: paymentIntent.client_secret });

// calculates the total order amount based on items
const calculateOrderAmount = (items) => {
  return 1000; // 10.00 simple example
};

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
