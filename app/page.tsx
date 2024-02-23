import { ProfileSection } from "@/components/ProfileSection";
import { SideNav } from "@/components/SideNav";
import { TradingChart } from "@/components/TradingChart";
import { Description } from "@/components/Description";
import { Peers } from "@/components/Peers";
// import { Breadcrumb, Container, Row, Col } from "react-bootstrap";
import React from "react";
import { Col, Row, Breadcrumb, Descriptions } from "antd";
import { AddNotes } from "@/components/AddNotes";

export default function Home() {
  return (
    <>
      <Row>
        <ProfileSection />
      </Row>
      <Row className="mt-3">
        <Col span={4}>
          <SideNav />
        </Col>
        <Col className="mt-3" span={10}>
          <Description />
        </Col>
        <Col className="ml-5" span={8}>
          <TradingChart />
        </Col>
      </Row>
      <Row>
        <Col span={4}></Col>
        <Col className="mt-3" span={20}>
          <h3>Persistent Systems Limited Competitors</h3>
          <Peers />
        </Col>
      </Row>
      <Row>
        <Col span={4}></Col>
        <Col className="mt-3" span={20}>
          <AddNotes />
        </Col>
      </Row>
    </>
  );
}
