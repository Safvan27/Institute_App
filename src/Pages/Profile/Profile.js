import { Card, Col, Typography, Row, Avatar, Button } from "antd";
import React from "react";
import "./Profile.css";
import BasicLayout from "../../Components/Layout/BasicLayout";
import {
  EditOutlined,
  PhoneOutlined,
  MailOutlined,
  ReadOutlined,
} from "@ant-design/icons";

const { Text } = Typography;

const { Meta } = Card;

const Profile = () => {
  const userProfiles = [
    {
      name: "Charlotee Roselie",
      avatar: "https://joeschmoe.io/api/v1/random",
      id: "EDU-IND-6644081",
      mobile: "+91-7894563210",
      email: "myemail@charlotee.com",
      education: "Msc Business with International Management",
      status: "pending",
      latest: false,
      logo: "https://jdenticon.com/#icon-Charlotte",
    },
    {
      name: "Rosalie Due",
      avatar: "https://joeschmoe.io/api/v1/random",
      id: "EDU-IND-6644081",
      mobile: "+91-7894563210",
      email: "hariskarat@charlotee.com",
      education: "Master in Business",
      status: "Applied",
      latest: true,
    },
    {
      name: "Thomas Paul",
      avatar: "https://joeschmoe.io/api/v1/random",
      id: "EDU-IND-6644081",
      mobile: "+91-7894563210",
      email: "Paul@charlotee.com",
      education: "MBA in Administartion",
      status: "Verified",
      latest: true,
      logo: "https://jdenticon.com/#icon-Charlotte",
    },
  ];
  return (
    <>
      <BasicLayout />
      <Row
        className="rowStyle"
        style={{ marginLeft: "10px", marginRight: "10px" }}
        gutter={[14, 14]}
      >
        {userProfiles.map((item) => (
          <Col span={8}>
            <Card
              hoverable
              style={{ borderRadius: "15px" }}
              title={
                <Meta
                  avatar={<Avatar src={item.avatar} />}
                  title={item.name}
                  description={item.id}
                />
              }
              extra={
                item.latest ? (
                  <Button
                    type="primary"
                    shape="round"
                    style={{
                      backgroundColor: "#d9f7be",
                      color: "#52C41A",
                      borderColor: "#52C41A",
                    }}
                  >
                    New
                  </Button>
                ) : (
                  <Button
                    type="primary"
                    shape="round"
                    icon={<EditOutlined />}
                    style={{
                      backgroundColor: "#bae7ff",
                      color: "black",
                    }}
                    size="large"
                  />
                )
              }
            >
              <p>
                <PhoneOutlined />
                <Text strong style={{ marginLeft: "10px" }}>
                  {item.mobile}
                </Text>
              </p>
              <p>
                <MailOutlined />
                <Text strong style={{ marginLeft: "10px" }}>
                  {item.email}
                </Text>
              </p>
              <p>
                <ReadOutlined />
                <Text strong style={{ marginLeft: "10px" }}>
                  {item.education}
                </Text>
              </p>
              <p>
                {item.status === "pending" ? (
                  <Button
                    type="primary"
                    shape="round"
                    style={{
                      backgroundColor: "#bae7ff",
                      color: "#003a8c",
                      borderColor: "#003a8c",
                    }}
                  >
                    Add Your Rest Documents
                  </Button>
                ) : (
                  <Button
                    type="primary"
                    shape="round"
                    style={{
                      backgroundColor: "#bae7ff",
                      color: "#003a8c",
                      borderColor: "#003a8c",
                    }}
                  >
                    {item.status}
                  </Button>
                )}
                <div style={{ float: "right" }}>
                  {item.logo && <Avatar src={item.avatar} />}
                </div>
              </p>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
};
export default Profile;
