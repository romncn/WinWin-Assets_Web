import React, { FunctionComponent, useState } from "react";
import styled from "styled-components";
import { Modal } from "antd";
import { Container } from "../components/Grid";
import { Row, Col } from "antd";

const ImageCover = styled.img`
  width: 100%;
  height: 300px;
  border-radius: 8px;
  object-fit: cover;
  cursor: pointer;
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

  const [visible, setVisible] = useState<boolean>(false);
  const [imageModal, setImage] = useState<string>("")

  const showModal = (image : string) => {
    setImage(image)
    setVisible(true);
  };

  const handleOk = () => {
    setVisible(false);
  };

  const handleCancel = () => {
    setVisible(false);
  };

  return (
    <Container>
      <Row>
        <ImageCover onClick={() => showModal(image[0])} src={`/img/Assets/${image[0]}`} />
      </Row>
      <Row gutter={6} style={{ paddingTop: "6px" }}>
        <Col span={12}>
          <SubImageCover onClick={() => showModal(image[1])} src={`/img/Assets/${image[1]}`} />
        </Col>
        <Col span={12}>
          <SubImageCover onClick={() => showModal(image[1])} src={`/img/Assets/${image[2]}`} />
        </Col>
      </Row>
      <Modal
        title="รูปภาพโครงการ"
        visible={visible}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[]}
      >
        <img src={`/img/Assets/${imageModal}`} width="100%" />
      </Modal>
    </Container>
  );
};

export default ImageShow;
