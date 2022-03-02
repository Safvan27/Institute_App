import React, { useState } from "react";
import BasicLayout from "../../Components/Layout/BasicLayout";
import "./University.css";
import { Card, Col, Row, Avatar, Input, Button, Tag, List, Space } from "antd";
import { MessageOutlined } from "@ant-design/icons";

const { TextArea } = Input;
const { Meta } = Card;

const Universities = () => {
  const [viewComments, setViewComments] = useState(false);

  const universityDetail = [
    {
      key: 1,
      name: "University of Greenwich",
      postedTime: "3 Days ago",
      content: `Dear Students..., 
      \n Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque cursus libero vitae volutpat pretium. Cras auctor pulvinar augue eget feugiat. Ut elementum purus non nisl faucibus varius. Quisque massa erat, viverra id lorem a, egestas porta libero. Nunc consequat ex vel urna porttitor, ut varius erat convallis. Sed luctus ex mi, sed hendrerit odio euismod sit amet. Aliquam tincidunt, ante ac molestie laoreet, elit dolor vulputate orci, nec mattis quam massa sed libero. Vivamus condimentum sagittis sapien vel lacinia. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a sagittis mauris. Maecenas suscipit ac lectus a sagittis. Sed nec purus mi.`,
      logo: "https://img.freepik.com/free-vector/campus-collage-university-education-logo-design-template_7492-62.jpg?w=740",
      image:
        "https://mediacloud.kiplinger.com/image/private/s--LwL1IEDt--/f_auto,t_primary-image-desktop@1/v1580368138/slideshow/college/T062-S001-ways-for-college-students-to-earn-extra-cash/images/intro.jpg",
      comments: [
        {
          name: "Roshan Karthik",
          comment: "nice",
          reply: [
            {
              name: "University of greenwhich",
              comment: "Good",
            },
            {
              name: "University of greenwhich",
              comment: "Thanks",
            },
          ],
        },
        {
          name: "Roshan Karthik",
          comment: "Please Apply for Msc",
        },
      ],
    },
  ];
  const IconText = ({ icon, text }) => (
    <Space>
      {React.createElement(icon)}
      {text}
    </Space>
  );
  return (
    <>
      <BasicLayout />
      {universityDetail.map((item) => (
        <Card
          hoverable
          className="universityCard"
          title={
            <Meta
              avatar={<Avatar src={item.logo} size="large" />}
              title={item.name}
              description={item.postedTime}
            />
          }
        >
          {item.content}
          <div className="imgcontentStyle">
            <img alt="example" src={item.image} width="100%" />
          </div>

          <div className="tagcontentStyle">
            <Tag style={{ borderRadius: "10px" }}>
              {item.comments.length} Comments
            </Tag>
          </div>
          <div className="commentSection">
            <Row>
              <Col span={2}>
                <Avatar size={80} src={item.logo} />
              </Col>
              <Col span={20}>
                <TextArea rows={4} placeholder="Add a Comment.." />
              </Col>
            </Row>
          </div>
          <Button type="text" onClick={() => setViewComments(!viewComments)}>
            View {item.comments.length} Comments
          </Button>
          {viewComments && (
            <List
              itemLayout="horizontal"
              dataSource={item.comments}
              renderItem={(items, i) => (
                <List.Item
                  actions={[
                    <IconText
                      icon={MessageOutlined}
                      text={item.comments.length}
                      key="list-vertical-message"
                    />,
                  ]}
                >
                  <List.Item.Meta
                    avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                    title={items.name}
                    description={items.comment}
                  />
                </List.Item>
              )}
            />
          )}
        </Card>
      ))}
      <div>.</div>
    </>
  );
};
export default Universities;
