import React from "react";
import { Row, Col } from "antd";
import RecipeCard from "./RecipeCard";

function RecipeCardList() {
  return (
    <section className="bg-gray-100 pb-20">
      <div className="container mx-auto">
        <div className="text-3xl pt-20 pb-10">Dienos patiekalai</div>
        <Row gutter={40}>
          <Col span={6}>
            <RecipeCard />
          </Col>
          <Col span={6}>
            <RecipeCard />
          </Col>
          <Col span={6}>
            <RecipeCard />
          </Col>
          <Col span={6}>
            <RecipeCard />
          </Col>
        </Row>
      </div>
    </section>
  );
}

export default RecipeCardList;
