import React, { FunctionComponent } from "react";
import styled from "styled-components";
import { Container } from "../components/Grid";
import { Row, Col } from "antd";

const ImageCover = styled.img`
  width: 100%;
  height: 300px;
  border-radius: 8px;
  object-fit: cover;
  @media screen and (min-width: 992px) {
    height: 350px;
  }
`;

const SubImageCover = styled(ImageCover)`
  height: 150px;
  @media screen and (min-width: 992px) {
    height: 220px;
  }
`;
type AssetImageProps = {
  image: Array<string>;
};

const ImageShow: FunctionComponent<AssetImageProps> = ({ image }) => {
  return (
    <Container>
      <Row>
        <ImageCover src={`/img/Assets/${image[0]}`} />
      </Row>
      <Row gutter={6} style={{ paddingTop: "6px" }}>
        <Col span={12}>
          <SubImageCover src={`/img/Assets/${image[1]}`} />
        </Col>
        <Col span={12}>
          <SubImageCover src={`/img/Assets/${image[2]}`} />
        </Col>
      </Row>
    </Container>
  );
};

export default ImageShow;
