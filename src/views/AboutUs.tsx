import React, { useEffect } from "react";
import { styled } from "../style/Theme";
import {
  Container,
  Content,
  BodyPage,
  WrapperContent,
} from "../components/components/Grid";
import { Row, Col } from "antd";
import LayoutWithBG from "../components/components/LayoutWithBG";

const ImageCover = styled.img`
  display: inline-flex;
  height: 250px;
  border-radius: 8px;
  object-fit: cover;
`;
const PersonalDetail = styled.span`
  padding: 10px 10px 10px 10px;
  display: inline-block;
`;
const Person = styled.div`
  padding: 20px 0px 20px 0px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const TextOther = styled.div`
  padding: 40px 0px 0px 0px;
  h1 {
    font-size: 40px;
    margin: 0px;
  }
`;

const AboutUs: React.FC = () => {
  useEffect(() => {
    document.title = "คณะผู้บริหาร - winwin asset";
  }, []);

  return (
    <Container>
      <BodyPage>
        <WrapperContent>
          <h1>
            <b>คณะผู้บริหาร</b>
          </h1>
          <div style={{ textAlign: "center", paddingTop: "20px" }}>
            <Person>
              <ImageCover src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />
              <PersonalDetail style={{ textAlign: "left" }}>
                <h2>
                  <b>นาย เสริมชัย</b>
                </h2>
                <h2>
                  <b>สังวาลย์วรวุฒิ</b>
                </h2>
                <br />
                <h3>กรรมการผู้จัดการ</h3>
              </PersonalDetail>
            </Person>
            <Person>
              <PersonalDetail style={{ textAlign: "right" }}>
                <h2>
                  <b>นางสาว ศิรภัสสร</b>
                </h2>
                <h2>
                  <b>ทัดละม่อม</b>
                </h2>
                <h3>กรรมการบริษัท, ผู้จัดการฝ่ายบริหาร</h3>
              </PersonalDetail>
              <ImageCover src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />
            </Person>
            <TextOther>
              <h1>
                <span style={{ color: "#843A39", fontWeight: "bold" }}>“ </span>
                พร้อมทั้งทีมงานที่มากประสบการณ์
              </h1>
              <h1>
                กว่า 10 ปี อีกหลายชีวิต
                <span style={{ color: "#843A39", fontWeight: "bold" }}> “</span>
              </h1>
            </TextOther>
          </div>
        </WrapperContent>
      </BodyPage>
    </Container>
  );
};

export default AboutUs;
