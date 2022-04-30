import React from "react";
import { Player, Controls } from "@lottiefiles/react-lottie-player";
import { Col, Container, Row } from "react-bootstrap";

const Project = () => {
  return (
    <Container fluid>
      <Row>
        <Col>
          <Player
            autoplay
            loop
            src="https://assets6.lottiefiles.com/packages/lf20_ihadkqla.json"
            style={{ height: "300px", width: "300px" }}
          >
            <Controls
              visible={false}
              buttons={["play", "repeat", "frame", "debug"]}
            />
          </Player>
        </Col>
        <Col>
          <Player
            autoplay
            loop
            src="https://assets6.lottiefiles.com/packages/lf20_cyrmcyzk/data.json"
            style={{ height: "300px", width: "300px" }}
          >
            <Controls
              visible={false}
              buttons={["play", "repeat", "frame", "debug"]}
            />
          </Player>
        </Col>
      </Row>
    </Container>
  );
};

export default Project;
