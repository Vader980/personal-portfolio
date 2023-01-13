import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useState , useEffect} from 'react';
import navIcon2 from '/Users/vader980/personal-portfolio/src/instagram.jpeg';
import navIcon3 from '/Users/vader980/personal-portfolio/src/linkedin.png';
import navIcon4 from '/Users/vader980/personal-portfolio/src/twitter.png';

export const NavBar= () => {
    const[activeLink, setActiveLink] = useState('home');
    const[scrolled, setScrolled] = useState(false);


    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50){
                setScrolled(true);
            }
            else{
                setScrolled(false);
            }
        }

        window.addEventListener("scroll",onScroll);
        

        return() =>window.removeEventListener("scroll",onScroll);
    },[])

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }
  return (
    <Navbar expand="lg" className ={scrolled ? "scrolled":""}>
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className = "navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className= {activeLink === 'home' ? 'active navbar-link': 'navbar-link'} onClick = {() => onUpdateActiveLink('home')}>Home</Nav.Link>
            <Nav.Link href="#skills" className= {activeLink === 'skills' ? 'active navbar-link': 'navbar-link'} onClick = {() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
            <Nav.Link href="#projects" className= {activeLink === 'projects' ? 'active navbar-link': 'navbar-link'} onClick = {() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
            <Nav.Link href="#contact" className= {activeLink === 'Contact' ? 'active navbar-link': 'navbar-link'} onClick = {() => onUpdateActiveLink('Contact')}>Contact</Nav.Link>
          </Nav>
          <span className ="navbar-text">
            <div className = "social-icon">
            <a href="https://www.instagram.com/asvat980/"><img src={navIcon2} alt =""/></a>
            <a href="https://www.linkedin.com/in/asvat/"><img src={navIcon3} alt =""/></a>
            <a href="https://twitter.com/Vader980"><img src={navIcon4} alt =""/></a>
            </div>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}