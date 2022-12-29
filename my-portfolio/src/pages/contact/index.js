import "../page.css";
import React from "react";

const Contact = () => {

  return (
    <div className="page pb-[4rem]" id="contacts">
      <h1 className="relative bottom-8">Contact</h1>
      <div className=" formbox">
        <div className=" pl-9 pr-16 py-8 m-2 bg-white">
          <form
            id="contact-form"
            className="form_container"
            method="POST"
            action="https://formsubmit.co/rs508735@gmail.com"
            rel="noreferrer"
          >
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="card-input"
            />
            <br />
            <label htmlFor="email">Email: </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="card-input"
            />
            <br />
            <label htmlFor="message" className="message">
              Message:
            </label>
            <textarea id="message" name="message" required></textarea>
            <br />
            <input type="hidden" name="_captcha" value="false" />
            <input
              type="submit"
              value="Submit"
              className="submit_button cursor-pointer"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
