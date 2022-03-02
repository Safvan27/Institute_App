import React from "react";
import { List, Avatar, Card } from "antd";

import BasicLayout from "../../Components/Layout/BasicLayout";
import "./Notifications.css";

const Notifications = () => {
  const data = [
    {
      key: 1,
      name: "Educampus",
      time: "Now",
      activity: "commented on your post.",
      opened: false,
    },
    {
      key: 2,
      name: "Haris Webdesign",
      time: "3 min ago",
      activity: "applied for new cource.",
      opened: true,
    },
    {
      key: 3,
      name: "Jennifer Lopez",
      time: "1 hour ago",
      activity: "applied science and technolgoy cource.",
      opened: true,
    },

    {
      key: 4,
      name: "Moly Morgan",
      time: "1 week ago",
      activity: "replied your comment.",
      opened: true,
    },
  ];
  return (
    <>
      <BasicLayout />
      <Card style={{ width: "80%", margin: "30px" }}>
        <List
          itemLayout="horizontal"
          dataSource={data}
          renderItem={(item) => (
            <List.Item
              style={{ backgroundColor: !item.opened && "#e6f7ff" }}
              className="ant-list-item"
            >
              <List.Item.Meta
                avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                title={
                  <>
                    {item.name}{" "}
                    <div style={{ color: "grey", display: "inline" }}>
                      {item.activity}
                    </div>
                  </>
                }
                description={item.time}
              />
            </List.Item>
          )}
        />
      </Card>
    </>
  );
};
export default Notifications;
