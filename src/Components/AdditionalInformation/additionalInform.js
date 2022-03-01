import React from "react";
import "./additionalInform.css";

import { Form, Input, Row, Col, Typography, Select, Upload } from "antd";
import { PlusOutlined } from "@ant-design/icons";
const { Title } = Typography;
const { Option } = Select;

const AdditionalInform = () => {
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <>
      <Title level={3} style={{ marginRight: "1050px" }} className="formTitle">
        Additional Information
      </Title>
      <Form
        name="basic"
        layout="vertical"
        wrapperCol={{
          span: 20,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Row gutter={[4, 4]}>
          <Col span={12}>
            <Form.Item
              label="Admission"
              name="admission"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Select placeholder="Select Admission" allowClear>
                <Option value="Admission1">Admission 1</Option>
                <Option value="Admission2">Admission 2</Option>
                <Option value="Admission3">Admission 3</Option>
              </Select>
            </Form.Item>
            <Form.Item
              label="Cource Affiliation"
              name="courceaffliation"
              rules={[
                {
                  required: true,
                  message: "Select Cource Affiliation!",
                },
              ]}
            >
              <Upload>
                <Input
                  style={{ width: "545px" }}
                  placeholder="Select Cource Affiliation"
                  addonAfter={<PlusOutlined />}
                />
              </Upload>
            </Form.Item>
            <Form.Item
              label="Documents Required"
              name="documents"
              rules={[
                {
                  required: true,
                  message: "Select Documents Required!",
                },
              ]}
            >
              <Upload>
                <Input
                  style={{ width: "545px" }}
                  placeholder="Select Documents Required"
                  addonAfter={<PlusOutlined />}
                />
              </Upload>
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              label="Service"
              name="service"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Select placeholder="Select Service" allowClear>
                <Option value="Service1">Service 1</Option>
                <Option value="Service2">Service 2</Option>
                <Option value="Service3">Service 3</Option>
              </Select>
            </Form.Item>
            <Form.Item
              label="Entrance Required"
              name="entrance"
              rules={[
                {
                  required: true,
                  message: "Select Entrance Required!",
                },
              ]}
            >
              <Upload>
                <Input
                  style={{ width: "545px" }}
                  placeholder="Select Entrance Required"
                  addonAfter={<PlusOutlined />}
                />
              </Upload>
            </Form.Item>
            <Form.Item
              label="Specialization"
              name="specialization"
              rules={[
                {
                  required: true,
                  message: "Select Specialization!",
                },
              ]}
            >
              <Upload>
                <Input
                  style={{ width: "545px" }}
                  placeholder="Select Specialization"
                  addonAfter={<PlusOutlined />}
                />
              </Upload>
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </>
  );
};

export default AdditionalInform;
