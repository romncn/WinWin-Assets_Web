import React from "react"
import styled from "styled-components";
import { Container } from "../components/Grid";
import Button from "../components/Button";
import { Link } from "react-router-dom";
import { Row, Col } from 'antd';


const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    background: #404143;
`;
const ImageCover = styled.img`
  width: 100%;
  border-radius: 8px;
`;

const Portfolio: React.FC = () => {
    return (
        <Wrapper>
            <Container style={{ paddingTop: "25px", paddingBottom: "25px" }}>
                <h1 style={{ color: "#FFFFFF", margin: "0px" }}>
                    <b>ผลงานที่ผ่านมา</b>
                </h1>
                <Row gutter={[24, 24]}
                    justify="space-around"
                    style={{ color: "white", paddingTop: "15px", paddingBottom: "15px" }}
                >
                    <Col sm={{ span: 10 }} lg={{ span: 7 }} >
                        <ImageCover src="/img/vision.png" />
                    </Col>
                    <Col sm={{ span: 10 }} lg={{ span: 7 }}>
                        <ImageCover src="/img/vision.png" />
                    </Col>
                    <Col sm={{ span: 10 }} lg={{ span: 7 }}>
                        <ImageCover src="/img/vision.png" />
                    </Col>
                </Row>
                <Row justify="center"
                    style={{ paddingBottom: "15px" }}
                >
                    <Link to="/portfolio">
                        <Button type="primary">
                            ดูเพิ่มเติม
                        </Button>
                    </Link>
                </Row>
            </Container>
        </Wrapper>
    )
}

export default Portfolio;