import React, { useState } from "react";
import { Steps, Card, Tag, Button, message } from "antd";
import {
  SaveOutlined,
  FileTextTwoTone,
  FileUnknownTwoTone,
  TrophyTwoTone,
  ArrowLeftOutlined,
  ArrowRightOutlined,
  DollarTwoTone,
} from "@ant-design/icons";

import "./Home.css";
import BasicLayout from "../../Components/Layout/BasicLayout";
import AdditionalInform from "../../Components/AdditionalInformation/additionalInform";
import BasicInformation from "../../Components/BasicInformation/basicInformation";
import Eligibility from "../../Components/Eligibility/Eligibility";
import Fees from "../../Components/Fees/Fees";

const { Step } = Steps;

const Home = () => {
  const [current, setCurrent] = useState(0);
  const [profileComplete, setProfileComplete] = useState(false);

  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };
  const onProfileFinish = () => {};
  const steps = [
    {
      title: "Basic Information",
      content: <BasicInformation setProfileComplete={setProfileComplete} />,
      icon: <FileTextTwoTone />,
    },
    {
      title: "Additional Information",
      content: <AdditionalInform />,
      icon: <FileUnknownTwoTone />,
    },
    {
      title: "Eligibility & Sylabus",
      content: <Eligibility />,
      icon: <TrophyTwoTone />,
    },
    {
      title: "Fee & Scholership",
      content: <Fees />,
      icon: <DollarTwoTone />,
    },
  ];
  return (
    <>
      <BasicLayout />
      <Card
        style={{ borderRadius: "15px" }}
        title={
          <div style={{ fontSize: "1.5em" }}>
            Registration
            <Tag style={{ marginLeft: "10px" }}>Step {current + 1} of 4</Tag>
          </div>
        }
        extra={
          <Button type="primary" icon={<SaveOutlined />}>
            Save As Draft
          </Button>
        }
        className="cardHeader"
      >
        <Steps current={current}>
          {steps.map((item) => (
            <Step key={item.title} title={item.title} icon={item.icon} />
          ))}
        </Steps>
        <div className="steps-content">{steps[current].content}</div>
        {/* {steps[current].content} */}

        <div className="steps-action">
          {current > 0 && (
            <Button
              style={{ margin: "0 8px" }}
              onClick={() => prev()}
              icon={<ArrowLeftOutlined />}
            >
              Previous
            </Button>
          )}
          {current === 0 && (
            <Button
              type="primary"
              style={{ margin: "0 8px" }}
              icon={<ArrowLeftOutlined />}
              disabled
            >
              Previous
            </Button>
          )}

          {current < steps.length - 1 && (
            <Button
              type="primary"
              htmlType="submit"
              onClick={
                current === 0
                  ? () => {
                      next();
                      onProfileFinish();
                    }
                  : () => next()
              }
              disabled={!profileComplete}
              icon={<ArrowRightOutlined />}
            >
              Next
            </Button>
          )}
          {current === steps.length - 1 && (
            <Button
              type="primary"
              onClick={() => message.success("Processing complete!")}
            >
              Submit
            </Button>
          )}
        </div>
      </Card>
    </>
  );
};
export default Home;
