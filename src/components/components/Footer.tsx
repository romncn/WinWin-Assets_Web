import React from "react";
import { Container, BodyPage } from "../components/Grid";
import { Col, Row } from 'antd';
import { styled } from "../../style/Theme";
import { Link } from "react-router-dom";

const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    background-image: url("/img/footer-bg.png");
    background-size: cover;
    h3,h4,h5 {
        color: white;
        margin: 0px;
    }
    h5 {
        &:hover , &:active {
            color: ${props => (props.theme.color.basecolor)};
            cursor: pointer;
        }
    }
    .content {
        text-align: center;
        padding: 0px 0px 20px 0px;
    }
    .contact {
        padding: 10px 0px 15px 0px;
        a {
            color: white;
        }
        h5 {
            display: inline;
            padding-left: 10px;
            align-items: center;
        }
    }
`;

const Footer: React.FC = () => {
    return (
        <Wrapper>
            <Container>
                <BodyPage>
                    <div className="content">
                        <h3>บริษัท วินวิน แอสเสท จำกัด</h3>
                        <Row style={{ paddingTop: "30px", paddingBottom: "30px" }} gutter={[16, 16]}>
                            <Col span={24} lg={6} sm={12}>
                                <h4>รู้จัก WINWIN</h4>
                                <p />
                                <Link to="/whatis">
                                    <h5>WINWIN คืออะไร</h5>
                                </Link>
                                <Link to="/portfolio">
                                    <h5>ผลงานที่ผ่านมา</h5>
                                </Link>
                            </Col>
                            <Col span={24} lg={6} sm={12}>
                                <h4>โครงการ</h4>
                                <p />
                                <Link to="/asset/house">
                                    <h5>บ้านเดี่ยว</h5>
                                </Link>
                                <Link to="/asset/townhome">
                                    <h5>ทาวน์โฮม</h5>
                                </Link>
                                <Link to="/asset/condominium">
                                    <h5>คอนโด</h5>
                                </Link>
                                <Link to="/assets">
                                    <h5>โครงการทั้งหมด</h5>
                                </Link>
                            </Col>
                            <Col span={24} lg={6} sm={12}>
                                <h4>บริการ</h4>
                                <p />
                                <Link to="/service">
                                    <h5>บริการจาก WINWIN</h5>
                                </Link>
                                <Link to="/standard-service">
                                    <h5>มาตรฐานการบริการ</h5>
                                </Link>
                            </Col>
                            <Col span={24} lg={6} sm={12}>
                                <h4>อื่นๆ</h4>
                                <p />
                                <Link to="aboutus">
                                    <h5>คณะผู้บริหาร</h5>
                                </Link>
                                <Link to="vision">
                                    <h5>วิสัยทัศน์</h5>
                                </Link>
                            </Col>
                        </Row>
                    </div>
                    <div className="contact">
                        <a href="/">
                            <img src="/img/ic_facebook.png"></img>
                            <h5>Facebook </h5>
                        </a>
                    </div>
                </BodyPage>
            </Container>
        </Wrapper>
    )
}

export default Footer;