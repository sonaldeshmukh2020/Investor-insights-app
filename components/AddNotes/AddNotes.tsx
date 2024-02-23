"use client";
import React from "react";
import { UploadOutlined } from "@ant-design/icons";
import { FileDoneOutlined } from "@ant-design/icons";
import type { UploadProps } from "antd";
import { Button, message, Upload } from "antd";
import { Card } from "antd";

const props: UploadProps = {
  name: "file",
  action: "https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188",
  headers: {
    authorization: "authorization-text",
  },
  onChange(info) {
    if (info.file.status !== "uploading") {
      console.log(info.file, info.fileList);
    }
    if (info.file.status === "done") {
      message.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === "error") {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
};

const App: React.FC = () => (
  <Card
    bordered={false}
    style={{
      width: 500,
      backdropFilter: "blur(25px)",
      background: "rgba(255,255,255,0.1)",
      boxShadow: "0 25px 45px rgba(0,0,0,0.25)",
      border: "1px, solid, rgba(255,255,255,0.1)",
      borderRadius: "25px",
      height: "200px",
      color: "white",
    }}
  >
    <Upload {...props}>
      <h4 style={{ color: "white" }}>Add Notes</h4>
      <br></br>
      <p style={{ color: "white", paddingLeft: 55, paddingTop: 20 }}>
        Capture your thoughts, links and company narrative
      </p>
      <Button
        style={{ marginLeft: 125, color: "white" }}
        icon={<UploadOutlined />}
      >
        Click to Add Notes
      </Button>
    </Upload>
  </Card>
);

export default App;
