import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Contactus.css';

const ContactUs = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false); // New loading state

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Set loading state to true on form submission
    setLoading(true);

    try {
      // Send email using EmailJS
      await emailjs.sendForm(
        'service_0628bwd', // Replace with your EmailJS service ID
        'template_wej8wtg', // Replace with your EmailJS template ID
        e.target,
        'AbgglDZxJrJDtsFSD' // Replace with your EmailJS user ID
      );
      // If email sent successfully, show success message
      toast.success('Message sent successfully!');
      // Reset form fields
      setName('');
      setEmail('');
      setMessage('');
    } catch (error) {
      console.error('Error:', error);
      // If there's an error sending the email, show error message
      toast.error('Failed to send message. Please try again later.');
    } finally {
      // Set loading state back to false when submission is complete (successful or failed)
      setLoading(false);
    }
  };

  return (
    <div className="contactus-container">
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name" className="contactus-label">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="contactus-input"
            required
          />
        </div>
        <div>
          <label htmlFor="email" className="contactus-label">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="contactus-input"
            required
          />
        </div>
        <div>
          <label htmlFor="message" className="contactus-label">Message:</label>
          <textarea
            id="message"
            name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="contactus-textarea"
            required
          ></textarea>
        </div>
        <button type="submit" className="contactus-button" disabled={loading}>
          {loading ? "Loading..." : "Submit"} {/* Display "Loading..." when loading is true */}
        </button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default ContactUs;
