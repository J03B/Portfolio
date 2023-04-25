import React, { useState } from 'react';
import { useForm } from '@formspree/react';
import { validateEmail } from '../utils/helpers';

function Contact() {
  const [state, handleSubmit] = useForm("jmbContact123");

  const [formState, setFormState] = useState({ name: '', email: '', message: '' });

  const [errorMessage, setErrorMessage] = useState('');
  const { name, email, message } = formState;

  const handleChange = (e) => {
    if (e.target.name === 'email') {
      const isValid = validateEmail(e.target.value);
      if (!isValid) {
        setErrorMessage('Your email is invalid.');
      } else {
        setErrorMessage('');
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`A ${e.target.name} is required.`);
      } else {
        setErrorMessage('');
      }
    }
    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
      console.log('Handle Form', formState);
    }
  };

  return (
    <div className="container">
      <div className="container-fluid">
        <p className="display-6">Contact Me</p>
        <hr />

        <form id="contact-form" onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label" htmlFor="name">Name</label>
            <input className="form-control" type="text" name="name" defaultValue={name} onBlur={handleChange} />
          </div>
          <div className="mb-3">
            <label className="form-label" htmlFor="email">Email Address</label>
            <input className="form-control" type="email" name="email" defaultValue={email} onBlur={handleChange} />
          </div>
          <div className="mb-3">
            <label className="form-label" htmlFor="message">Message</label>
            <textarea className="textarea form-control" name="message" rows="5" defaultValue={message} onBlur={handleChange} />
          </div>

          {errorMessage && (
            <div>
              <p className="is-danger">{errorMessage}</p>
            </div>
          )}
          <button className="btn btn-primary mb-3" type="submit">Submit</button>
        </form>

        <hr />
      </div>
    </div>
  );
}

export default Contact;