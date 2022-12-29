import "../page.css"
import React from "react";

const Contact = () => {
  return (
    <div className="page pb-[4rem]" id="contacts">
      <h1 className="relative bottom-8">Contact</h1>
      <div className=" formbox">
        <div className=" pl-9 pr-16 py-8 m-2 bg-white">
          <form id="contact-form" className="form_container">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required className="card-input" />
            <br />
            <label htmlFor="email">Email: </label>
            <input type="email" id="email" name="email" required className="card-input"/>
            <br />
            <label htmlFor="message" className="message">
              Message:
            </label>
            <textarea id="message" name="message" required></textarea>
            <br />
            <input type="submit" value="Submit" className="submit_button" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
