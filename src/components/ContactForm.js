import React, { useState } from 'react';
import '../styles/ContactForm.css';
import '../styles/dark_theme/ContactForm.css';

const ContactForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleNameChange = (e) => {
        setName(e.target.value);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handleMessageChange = (e) => {
        setMessage(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = {
            name,
            email,
            message
        };

        // Perform the form submission
        fetch('/api/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
            .then(response => response.json())
            .then(data => {
                // Handle the response from the server
                console.log(data); // You can customize this based on your server response

                // Reset the form fields
                setName('');
                setEmail('');
                setMessage('');

                // Mark the form as submitted
                setSubmitted(true);
            })
            .catch(error => {
                // Handle any error that occurred during the form submission
                console.error(error);
            });
    };


    return (
        <div className="contact-form">
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name:</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={name}
                    onChange={handleNameChange}
                    required
                />

                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={email}
                    onChange={handleEmailChange}
                    required
                />

                <label htmlFor="message">Message:</label>
                <textarea
                    id="message"
                    name="message"
                    value={message}
                    onChange={handleMessageChange}
                    required
                ></textarea>

                <button type="submit">Send</button>
            </form>
        </div>
    );
};

export default ContactForm;
