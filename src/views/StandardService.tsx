import React from "react";
import styled from "styled-components";
import LayoutWithBG from "../components/components/LayoutWithBG";
import { Container, Content, BodyPage } from "../components/components/Grid";
import Service from "../data/Service.json";

const Vision: React.FC = () => {
  return (
    <LayoutWithBG>
      <Container>
        <BodyPage>
          <h1>
            <b>มาตรฐานการบริการ</b>
          </h1>
          <Content>
            {Service.standardservice.map((stdserv, key) => {
              return (
                <p>
                  <h3>
                    <b>
                      {key + 1}. {stdserv.servicetype}
                    </b>
                  </h3>
                  <Content>
                    {stdserv.description.map((des) => {
                      return (
                        <h3>
                          {des.detail === "" ? (
                            ""
                          ) : (
                            <span>
                              {des.detail}
                              <br />
                            </span>
                          )}

                          {des.services.map((serv, key) => {
                            return (
                              <span>
                                {key + 1}. {serv}
                                <br />
                              </span>
                            );
                          })}
                        </h3>
                      );
                    })}
                  </Content>
                </p>
              );
            })}
          </Content>
        </BodyPage>
      </Container>
    </LayoutWithBG>
  );
};

export default Vision;
