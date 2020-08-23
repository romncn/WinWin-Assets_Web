import React from "react";
import styled from "styled-components";
import LayoutWithBG from "../components/components/LayoutWithBG";
import { Container, Content, BodyPage, WrapperContent } from "../components/components/Grid";
import Winwin from "../data/Winwin.json";

const Vision: React.FC = () => {
  return (
    <LayoutWithBG>
      <Container>
        <BodyPage>
          <WrapperContent>
            <h1>
              <b>WIN WIN คืออะไร</b>
            </h1>
            <Content>
              {Winwin.winwinis.map((winwinis) => {
                return <h4>{winwinis}</h4>;
              })}
            </Content>
          </WrapperContent>
        </BodyPage>
      </Container>
    </LayoutWithBG>
  );
};

export default Vision;
