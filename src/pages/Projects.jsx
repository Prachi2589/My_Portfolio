import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../components/Projects/ProjectCard";
import Particle from "../components/Particle";
import pg from "../assets/projects/pg.png";
import project from "../assets/projects/project.jpeg";
import lift from "../assets/projects/lift.png";
import krypto from "../assets/projects/krypto.png";
import kickstart from "../assets/projects/kickstart.png";

const Projects = () => {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Recent Top <strong className="yellow">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={lift}
              isBlog={false}
              title="Care-Connect"
              description="Health Dock is a web application that can maintain an electronic medical record to improve the work process, patient safety, and quality of healthcare. The goal is to enhance Nation's Health IT Infrastructure and strengthen the relationship between patients and clinicians.The use of web a Web applications can lower costs, enhance healthcare quality, and shift behavior to strengthen prevention, all of which can improve health outcomes over the long term."
              ghLink="https://github.com/Prachi2589/CareConnecty"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={project}
              isBlog={false}
              title="Image-Classification"
              description="The Image Classification Website is an open-source project that aims to provide a user-friendly web-based platform for performing image classification tasks. This website utilizes advanced machine learning techniques to analyze and categorize images based on their content, allowing users to easily classify and organize their image collections. this project , I have classified image using SVM. For data collection we have used a chrome extension called fatkun. We have done data cleaning using Haar cascade.For feature engineering we have used wavelet transform that helps moving window to detect eyes and face .At last, we have built UI."
              ghLink="https://github.com/Prachi2589/Image_Classification"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pg}
              isBlog={false}
              title="Lump-Analyzer"
              description="This model will predict the stages of  the lumpy virus that weather the cattle is having intial stage, Mid stage or last stage. So our model will help in taking this tough decision which involves an emotional call as well to save one life and leave other. build such services which will overcome the 3 challenges which were addressed before . Using powerful technology of today’s time  which is Machine Learning we are trying to build such a solution which use Image Classification and effective ML algorithm to predict the accurate result about the stages of Diseases."
              ghLink="https://github.com/Prachi2589/Lump_analyzer"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pg}
              isBlog={false}
              title="Registration"
              description="A registration form is a document with a set of fields that a person fills out and sends to a business or individual to register for an event, program, membership, list, and so on. Using the online registration form, you may gather contact information and encourage people to interact with you"
              ghLink="https://prachi2589.github.io/js-task9/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={krypto}
              isBlog={false}
              title="Arithmatic calculator"
              description="A calculator is a device that performs arithmetic operations on numbers. Basic calculators can do only addition, subtraction, multiplication and division mathematical calculations.
                       However, more sophisticated calculators can handle exponential operations, square roots, logarithms, trigonometric functions and hyperbolic functions."
              ghLink="https://arithmatic-calculator.vercel.app/"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={kickstart}
              isBlog={false}
              title="To-Do "
              description="Todo Lists are the lists that we generally use to maintain our day-to-day tasks or list of everything that we have to do, with the most important tasks at the top of the list, and the least important tasks at the bottom. It is helpful in planning our daily schedules. We can add more tasks at any time and delete a task that is completed. The four major tasks that we can perform in a TODO list are"
              ghLink="https://github.com/19sajib/Solidity-Kickstart"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  )
}

export default Projects