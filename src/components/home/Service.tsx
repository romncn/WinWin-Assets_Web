import React from "react"
import styled from "styled-components";
import { Container, BodyPage } from "../components/Grid";
import Button from "../components/Button";
import { Link } from "react-router-dom";
import { Card, Col, Row } from 'antd';

const Wrapper = styled.div`
    width: 100%;
    height: 100%;
`;

const AntCard = styled(Card)`
  border-radius: 8px;
  box-shadow: 0px 8px 10px rgba(0, 0, 0, 0.14), 0px 3px 14px rgba(0, 0, 0, 0.12);
  margin: 10px 0px 10px 0px;
  padding: 15px 0px 15px 0px;
`;

const Service: React.FC = () => {
    return (
        <Wrapper>
            <Container>
                <BodyPage style={{ paddingBottom: "0px" }}>
                    <Row justify="space-between" gutter={16}>
                        <Col lg={{ span: 8 }} sm={{ span: 12 }}>
                            <AntCard>
                                <Row justify="center">
                                    <h1>
                                        <b>บริการจาก WINWIN</b>
                                    </h1>
                                    <Link to="/service">
                                        <Button type="primary">อ่านเพิ่มเติม</Button>
                                    </Link>
                                </Row>
                            </AntCard>
                        </Col>
                        <Col lg={{ span: 8 }} sm={{ span: 12 }}>
                            <AntCard>
                                <Row justify="center">
                                    <h1>
                                        <b>มาตรฐานการบริการ</b>
                                    </h1>
                                    <Link to="/standard-service">
                                        <Button type="primary">อ่านเพิ่มเติม</Button>
                                    </Link>
                                </Row>
                            </AntCard>
                        </Col>
                    </Row>
                </BodyPage>
            </Container>
        </Wrapper >
    )
}

export default Service;