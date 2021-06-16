import React from "react";
import { Card, Input, Form, Button } from "antd";

function Register() {
  const layout = {
    labelCol: { span: 6 },
    wrapperCol: { span: 18 },
  };

  return (
    <div className="container mx-auto pb-20">
      <Card className="max-w-2xl mx-auto mt-20">
        <div className="text-2xl text-center pb-10">
          Prisiregistruoti prie receptų sistemos
        </div>
        <Form {...layout}>
          <Form.Item label="Vardas" name="name">
            <Input />
          </Form.Item>
          <Form.Item label="Pavardė" name="surname">
            <Input />
          </Form.Item>
          <Form.Item label="El. paštas" name="email">
            <Input />
          </Form.Item>
          <Form.Item label="Slaptažodis" name="password">
            <Input.Password />
          </Form.Item>
          <Form.Item label="Pakartoti Slaptažodį" name="passwordRepeat">
            <Input.Password />
          </Form.Item>
          <Form.Item
            wrapperCol={{
              ...layout.wrapperCol,
              offset: layout.labelCol.span,
            }}
            style={{ marginBottom: 0 }}
          >
            <Button type="primary" htmlType="submit">
              Registruotis
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
}

export default Register;
