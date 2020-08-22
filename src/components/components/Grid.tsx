import React from "react";
import styled from "styled-components";

export const Container = styled.div`
  padding-left: 20px;
  padding-right: 20px;
  @media screen and (min-width: 992px) {
    padding-left: 200px;
    padding-right: 200px;
  }
`;

export const Content = styled.div`
  padding-left: 0px;
  padding-right: 0px;
  @media screen and (min-width: 992px) {
    padding-left: 50px;
    padding-right: 50px;
  }
`;

export const BodyPage = styled.div`
  padding-top: 50px;
  padding-bottom: 20px;
  @media screen and (min-width: 992px) {
    padding-top: 100px;
  }
`;
