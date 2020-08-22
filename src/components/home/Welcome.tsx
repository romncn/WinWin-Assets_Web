import React from "react";
import { Link } from "react-router-dom";
import Button from "../components/Button";

const Welcome: React.FC = React.memo(() => {
  return (
    <div
      style={{ textAlign: "center", paddingTop: "50px", paddingBottom: "50px" }}
    >
      <h4>ยินดีต้อนรับเข้าสู่</h4>
      <h1>WIN WIN ASSETS</h1>
      <Link to="/whatis">
        <Button type="outline">ทำความรู้จักกับ WINWIN</Button>
      </Link>
    </div>
  );
});

export default Welcome;
