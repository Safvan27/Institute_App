import { Card, Col, Typography, Row, Avatar, Button } from "antd";
import React, { useEffect, useState } from "react";
import {
  EditOutlined,
  PhoneOutlined,
  MailOutlined,
  ReadOutlined,
} from "@ant-design/icons";
import "./Profile.css";

import { db } from "../../Database/fire";
import BasicLayout from "../../Components/Layout/BasicLayout";

const { Text } = Typography;
const { Meta } = Card;

const Profile = () => {
  const [profilesfromDB, setProfilesfromDB] = useState([]);
  const userProfiles = profilesfromDB;
  let profiles = [];
  const getProfiles = async () => {
    const snapshot = await db.collection("profiles").get();
    return (
      snapshot.docs
        // eslint-disable-next-line array-callback-return
        .map((doc) => {
          doc.data();
          profiles.push(doc.data());
        })
        .then(setProfilesfromDB(profiles))
    );
  };
  useEffect(() => {
    getProfiles();
    console.log("profilesfromDB", profilesfromDB);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
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
      )
    </>
  );
};
export default Profile;
