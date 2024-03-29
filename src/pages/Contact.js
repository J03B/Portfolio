import React, { useState } from 'react';
import { validateEmail } from '../utils/helpers';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';

function Contact() {
  // Usestate variables for form data collection
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [errorMessage, setErrorMessage] = useState('');
  const { name, email, message } = formState;

  const handleChange = (e) => {
    if (e.target.dataset.name === "email") {
      const isValid = validateEmail(e.target.value);
      if (!isValid) {
        setErrorMessage('Your email is invalid.');
      } else {
        setErrorMessage('');
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`A ${e.target.dataset.name} is required.`);
      } else {
        setErrorMessage('');
      }
    }
    if (!errorMessage) {
      setFormState({ ...formState, [e.target.dataset.name]: e.target.value });
    }
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    console.log(formState);
    if (formState.name.length && validateEmail(formState.email) && formState.message.length) {
      console.log("Sending the form response to Joe Black");
      var formSub = document.getElementById('contact-form');
      formSub.action = `https://docs.google.com/forms/d/e/1FAIpQLSciRHXRRAdRnU5jiLGr9ieheCjZ2-U2CKI0I70zR1NheHCxQg/formResponse?usp=pp_url&entry.1026203063=${formState.name}&entry.271297233=${formState.email}&entry.1585354681=${formState.message}`;
      formSub.submit();
      return true;
    }
    setErrorMessage('Please fill out the form before submitting.');
    return false;
  }
  
  // Action for prefilled link
  // https://docs.google.com/forms/d/e/1FAIpQLSciRHXRRAdRnU5jiLGr9ieheCjZ2-U2CKI0I70zR1NheHCxQg/viewform?usp=pp_url&entry.1026203063=Name&entry.271297233=byu@gmail.com&entry.1585354681=Rattata
  return (
    <div className="container">
      <div className="container-fluid">
        <p className="display-6">Contact Me</p>
        <hr />

        <form id="contact-form" action="https://docs.google.com/forms/d/e/1FAIpQLSciRHXRRAdRnU5jiLGr9ieheCjZ2-U2CKI0I70zR1NheHCxQg/formResponse?usp=pp_url" onSubmit={handleFormSubmit}>{/*onSubmit={handleSubmit}>*/}
          <div className="mb-3">
            <label className="form-label" htmlFor="entry.1026203063">Name*</label>
            <input className="form-control" type="text" name="entry.1026203063" data-name="name" defaultValue={name} onBlur={handleChange} />
          </div>
          <div className="mb-3">
            <label className="form-label" htmlFor="entry.271297233">Email Address*</label>
            <input className="form-control" type="email" name="entry.271297233" data-name="email" defaultValue={email} onBlur={handleChange} />
          </div>
          <div className="mb-3">
            <label className="form-label" htmlFor="entry.1585354681">Message*</label>
            <textarea className="textarea form-control" name="entry.1585354681" data-name="message" rows="5" defaultValue={message} onBlur={handleChange} />
          </div>

          {errorMessage && (
            <Alert severity='error' sx={{ my: 2 }}>
              {errorMessage}
            </Alert>
          )}
          <Button variant='contained' className="btn btn-primary mb-3" type="Submit">Submit</Button>
        </form>

        <hr />
      </div>
    </div>
  );
}

export default Contact;