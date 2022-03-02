import React from "react";
import moment from "moment";
import {
  Form,
  Input,
  DatePicker,
  Select,
  Typography,
  Button,
  message,
} from "antd";

import { db } from "../../Database/fire.js";
import "./basicInformation.css";

const { Option } = Select;
const { Title } = Typography;

const BasicInformation = ({ setProfileComplete }) => {
  const [form] = Form.useForm();
  const onFinish = (values) => {
    setProfileComplete(true);
    db.collection("profiles")
      .add({
        id: values.id,
        name: String(values.name),
        gender: values.gender,
        avatar: "https://joeschmoe.io/api/v1/random",
        dob: moment(values.dob).format("MMMM DD YYYY"),
        address: values.address,
        email: values.email,
        status: "Verified",
        latest: true,
        logo: "https://jdenticon.com/#icon-Charlotte",
        education: values.school,
        mobile: values.mobile,
      })
      .then(message.success("Profile Added!"));
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select style={{ width: 70 }} defaultValue={"+91"}>
        <Option value="+91">+91</Option>
        <Option value="87">+87</Option>
      </Select>
    </Form.Item>
  );

  return (
    <>
      <Title level={3} className="formTitle">
        Basic Information
      </Title>
      <Form
        name="basic"
        form={form}
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 12,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Name"
          name="name"
          rules={[
            {
              required: true,
              message: "Please input your username!",
            },
          ]}
        >
          <Input placeholder="Your name" />
        </Form.Item>
        <Form.Item
          label="ID"
          name="id"
          rules={[
            {
              required: true,
              message: "Please write your ID!",
            },
          ]}
        >
          <Input placeholder="Your ID" />
        </Form.Item>
        <Form.Item
          label="Date of Birth"
          name="dob"
          rules={[
            {
              required: true,
              message: "Please select your Date of birth",
            },
          ]}
        >
          <DatePicker
            style={{ width: "100%" }}
            placeholder="Select your Date of Birth"
          />
        </Form.Item>
        <Form.Item
          label="Gender"
          name="gender"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Select placeholder="Select your Gender">
            <Option value="male">Male</Option>
            <Option value="female">Female</Option>
            <Option value="other">Other</Option>
          </Select>
        </Form.Item>
        <Form.Item
          label="Email"
          name="email"
          rules={[
            {
              type: "email",
              required: true,
              message: "Please input your Email!",
            },
          ]}
        >
          <Input placeholder="Your Email" />
        </Form.Item>
        <Form.Item
          label="Address"
          name="address"
          rules={[
            {
              required: true,
              message: "Please input your Address!",
            },
          ]}
        >
          <Input placeholder="Your Address" />
        </Form.Item>
        <Form.Item
          label="School / Collage"
          name="school"
          rules={[
            {
              required: true,
              message: "Please input your School!",
            },
          ]}
        >
          <Input placeholder="Your School/Collage" />
        </Form.Item>
        <Form.Item
          label="Mobile Number"
          name="mobile"
          rules={[
            {
              required: true,
              message: "Please input your Mobile Number!",
            },
          ]}
        >
          <Input
            addonBefore={prefixSelector}
            style={{ width: "100%" }}
            placeholder="Your Mobile Number"
          />
        </Form.Item>
        <Button type="primary" htmlType="submit" style={{ marginLeft: "92%" }}>
          Add Profile
        </Button>
      </Form>
    </>
  );
};
export default BasicInformation;
