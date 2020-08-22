import React from "react";
import styled from "styled-components";
import LayoutWithBG from "../components/components/LayoutWithBG";
import { Container, Content, BodyPage } from "../components/components/Grid";
import Winwin from "../data/Winwin.json";

const Vision: React.FC = () => {
  return (
    <LayoutWithBG>
      <Container>
        <BodyPage>
          <h1>
            <b>WIN WIN คืออะไร</b>
          </h1>
          <Content>
            {Winwin.winwinis.map((winwinis) => {
              return <h3>{winwinis}</h3>;
            })}
          </Content>
        </BodyPage>
      </Container>
    </LayoutWithBG>
  );
};

export default Vision;
