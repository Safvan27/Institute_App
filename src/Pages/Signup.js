import React from "react";
import "antd/dist/antd.css";
import { Row, Col, Button } from "antd";
import "./Signup.css";

const Signup = () => {
  return (
    <>
      <Row style={{ height: "100vh" }}>
        <Col span={12} style={{ backgroundColor: "#540A6F" }}>
          <div className="title">CreA</div>
        </Col>
        <Col span={12} style={{ backgroundColor: "white" }}>
          <Row>
            <div className="text">Already a member?</div>
            <Button type="primary" shape="round">
              Login
            </Button>
          </Row>
        </Col>
      </Row>
    </>
  );
};

export default Signup;
