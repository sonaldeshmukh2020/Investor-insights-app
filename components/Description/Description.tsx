"use client";
import React from "react";
import { Card } from "antd";
import { Col, Row, Breadcrumb } from "antd";
import { Button, Flex } from "antd";
const App: React.FC = () => (
  <Card
    bordered={false}
    style={{
      backdropFilter: "blur(25px)",
      background: "rgba(255,255,255,0.1)",
      boxShadow: "0 25px 45px rgba(0,0,0,0.25)",
      border: "1px, solid, rgba(255,255,255,0.1)",
      borderRadius: "25px",
      height: "600px",
      width: "575",
      color: "white",
    }}
  >
    <Row>
      <h3
        className="des-heading"
        style={{ paddingLeft: "30px", paddingTop: "25px" }}
      >
        PERSISTENT Stock Overview
      </h3>
      <Col>
        <p style={{ paddingLeft: "30px" }}>
          Persistent Systems Limited engages in the provision of software
          products, services and technology solutions in India, North America
          and internationally.
        </p>
        <p style={{ paddingLeft: "30px" }}>REWARDS</p>
        <p style={{ paddingLeft: "30px" }}>
          &#11088; Earnings are forecast to grow 22.36% per year.
        </p>
        <p style={{ paddingLeft: "30px" }}>
          &#11088; Earnings have grown 26.6% per year over last 5 years.
        </p>
        <p style={{ paddingLeft: "30px" }}>
          &#11088; Pays a reliable dividend of 0.46%.
        </p>
        <p style={{ paddingLeft: "30px" }}>RISK ANALYSIS</p>
        <p style={{ paddingLeft: "30px" }}>
          No risks detected for PERSISTENT from our risk checks.
        </p>
        {/* <Button style={{ marginLeft: "30px" }} variant="outline-warning">
            Risk Checks
          </Button>{" "} */}
      </Col>
    </Row>
  </Card>
);

export default App;
