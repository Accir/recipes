import React from "react";
import { Card, Input, Form, Button } from "antd";

function Login() {
  const layout = {
    labelCol: { span: 4 },
    wrapperCol: { span: 20 },
  };

  return (
    <div className="container mx-auto">
      <Card className="max-w-2xl mx-auto mt-20">
        <div className="text-2xl text-center pb-10">
          Prisijungti prie receptų sistemos
        </div>
        <Form {...layout}>
          <Form.Item label="El. paštas" name="email">
            <Input />
          </Form.Item>
          <Form.Item label="Slaptažodis" name="password">
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
              Prisijungti
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
}

export default Login;
