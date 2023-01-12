import React, { Fragment } from "react";
import { Row, Col } from "antd";

export const Grid = () => (
  <>
    <section className="container red-grid">
      <h1>Gutter 30</h1>
      <Row gutter={30}>
        <Col span={24}>
          <div className="block">24 columns</div>
        </Col>
        <Col span={12}>
          <div className="block">12 columns</div>
        </Col>
        <Col span={12}>
          <div className="block">12 columns</div>
        </Col>
        <Col span={8}>
          <div className="block">8 columns</div>
        </Col>
        <Col span={8}>
          <div className="block">8 columns</div>
        </Col>
        <Col span={8}>
          <div className="block">8 columns</div>
        </Col>
        <Col span={6}>
          <div className="block">6 columns</div>
        </Col>
        <Col span={6}>
          <div className="block">6 columns</div>
        </Col>
        <Col span={6}>
          <div className="block">6 columns</div>
        </Col>
        <Col span={6}>
          <div className="block">6 columns</div>
        </Col>
        <Col span={18}>
          <div className="block">18 columns</div>
        </Col>
        <Col span={6}>
          <div className="block">6 columns</div>
        </Col>
        <Col span={6}>
          <div className="block">6 columns</div>
        </Col>
        <Col span={18}>
          <div className="block">18 columns</div>
        </Col>
      </Row>
    </section>

    <section className="container blue-grid">
      <h1>Gutter 12</h1>
      <Row gutter={12}>
        <Col span={24}>
          <div className="block">24 columns</div>
        </Col>
        <Col span={12}>
          <div className="block">12 columns</div>
        </Col>
        <Col span={12}>
          <div className="block">12 columns</div>
        </Col>
        <Col span={8}>
          <div className="block">8 columns</div>
        </Col>
        <Col span={8}>
          <div className="block">8 columns</div>
        </Col>
        <Col span={8}>
          <div className="block">8 columns</div>
        </Col>
        <Col span={6}>
          <div className="block">6 columns</div>
        </Col>
        <Col span={6}>
          <div className="block">6 columns</div>
        </Col>
        <Col span={6}>
          <div className="block">6 columns</div>
        </Col>
        <Col span={6}>
          <div className="block">6 columns</div>
        </Col>
        <Col span={18}>
          <div className="block">18 columns</div>
        </Col>
        <Col span={6}>
          <div className="block">6 columns</div>
        </Col>
        <Col span={6}>
          <div className="block">6 columns</div>
        </Col>
        <Col span={18}>
          <div className="block">18 columns</div>
        </Col>
      </Row>
    </section>
  </>
);
