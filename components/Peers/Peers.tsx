"use client";
import React from "react";
import { Card, Col, Row } from "antd";

const App: React.FC = () => (
  <Row gutter={16}>
    <Col span={7}>
      <Card
        bordered={false}
        style={{
          backdropFilter: "blur(25px)",
          background: "rgba(255,255,255,0.1)",
          boxShadow: "0 25px 45px rgba(0,0,0,0.25)",
          border: "1px, solid, rgba(255,255,255,0.1)",
        }}
      >
        {/* <h3 style={{ color: "Yellow", paddingLeft: 80 }}>Coforge</h3>
        <h4 style={{ color: "White", paddingLeft: 80 }}>NSEI:Coforge</h4>
        <h5 style={{ color: "White", paddingLeft: 85 }}>₹469.3b</h5> */}
      </Card>
    </Col>
    <Col span={7}>
      <Card
        bordered={false}
        style={{
          backdropFilter: "blur(25px)",
          background: "rgba(255,255,255,0.1)",
          boxShadow: "0 25px 45px rgba(0,0,0,0.25)",
          border: "1px, solid, rgba(255,255,255,0.1)",
        }}
      >
        {/* <h3 style={{ color: "Yellow", paddingLeft: 25 }}>Tata Technologies</h3>
        <h4 style={{ color: "White", paddingLeft: 50 }}>NSEI:TATATECH</h4>
        <h5 style={{ color: "White", paddingLeft: 85 }}>₹469.3b</h5> */}
      </Card>
    </Col>
    <Col span={7}>
      <Card
        bordered={false}
        style={{
          backdropFilter: "blur(25px)",
          background: "rgba(255,255,255,0.1)",
          boxShadow: "0 25px 45px rgba(0,0,0,0.25)",
          border: "1px, solid, rgba(255,255,255,0.1)",
        }}
      >
        {/* <h3 style={{ color: "Yellow", paddingLeft: 80 }}>Mphasis</h3>
        <h4 style={{ color: "White", paddingLeft: 80 }}>BSE:Mphasis</h4>
        <h5 style={{ color: "White", paddingLeft: 85 }}>₹469.3b</h5> */}
      </Card>
    </Col>
  </Row>
);

export default App;
