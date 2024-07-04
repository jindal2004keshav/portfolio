import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import { useScroll } from "./ScrollContext";

export const Contact = () => {
  const formInitialDetails = {
    firstName: "",
    lastName: "",
    email: "",
    message: ""
  };

  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState("Send");
  const [status, setStatus] = useState({});
  const { contactRef } = useScroll();

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value
    });
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    setStatus({ message: "Sending...." });

    try {
      const formData = new FormData(event.target);
      formData.append("access_key", "2c77181a-4a28-4aeb-8bef-dc81bce286fe");

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setStatus({ message: "Form Submitted Successfully", success: true });
        setFormDetails(formInitialDetails); // Reset form after successful submission
      } else {
        setStatus({ message: data.message, success: false });
      }
    } catch (error) {
      setStatus({ message: "An error occurred. Please try again later.", success: false });
      console.error("Error submitting form:", error);
    }
  };

  return (
    <section className="contact" id="connect" ref={contactRef}>
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <img className="animate__animated animate__zoomIn" src={contactImg} alt="Contact Us" />
          </Col>
          <Col md={6}>
            <div className="animate__animated animate__fadeIn">
              <h2>Get In Touch</h2>
              <form onSubmit={onSubmit}>
                <Row>
                  <Col sm={6} className="px-1">
                    <input
                      type="text"
                      name="firstName"
                      value={formDetails.firstName}
                      placeholder="First Name"
                      onChange={(e) => onFormUpdate("firstName", e.target.value)}
                    />
                  </Col>
                  <Col sm={6} className="px-1">
                    <input
                      type="text"
                      name="lastName"
                      value={formDetails.lastName}
                      placeholder="Last Name"
                      onChange={(e) => onFormUpdate("lastName", e.target.value)}
                    />
                  </Col>
                  <Col sm={12} className="px-1">
                    <input
                      type="email"
                      name="email"
                      value={formDetails.email}
                      placeholder="Email Address"
                      onChange={(e) => onFormUpdate("email", e.target.value)}
                    />
                  </Col>
                  <Col sm={12} className="px-1">
                    <textarea
                      name="message"
                      rows="6"
                      value={formDetails.message}
                      placeholder="Message"
                      onChange={(e) => onFormUpdate("message", e.target.value)}
                    ></textarea>
                  </Col>
                  <Col sm={12} className="px-1">
                    <button type="submit"><span>{buttonText}</span></button>
                  </Col>
                  {status.message && (
                    <Col sm={12}>
                      <p className={status.success === false ? "danger" : "success"}>{status.message}</p>
                    </Col>
                  )}
                </Row>
              </form>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
