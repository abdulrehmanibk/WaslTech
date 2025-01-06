import React, { useState } from "react";
import "./contact.css";

const Contact = () => {
  const [contactData, setContactData] = useState({
    clientName: "",
    clientEmail: "",
    clientPhone: "",
    clientMessage: "",
  });

  const handleInputs = (e) => {
    let value = e.target.value;
    let name = e.target.name;
    // console.log(contactData);

    setContactData({
      ...contactData,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    var phonenumber = "+923145443143";

    let url =
      "https://wa.me/" +
      phonenumber +
      "?text=" +
      "*Name :* " +
      contactData.clientName +
      "%0a" +
      "*Phone :* " +
      contactData.clientPhone +
      "%0a" +
      "*Email :* " +
      contactData.clientEmail +
      "%0a%0a" +
      "*Message :* " +
      contactData.clientMessage +
      "%0a%0a";

    window.open(url, "_blank").focus();

    console.log(contactData);
    setContactData({
      clientName: "",
      clientEmail: "",
      clientPhone: "",
      clientMessage: "",
    });
  };

  return (
    <>
      <div className="container">
        <div className="banner">
          <h2>Connect With Us</h2>
          <p>
            <a href="/"> Home</a> {">"} Contact
          </p>
        </div>
        <div className="contact-container">
          <div className="left-section">
            <h1>Let's build an awesome project together</h1>
            <p>
              Each demo built with Teba will look different. You can customize
              almost anything in the appearance of your website with only a few
              clicks.
            </p>
            <div className="left_image"></div>
          </div>

          <div className="right-section">
            <div>
              <h2>Fill The Contact Form</h2>
              <p>Feel free to contact with us, we don’t spam your email</p>
            </div>
            <form className="form" onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Your name"
                  name="clientName"
                  onChange={(e) => handleInputs(e)}
                  value={contactData.clientName}
                />
                <input
                  type="text"
                  placeholder="Phone number"
                  name="clientPhone"
                  onChange={(e) => handleInputs(e)}
                  value={contactData.clientPhone}
                />
              </div>
              <input
                type="email"
                placeholder="Email address"
                name="clientEmail"
                onChange={(e) => handleInputs(e)}
                value={contactData.clientEmail}
              />
              <textarea
                placeholder="Write your message"
                rows="4"
                name="clientMessage"
                onChange={(e) => handleInputs(e)}
                value={contactData.clientMessage}
              ></textarea>
              <button
                type="submit"
                className="btn2"
                onSubmit={() => handleSubmit(e)}
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
        <section className="contact">
          <h2>Need Assistance?</h2>
          <h2></h2>
          <p>
            Discover our range of services tailored to meet your needs. Reach
            out to our team for personalized support and solutions.
          </p>
          <a className="btn2" href={"/contact"}>
            See our solutions
          </a>
        </section>
      </div>
    </>
  );
};

export default Contact;
