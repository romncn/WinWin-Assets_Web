import React from "react";
import { Row, Col } from "antd";
import styled from "styled-components";

type MenuProps = {
  selected: boolean;
};

const Menu = styled.button<MenuProps>`
  background-color: ${({ theme, selected }) =>
    selected ? theme.color.basecolor : "transparent"};
  border-radius: 8px;
  border: none;
  padding: 5px 15px 5px 15px;
  margin: 0px 10px 0px 10px;
  font-size: 24px;
  cursor: pointer;
  color: ${({ selected }) => (selected ? "white" : "")};

  &:hover {
    background-color: ${({ theme, selected }) =>
    selected ? theme.color.basecolor : "#F7F7F7"};
  }
`;

type AssetTypeProps = {
  selected: string;
  onChangeAssetType(type: string): void;
};

const AssetTypeBar: React.FC<AssetTypeProps> = ({
  selected,
  onChangeAssetType,
}) => {
  return (
    <div>
      <Row justify="center">
        <Col>
          <Menu
            selected={selected === "ทั้งหมด"}
            onClick={() => onChangeAssetType("ทั้งหมด")}
          >
            ทั้งหมด
          </Menu>
        </Col>
        <Col>
          <Menu
            selected={selected === "บ้านเดี่ยว"}
            onClick={() => onChangeAssetType("บ้านเดี่ยว")}
          >
            บ้านเดี่ยว
          </Menu>
        </Col>
        <Col>
          <Menu
            selected={selected === "ทาวน์โฮม"}
            onClick={() => onChangeAssetType("ทาวน์โฮม")}
          >
            ทาวน์โฮม
          </Menu>
        </Col>
        <Col>
          <Menu
            selected={selected === "คอนโด"}
            onClick={() => onChangeAssetType("คอนโด")}
          >
            คอนโด
          </Menu>
        </Col>
      </Row>
    </div>
  );
};
export default AssetTypeBar;
