import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from '/Users/vader980/personal-portfolio/src/reporting-functionality.jpg';
import projImg2 from '/Users/vader980/personal-portfolio/src/music player.jpeg';
import projImg3 from '/Users/vader980/personal-portfolio/src/kdrama.webp';
import projImg4 from '/Users/vader980/personal-portfolio/src/2023-01-13 22.48.14.jpg';
import 'animate.css/animate.min.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Cinema System ",
      description: "Streamlined ticketing and film management processes, resulting in a 20% increase in customer satisfaction",
      imgUrl: projImg1,
    },
    {
      title: "Music Player Application",
      description: "",
      imgUrl: projImg2,
    },
    {
      title: "Kdrama Recommendation Application ",
      description: "Rate and view whats trending in the Kdrama world, using Java",
      imgUrl: projImg3,
    },
    {
      title: "Encrypt and Decrypt files, text, and images",
      description: "Created an application that uses ASCII to securely encrypt and decrypt files, text, and images, demonstrating skills in data security and encryption techniques and improving the security of company data, reducing the risk of data breaches by 20%.",
      imgUrl: projImg4,
    },
   
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={10}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p></p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="section">
                      <p></p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p></p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}