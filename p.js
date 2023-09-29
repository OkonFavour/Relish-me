// JavaScript code for the payment form
document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('.form');
    const payButton = document.querySelector('.btn');
  
    payButton.addEventListener('click', () => {
      const cardHolder = document.querySelector('[name="card-holder"]').value;
      const cardNumber = document.querySelector('[name="card-number"]').value;
      const expiryDate = document.querySelector('[name="expiry-data"]').value;
      const cvc = document.querySelector('[name="cvc"]').value;
  
      // Create a payment object with the collected data
      const paymentData = {
        cardHolder,
        cardNumber,
        expiryDate,
        cvc,
      };
  
      // Send the payment data to the server for processing
      fetch('/processPayment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(paymentData),
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.success) {
            // Payment was successful, handle accordingly (e.g., show a success message)
            alert(data.message);
          } else {
            // Payment failed, handle accordingly (e.g., show an error message)
            alert('Payment failed. Please try again.');
          }
        })
        .catch((error) => {
          console.error('Error:', error);
        });
    });
  });
  