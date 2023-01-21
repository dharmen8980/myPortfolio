import "../page.css";
import React from "react";
import { useRef} from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const form = useRef();
  const SERVICEID = "service_e6akx7j";
  const TEMPLATEID = "template_v5olxyi";
  const PUBLICKEY = "vANPSK0Y7sYwZtHeK";

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm(SERVICEID, TEMPLATEID, form.current, PUBLICKEY).then(
      (result) => {
        toast.success("Message sent, I'll get back to you soon", {
          position: "bottom-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        e.target.reset();
      },
      (error) => {
        toast.error("Something went wrong, please try again", {
          position: "bottom-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
    );
  }

  return (
    <div className="page pb-[4rem]" id="contacts">
      <h1 className="relative bottom-8">Contact</h1>
      <div className=" formbox">
        <div className=" pl-9 pr-16 py-8 m-2 bg-white">
          <form
            className="form_container"
            ref={form}
            onSubmit={sendEmail}
          >
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              name="name"
              required
              className="card-input"
            />
            <br />
            <label htmlFor="email">Email: </label>
            <input
              type="email"
              name="email"
              required
              className="card-input"
            />
            <br />
            <label htmlFor="message" className="message">
              Message:
            </label>
            <textarea name="message" required></textarea>
            <br />
            <input
              type="submit"
              value="Submit"
              className="submit_button cursor-pointer"
            />
          </form>
          <ToastContainer />
        </div>
      </div>
    </div>
  );
};

export default Contact;
