import { Container, Row, Col } from "react-bootstrap";
import logo from '/Users/vader980/personal-portfolio/src/github.png';
import navIcon1 from '/Users/vader980/personal-portfolio/src/github.png';
import navIcon2 from '/Users/vader980/personal-portfolio/src/instagram.jpeg';
import navIcon3 from '/Users/vader980/personal-portfolio/src/linkedin.png';
import navIcon4 from '/Users/vader980/personal-portfolio/src/twitter.png';

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={6} sm={4}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
            <a href="#"><img src={navIcon1} alt =""/></a>
            <a href="#"><img src={navIcon2} alt =""/></a>
            <a href="#"><img src={navIcon3} alt =""/></a>
            <a href="#"><img src={navIcon4} alt =""/></a>
            </div>
            <p>Copyright 2022. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}