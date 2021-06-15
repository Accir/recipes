import React from "react";
import Review from "./Review";
import { Row, Col } from "antd";

function Reviews() {
  return (
    <section className="bg-gray-100 pb-20">
      <div className="container mx-auto">
        <div className="text-3xl pt-20 pb-10 text-center">Atsiliepimai</div>
        <Row gutter={80}>
          <Col span={8}>
            <Review />
          </Col>
          <Col span={8}>
            <Review />
          </Col>
          <Col span={8}>
            <Review />
          </Col>
        </Row>
      </div>
    </section>
  );
}

export default Reviews;
