"use client";

import React from "react";
import { Breadcrumb, Row, Image, Col, Card, Button } from "react-bootstrap";
import { Line } from "react-chartjs-2";
import { Star } from "react-bootstrap-icons";
import { data, options } from "./data";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Legend,
  Filler,
} from "chart.js";

import styles from "./profilesection.module.scss";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Legend,
  Filler
);

export default function profileSection() {
  return (
    <Card body className="bg-gray-800">
      <Row>
        <Col md={12}>
          <Breadcrumb>
            <Breadcrumb.Item href="#">Stocks</Breadcrumb.Item>

            <Breadcrumb.Item active>Persistent Systems</Breadcrumb.Item>
          </Breadcrumb>
        </Col>

        <Row className={"min-h-20"}>
          <Col xs={2} md={1}>
            <Image src="/assets/logo.svg" fluid alt="logo" />
          </Col>
          <Col>
            <Row>
              <Col md={7} className="!p-0">
                <Row>
                  <h2>Persistent Systems</h2>
                  <p>NSEI:PERSISTENT Stock report</p>
                </Row>

                <Row>
                  <Col md={6}>
                    <div className="flex flex-row justify-between">
                      <div>
                        <p>LAST PRICE</p>
                        <p>₹8.25k</p>
                      </div>
                      <div>
                        <p>MARKET CAP</p>
                        <p>₹825B</p>
                      </div>
                      <div>
                        <p>7D</p>
                        <p>-0.7%</p>
                      </div>
                      <div>
                        <p>1Y</p>
                        <p>+37%</p>
                      </div>
                    </div>
                  </Col>

                  <Col md={6}>
                    <Line height="60rem" options={options} data={data} />
                  </Col>
                </Row>
              </Col>

              <Col md={5} className="!p-0 !pl-2">
                <div className="grid content-end h-full">
                  <div className="flex flex-row justify-end gap-x-2 mb-10 ">
                    <Button variant="primary">
                      <div className="flex flex-row items-center">
                        <Star className="mr-1" />
                        <>Add to watchlist</>
                      </div>
                    </Button>
                    <Button variant="outline-primary">Add to porfolio</Button>
                    <Button variant="outline-primary">...</Button>
                  </div>

                  <div className="flex flex-row justify-between">
                    <p>UPDATED 14Feb, 2004</p>

                    <p>DATA</p>
                    <p>Company Financials</p>
                    <p>+33 Financials</p>
                  </div>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Row>
    </Card>
  );
}
