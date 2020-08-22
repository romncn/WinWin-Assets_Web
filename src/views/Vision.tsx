import React from "react";
import styled from "styled-components";
import LayoutWithBG from "../components/components/LayoutWithBG"
import { Container, Content, BodyPage } from "../components/components/Grid";
import Winwin from "../data/Winwin.json";

const ImageCover = styled.img`
  width: 100%;
  border-radius: 8px;
  margin-top: 50px;
`;

const Vision: React.FC = () => {
  return (
    <LayoutWithBG>
      <Container>
        <BodyPage>
          <h1>
            <b>วิสัยทัศน์</b>
          </h1>
          <Content>
            <h3>{Winwin.vision}</h3>
            <ImageCover src="/img/vision.png" />
          </Content>
        </BodyPage>
      </Container>
    </LayoutWithBG>
  );
};

export default Vision;
