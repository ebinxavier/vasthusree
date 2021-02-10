import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import {
  bgColorDarker,
  textColorPrimary,
  textColorSecondary,
} from "../constants";
import { isMobile } from "react-device-detect";
import { Col, Container, Row } from "react-bootstrap";
import Hyphen from "../components/Hyphen";

const projects = [
  {
    name: "House 1",
    desc:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    category: "Traditional Kerala Style",
    services: ["Vasthu","3D elivation"],
    icon: "/images/projectIcons/i1.jpg",
  },
  {
    name: "House 2",
    desc:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    category:"Traditional Kerala Style",
    services: ["Vasthu","3D elivation"],
    icon: "/images/projectIcons/i2.jpg",
  },
  {
    name: "House 3",
    desc:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    category:"Traditional Kerala Style",
    services: ["Vasthu","3D elivation"],
    icon: "/images/projectIcons/i4.jpg",
  },
];

const Projects = () => {
  return (
    <div style={{minHeight:500}}>
      <Container>
        <div style={{color:"white", padding: "30px 0", display:"block"}}>
          <Hyphen /> OUR PROJECTS
        </div>
</Container>
      <Carousel
        showStatus={false}
        swipeable
        showThumbs={false}
        infiniteLoop
        autoPlay
        dynamicHeight
        emulateTouch
        swipeScrollTolerance={10}
        transitionTime={500}
        style={{ paddingTop: 100 }}
      >
        {projects.map((project) => (
          <div
            style={{
              color: textColorPrimary,
              textAlign: "center",
              padding: isMobile ? "50px 20px" : "20px 0 50px 0",
              backgroundColor: bgColorDarker,
              minHeight:550,
              maxHeight:550,
            }}
          >
            <h1>{project.name}</h1>
            <div>
              <Row>
                <Col md={4}>
                  <img
                    style={{ width: isMobile ? "100%" : "90%", float: "right" }}
                    src={project.icon}
                    alt={project.name}
                  />
                </Col>
                <Col
                  style={{ textAlign: "left", color: textColorSecondary, paddingTop: isMobile?20:0 }}
                  md={8}
                >
                  <p>
                    <span style={{ color: textColorPrimary }}>About:</span>{" "}
                    {project.desc}
                  </p>
                  <div style={{ padding: "0 0 15px 0" }}>
                    <span style={{ color: textColorPrimary }}>
                      Services:
                    </span>{" "}
                    {project.services.map((tech, i) => (
                      <>
                        <span>{tech}</span>
                        {i < project.services.length - 1 && (
                          <span> | </span>
                        )}
                      </>
                    ))}
                  </div>
                  <div style={{ padding: "0 0 15px 0" }}>
                    <span style={{ color: textColorPrimary }}>Category:</span>{" "}
                    <span>{project.category}</span>
                  </div>
                </Col>
              </Row>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Projects;
