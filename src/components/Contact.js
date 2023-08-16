import React from 'react';
import '../assets/style/contact.css';
import { useForm, ValidationError } from '@formspree/react';

function ContactForm() {
  const [state, handleSubmit] = useForm("mbjvgblo");

  if (state.succeeded) {
    return <p>Thanks for contact me!</p>;
  }

  return (
    <form onSubmit={handleSubmit} className="contact-form">
      <div className="name-fields">
        <div className="name-field">
          <input
            id="firstName"
            type="text"
            name="firstName"
            placeholder='First Name'
            required
          />
        </div>
        <div className="name-field">
          <input
            id="lastName"
            type="text"
            name="lastName"
            placeholder='Last Name'
            required
          />
        </div>
      </div>
      
      <div className="email-field">
        <input
          id="email"
          type="email"
          name="email"
          placeholder='Email Address'
          required
        />
        <ValidationError
          prefix="Email"
          field="email"
          errors={state.errors}
        />
      </div>

      <div className="message-field">
        <textarea
          id="message"
          name="message"
          placeholder='Message'
          required
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
        />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
      </div>

      <button type="submit" className="buttons" disabled={state.submitting}>
        Submit
      </button>
    </form>
  );
}

const Contact = () => {
  return (
    <div className='contact-container' id="contact">
      <h1 className='title subtitle'>GET IN TOUCH</h1>
      <h1 className='title'>CONTACT</h1>
      <p className='resume'>I'm always interested in hearing about new projects, so if you'd like to chat please get in touch.</p>
      <ContactForm />
    </div>
  );
};

export default Contact;
