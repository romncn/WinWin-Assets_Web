import React, { useState, useEffect } from "react";
import styled from "styled-components";
import LayoutWithBG from "../components/components/LayoutWithBG";
import {
  Container,
  Content,
  BodyPage,
  WrapperContent,
} from "../components/components/Grid";
import { Row, Col } from "antd";

const ImageCover = styled.img`
  width: 100%;
  height: 250px;
  border-radius: 8px;
  object-fit: cover;
  &:hover {
    cursor: pointer;
  }
`;

const Portfolio: React.FC = () => {
  useEffect(() => {
    document.title = "ผลงานที่ผ่านมา - winwin asset";
  }, []);

  const [demoImg, setDemoImg] = useState([
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
  ]);

  return (
    <Container>
      <BodyPage>
        <WrapperContent>
          <h1>
            <b>ผลงานที่ผ่านมา</b>
          </h1>
          <div
            style={{
              textAlign: "center",
              paddingTop: "30px",
              paddingBottom: "30px",
            }}
          >
            <h4>
              “ บริษัท วิน วิน แอสเสท จำกัด เน้นสร้างงานบริหารการขาย
              เน้นคุณภาพในการให้บริการที่ดีที่สุด
            </h4>
            <h4>
              ด้วยความสามารถของทีมงานมืออาชีพจากประสบการณ์ที่มียาวนานกว่า 10 ปี
              “
            </h4>
            <Row
              gutter={12}
              style={{ paddingTop: "20px", paddingBottom: "20px" }}
            >
              {demoImg.map((detailImg) => {
                return (
                  <Col span={24} lg={8} style={{ marginTop: "30px" }}>
                    <ImageCover
                      src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                      onClick={() => alert(detailImg)}
                    />
                  </Col>
                );
              })}
            </Row>
            <div style={{ marginTop: "20px" }}>
              <h4>“ มาร่วมเป็นส่วนหนึ่งกับเรา</h4>
              <h4>เพื่อคุณภาพชีวิตที่ดียิ่งขึ้น “</h4>
            </div>
          </div>
        </WrapperContent>
      </BodyPage>
    </Container>
  );
};

export default Portfolio;
