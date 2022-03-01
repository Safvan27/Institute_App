import React from "react";
import "./additionalInform.css";

import {
  Form,
  Input,
  Row,
  Col,
  Typography,
  Select,
  Upload,
  Divider,
  Button,
  Space,
} from "antd";
import { PlusOutlined, DeleteOutlined } from "@ant-design/icons";
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
        <Divider type="dashed" />
        <Title level={5} className="intakeTitle">
          Inakes
        </Title>
        <Form
          name="dynamic_form_nest_item"
          onFinish={onFinish}
          autoComplete="off"
        >
          <Form.List name="users">
            {(fields, { add, remove }) => (
              <>
                {fields.map(({ key, name, ...restField }) => (
                  <Space
                    key={key}
                    style={{ display: "flex", marginBottom: 8 }}
                    align="baseline"
                  >
                    <Row
                      style={{ backgroundColor: "#f0f0f0", padding: "10px" }}
                      gutter={[8, 8]}
                    >
                      <Col span={12} className="firstIntakeCol">
                        <Form.Item
                          {...restField}
                          label="Intake"
                          style={{ width: "545px" }}
                          name={[name, "first"]}
                        >
                          <Input placeholder="Select Intake" />
                        </Form.Item>
                      </Col>
                      <Col span={12}>
                        <Row>
                          <Form.Item
                            {...restField}
                            label="Duration"
                            style={{ width: "545px" }}
                            name={[name, "first"]}
                          >
                            <Input placeholder="Select Duration" />
                          </Form.Item>
                        </Row>
                        <Row>
                          <Form.Item
                            {...restField}
                            style={{ width: "545px" }}
                            name={[name, "first"]}
                          >
                            <Input placeholder="Select Duration" />
                          </Form.Item>
                        </Row>
                      </Col>
                    </Row>
                    <Button
                      type="primary"
                      icon={<DeleteOutlined />}
                      onClick={() => remove(name)}
                      danger
                      size={"middle"}
                    />
                  </Space>
                ))}
                <Form.Item>
                  <Button
                    type="dashed"
                    onClick={() => add()}
                    icon={<PlusOutlined />}
                  >
                    Add field
                  </Button>
                </Form.Item>
              </>
            )}
          </Form.List>
        </Form>
        <Divider type="dashed" />
        <Title level={5} className="intakeTitle">
          Cource Tag
        </Title>
        <Form
          name="dynamic_form_nest_item"
          onFinish={onFinish}
          autoComplete="off"
        >
          <Form.List name="users">
            {(fields, { add, remove }) => (
              <>
                <Button
                  type="primary"
                  icon={<PlusOutlined />}
                  onClick={() => add()}
                  style={{ float: "right" }}
                >
                  New Cource Tag
                </Button>
                {fields.map(({ key, name, ...restField }) => (
                  <Space
                    key={key}
                    style={{ display: "flex", marginBottom: 8, marginTop: 8 }}
                    align="baseline"
                  >
                    <Form.Item
                      {...restField}
                      label="Tag"
                      style={{ width: "545px" }}
                      name={[name, "first"]}
                    >
                      <Input placeholder="Select Tag" />
                    </Form.Item>

                    <Form.Item
                      {...restField}
                      name={[name, "last"]}
                      style={{ width: "545px" }}
                      label="Discription"
                    >
                      <Input placeholder="Enter Discription" />
                    </Form.Item>
                    <Button
                      type="primary"
                      icon={<DeleteOutlined />}
                      danger
                      onClick={() => remove(name)}
                      size={"middle"}
                    />
                  </Space>
                ))}
                <Form.Item>
                  <Button
                    type="dashed"
                    onClick={() => add()}
                    icon={<PlusOutlined />}
                  >
                    Add field
                  </Button>
                </Form.Item>
              </>
            )}
          </Form.List>
        </Form>
      </Form>
    </>
  );
};

export default AdditionalInform;
