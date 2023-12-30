import React, { useState } from 'react';
import '../styles/songPurchase.css';

const SongPurchase = ({ setShowMask }) => {
  const [cardDetails, setCardDetails] = useState({
    cardNumber: '',
    expiry: '',
    cvv: ''
  });

  const handleChange = (e) => {
    setCardDetails({ ...cardDetails, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would handle the submission of payment details to Square.
    console.log(cardDetails);
    // Close the pop-up and mask after submission.
    setShowMask(false);
  };

  // Close the pop-up without making a purchase.
  const handleClose = () => {
    setShowMask(false);
  };

  return (
    <div className="song-purchase-container">
      <form onSubmit={handleSubmit} className="song-purchase-form">
        <input
          type="text"
          name="cardNumber"
          value={cardDetails.cardNumber}
          onChange={handleChange}
          placeholder="Card Number"
          required
        />
        <input
          type="text"
          name="expiry"
          value={cardDetails.expiry}
          onChange={handleChange}
          placeholder="MM/YY"
          required
        />
        <input
          type="text"
          name="cvv"
          value={cardDetails.cvv}
          onChange={handleChange}
          placeholder="CVV"
          required
        />
        <button type="submit" className="submit-button">Buy Now</button>
        <button type="button" className="close-button" onClick={handleClose}>Cancel</button>
      </form>
    </div>
  );
};

export default SongPurchase;