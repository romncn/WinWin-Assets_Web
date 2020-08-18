import React, { FunctionComponent } from "react";
import styled from "styled-components";
import { EnvironmentFilled, EditFilled } from "@ant-design/icons";
import { Container } from "../components/Grid";

const Icon = styled.span`
  color: black;
  padding-left: 10px;
  padding-right: 10px;
  @media screen and (min-width: 992px) {
    padding-left: 20px;
    padding-right: 20px;
  }
`;

type AssetDetailProps = {
  name: string;
  type: Array<string>;
  location: string;
  detail: Array<{
    name: string;
    size: number;
  }>;
};

const Detail: FunctionComponent<AssetDetailProps> = ({
  name,
  type,
  location,
  detail,
}) => {
  return (
    <div>
      <Container>
        <h1>
          <b>{name}</b>
        </h1>
        <h2>
          {type.map((t, key) => {
            return (
              <span>
                {t}
                {key === type.length - 1 ? "" : ", "}
              </span>
            );
          })}
        </h2>
        <div>
          <h3>
            <Icon>
              <EnvironmentFilled />
            </Icon>
            {location}
          </h3>
          <h3>
            <Icon>
              <EditFilled />
            </Icon>
            {detail.map((d, key) => {
              return (
                <span>
                  {d.name} {d.size} ตรว. {key === detail.length - 1 ? "" : ", "}
                </span>
              );
            })}
          </h3>
        </div>
      </Container>
    </div>
  );
};

export default Detail;
