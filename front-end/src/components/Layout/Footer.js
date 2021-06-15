import React from "react";
import { Row, Col, Divider } from "antd";

function Footer() {
  return (
    <div className="bg-gray-100">
      <div className="container mx-auto pt-20">
        <Row gutter={80} className="pb-10">
          <Col span={8}>Logo</Col>
          <Col span={8}>
            <ul className="text-base">
              <li className="text-base text-gray-500 pb-4">Receptai</li>
              <li className="pb-3">Visi</li>
              <li className="pb-3">Geriausiai vertinami</li>
              <li className="pb-3">Populiariausi</li>
            </ul>
          </Col>
          <Col span={8}>
            <ul className="text-base">
              <li className="text-base text-gray-500 pb-4">Susisiekite</li>
              <li className="pb-3">D. Puluikis Productions, UAB</li>
              <li className="pb-3">admin@receptai.lt</li>
              <li className="pb-3">+37061111111</li>
            </ul>
          </Col>
        </Row>
        <Divider style={{ marginBottom: 10 }} />
        <div className="text-gray-500">© 2021 Visos teisės saugomos</div>
      </div>
    </div>
  );
}

export default Footer;
