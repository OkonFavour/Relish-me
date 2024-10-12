const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Endpoint to process payments
app.post('/processPayment', (req, res) => {
  const paymentData = req.body;
  // In a real application, you would integrate with a payment gateway here
  // and handle the payment processing.
  // Simulating success for this example:
  const paymentResult = { success: true, message: 'Payment processed successfully' };
  res.json(paymentResult);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
