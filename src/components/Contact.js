import React from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_pr4xnt2',
      'template_h2tlvai',
      e.target,
      'w-Pmig9pfM39NZmES'
    )
    .then((result) => {
      document.getElementById('msg').innerText = 'Message sent!';
    }, (error) => {
      document.getElementById('msg').innerText = 'Error sending message.';
    });
  };

  return (
    <section id="contact" className="contact-content">
      <div className="container">
        <h2>Contact Me</h2>
        <div className="contact">
          <form onSubmit={handleSubmit} name="submitToEmailJS">
            <input type="text" name="NAME" placeholder="Name" required />
            <input type="email" name="EMAIL" placeholder="Email" required />
            <input type="text" name="SUBJECT" placeholder="Subject" />
            <textarea name="MESSAGE" placeholder="Message"></textarea>
            <input type="submit" value="Send Message" className="submit" />
          </form>
          <span id="msg"></span>
        </div>
      </div>
    </section>
  );
};

export default Contact;
