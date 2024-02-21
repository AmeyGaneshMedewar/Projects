import React, { useState } from 'react';
import './FeedbackForm.css';

const FeedbackForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [feedback, setFeedback] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can handle form submission, e.g., send data to backend
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Feedback:', feedback);
    // Reset form fields after submission
    setName('');
    setEmail('');
    setFeedback('');
  };

  return (
    <div className="feedback-form-container">
      <h2>Share Your Feedback</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="feedback">Feedback:</label>
          <textarea
            id="feedback"
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            required
          ></textarea>
        </div>
        <button type="submit">Submit Feedback</button>
      </form>
    </div>
  );
};

export default FeedbackForm;
