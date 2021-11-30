import React, { useRef } from 'react';
import './Contact.css'
import emailjs from 'emailjs-com';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_gkwileo', 'template_jt2cjp9', form.current, 'user_5F8SRjK97Ss1hUmuX4KMz')
      .then((result) => {
        
      }, (error) => {
          
      });

      e.target.reset();
  };
    return (
        <div id="contact" className="container my-5 text-center">
         
            <div className="my-5">
                <p>Have Question ?</p>
                <h1>Contact Me</h1>
            </div>

                <form ref={form} onSubmit={sendEmail}>
                    <div className="row">
                        <div className="col-sm-12 col-md-6 col-lg-6 mb-3">
                            <div className="input-field">
                                <input type="text" name="user_name" placeholder="YOUR NAME" className="text-white py-4"/>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-6">
                            <div className="input-field">
                                <input type="email" name="user_email" 
                                placeholder="YOUR EMAIL"
                                className="text-white py-4"
                                />
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-12 col-lg-12 mb-3">
                            <div className="input-field">
                                <input type="text" name="subject" 
                                placeholder="YOUR SUBJECT"
                                className="text-white py-4"
                                />
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-12 col-lg-12 mb-3">
                            <div className="input-field">
                                <textarea name="message" placeholder="YOUR MESSAGE"
                                className="text-white py-4"
                                />
                            </div>
                        </div>
                        <div className="col-12 submit-input">
                            <input type="submit" value="SEND MESSAGE" 
                            className="mt-5"
                            />
                        </div>
                    </div>
                </form>

        </div>
    );
};

export default Contact;