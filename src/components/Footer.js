import { Container, Row, Col } from "react-bootstrap";
// import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import navIcon4 from "../assets/img/nav-icon4.svg";
import KESHAV from '../assets/img/KESHAV.svg'

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          {/* <MailchimpForm /> */}
          <Col size={12} sm={6}>
            <img src={KESHAV} alt="Logo" />
            {/* <h1>KESHAV</h1> */}
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
            <a href="https://www.linkedin.com/in/keshav-jindal-900b451a5/">
                <img src={navIcon1} alt="LinkedIn" />
              </a>
              <a href="https://github.com/jindal2004keshav">
                <img src={navIcon2} alt="GitHub" />
              </a>
              <a href="https://leetcode.com/u/keshav25a/">
                <img src={navIcon3} alt="LeetCode" />
              </a>
              <a href="https://twitter.com/keshav_004">
                <img src={navIcon4} alt="twitter" />
              </a>
            </div>
            <p>Copyright 2024. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}