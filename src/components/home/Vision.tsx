import React from "react"
import styled from "styled-components";
import { Container } from "../components/Grid";
import Button from "../components/Button";
import { Link } from "react-router-dom";


const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    background: #FAFAFA;
`;


const Vision: React.FC = () => {
    return (
        <Wrapper>
            <Container style={{ textAlign: "center", paddingTop: "40px", paddingBottom: "40px" }}>
                <h2>วิสัยทัศน์</h2>
                <h4>“ บริษัท วิน วิน แอสเสท จำกัด เน้นสร้างงานบริหารการขาย เน้นคุณภาพในการให้บริการที่ดีที่สุด</h4>
                <h4>ด้วยความสามารถของทีมงานมืออาชีพจากประสบการณ์ที่มียาวนานกว่า 10 ปี “</h4>
                <div style={{ paddingTop: "15px", paddingBottom: "15px" }}>
                    <Link to="/vision">
                        <Button type="primary">
                            อ่านเพิ่มเติม
                    </Button>
                    </Link>
                </div>
            </Container>
        </Wrapper >
    )
}

export default Vision;