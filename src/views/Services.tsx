import React from "react";
import styled from "styled-components";
import LayoutWithBG from "../components/components/LayoutWithBG";
import { Container, Content, BodyPage, WrapperContent } from "../components/components/Grid";
import Service from "../data/Service.json";

const Vision: React.FC = () => {
  return (
    <LayoutWithBG>
      <Container>
        <BodyPage>
          <WrapperContent>
            <h1>
              <b>การบริการจาก WIN WIN</b>
            </h1>
            <Content>
              <Content>
                <h3>
                  <span>
                    บริษัทวิน วิน แอสเสท จำกัด
                    เปิดให้บริการอย่างครบวงจรในด้านธุรกิจอสังหาริมทรัพย์ ดังนี้
                </span>
                  <br />
                  {Service.services.map((serv, key) => {
                    return (
                      <span>
                        {key + 1}. {serv}
                        <br />
                      </span>
                    );
                  })}
                </h3>
              </Content>
              <h3>
                <b>ประโยชน์ที่ท่านได้รับ</b>
              </h3>
              <Content>
                <h3>
                  {Service.benefits.map((benefit, key) => {
                    return (
                      <span>
                        {key + 1}. {benefit}
                        <br />
                      </span>
                    );
                  })}
                </h3>
              </Content>
            </Content>
          </WrapperContent>
        </BodyPage>
      </Container>
    </LayoutWithBG>
  );
};

export default Vision;
