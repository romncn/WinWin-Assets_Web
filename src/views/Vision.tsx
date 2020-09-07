import React, { useEffect } from "react";
import styled from "styled-components";
import LayoutWithBG from "../components/components/LayoutWithBG";
import {
  Container,
  Content,
  BodyPage,
  WrapperContent,
} from "../components/components/Grid";
import Winwin from "../data/Winwin.json";

const ImageCover = styled.img`
  width: 100%;
  border-radius: 8px;
  margin-top: 20px;
`;

const Vision: React.FC = () => {
  useEffect(() => {
    document.title = "วิสัยทัศน์ - winwin asset"
  }, [])
  return (
    <LayoutWithBG>
      <Container>
        <BodyPage>
          <WrapperContent>
            <h1>
              <b>วิสัยทัศน์</b>
            </h1>
            <Content>
              <h4>{Winwin.vision}</h4>
              <ImageCover src="/img/vision.png" />
            </Content>
          </WrapperContent>
        </BodyPage>
      </Container>
    </LayoutWithBG>
  );
};

export default Vision;
