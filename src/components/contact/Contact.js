import { useRef } from "react";
import "./contact.css";
// import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  //   const sendEmail = (e) => {
  //     e.preventDefault();

  //     emailjs
  //       .sendForm(
  //         "service_4bf4ppm",
  //         "template_s5xo62r",
  //         form.current,
  //         "7LNQWkRhDsQZ8HzrY"
  //       )
  //       .then(
  //         (result) => {
  //           console.log(result.text);
  //           console.log("message sent");
  //         },
  //         (error) => {
  //           console.log(error.text);
  //         }
  //       );
  //     e.target.reset();
  //   };
  const styles = {
    position: "relative bottom-2",
  };

  return (
    <>
      <h1 className="text-center text-2xl md:text-5xl text-iconColor pt-4">
        Get your printing Quote!
      </h1>
      <div className="contactsContainer mx-auto px-auto md:px-32">
        <div className="contact-box rounded-3xl p-0 md:p-9">
          {/* <div className="left hidden md:block"></div> */}
          <div className="right w-fit md:w-full">
            <h2></h2>

            <form ref={form}>
              <input
                type="text"
                className="field w-96 md:w-full"
                placeholder="Your Name"
                name="name"
              />
              <input
                type="email"
                className="field"
                placeholder="Your Email"
                name="email"
              />
              <input
                type="text"
                className="field"
                placeholder="Phone"
                name="phone"
              />
              <textarea
                placeholder="Please place your query"
                className="field"
                name="message"
              ></textarea>
              <button type="submit" className="btn ">
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default Contact;
