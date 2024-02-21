import React, { useState } from 'react';
import './Ratings.css';


const Ratings = () => {
  const [bookName, setBookName] = useState('');
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState('');

  const handleBookNameChange = (event) => {
    setBookName(event.target.value);
  };

  const handleRatingChange = (event) => {
    let newRating = parseInt(event.target.value);
    newRating = Math.max(1, Math.min(5, newRating));
    setRating(newRating);
  };

  const handleReviewChange = (event) => {
    setReview(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Book Name:', bookName);
    console.log('Rating:', rating);
    console.log('Review:', review);
  
    // Reset state values to their initial values
    setBookName('');
    setRating(0);
    setReview('');
  };

  return (
    <div className="ratings-form-container">
      <h2>Rate The Book</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="bookName">Name of the Book:</label>
          <input
            type="text"
            id="bookName"
            name="bookName"
            value={bookName}
            onChange={handleBookNameChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="rating">Rating:</label>
          <input
            type="number"
            id="rating"
            name="rating"
            min="1"
            max="5"
            value={rating}
            onChange={handleRatingChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="review">Review:</label>
          <textarea
            id="review"
            name="review"
            rows="4"
            value={review}
            onChange={handleReviewChange}
          ></textarea>
        </div>
        <button type="submit">Submit Ratings</button>
      </form>
    </div>
  );
};

export default Ratings;
