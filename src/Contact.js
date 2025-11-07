// src/Contact.js
import React from "react";

// STEP 1: Import the 'useForm' hook from the new library
import { useForm, ValidationError } from "@formspree/react";

export default function Contact() {
  // STEP 2: Use the 'useForm' hook
  // Replace "YOUR_FORM_ID_HERE" with your actual Formspree ID
  const [state, handleSubmit] = useForm("movyaqvb");

  // STEP 3: Check if the form was submitted successfully
  if (state.succeeded) {
    return (
      <section id="contact">
        <h2>Contact Me</h2>
        <div className="contact-success">
          <h3>Thank you for your message!</h3>
          <p>I will get back to you soon.</p>
        </div>
      </section>
    );
  }

  // If the form is NOT submitted, show the form:
  return (
    <section id="contact">
      <h2>Contact Me</h2>
      <p>
        You can reach me directly via email or phone, or send me a message using
        the form below.
      </p>

      <div className="contact-details">
        {/* ... (your contact details list) ... */}
        <ul>
          <li>
            <strong>Phone:</strong>
            <a href="tel:0538202610">0538202610</a>
          </li>
          <li>
            <strong>Email:</strong>
            <a href="mailto:anas.alsuhaimy@gmail.com">
              anas.alsuhaimy@gmail.com
            </a>
          </li>
          <li>
            <strong>Location:</strong> Makkah - Jeddah
          </li>
        </ul>
      </div>

      <hr />
      <h3>Send a Message</h3>

      {/* STEP 4: Attach the 'handleSubmit' from the hook */}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          {/* We use 'name' attribute so Formspree knows what this field is */}
          <input type="text" id="name" name="name" required />
          <ValidationError prefix="Name" field="name" errors={state.errors} />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
          {/* This shows validation errors from Formspree */}
          <ValidationError prefix="Email" field="email" errors={state.errors} />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" rows="5"></textarea>
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
        </div>
        <div>
          {/* STEP 5: Disable the button while submitting */}
          <button type="submit" disabled={state.submitting}>
            Send Message
          </button>
        </div>
      </form>
    </section>
  );
}
