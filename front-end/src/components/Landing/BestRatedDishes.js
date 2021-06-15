import React from "react";
import { Row, Col } from "antd";
import RecipeCard from "./RecipeCard";

function BestRatedDishes() {
  return (
    <section className="container mx-auto pb-20">
      <div className="text-3xl pt-20 pb-10">
        Geriausiai vertinami patiekalai
      </div>
      <Row gutter={40}>
        <Col span={6}>
          <RecipeCard rating />
        </Col>
        <Col span={6}>
          <RecipeCard rating />
        </Col>
        <Col span={6}>
          <RecipeCard rating />
        </Col>
        <Col span={6}>
          <RecipeCard rating />
        </Col>
      </Row>
    </section>
  );
}

export default BestRatedDishes;
