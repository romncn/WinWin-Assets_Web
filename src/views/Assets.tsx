import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Row, Col } from "antd";
import { Container, BodyPage } from "../components/components/Grid";
import AssetCard from "../components/components/AssetCard";
import Assets from "../data/Assets.json";

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
  color: ${({ selected }) => (selected ? "white" : "#404143")};

  &:hover {
    background-color: ${({ theme, selected }) =>
      selected ? theme.color.basecolor : "#F7F7F7"};
  }
`;

const AssetsSuggest: React.FC = () => {
  let location = useLocation();
  const [assetType, setAssetType] = useState<string>("ทั้งหมด");
  const [assets, setAssets] = useState(Assets);

  useEffect(() => {
    document.title = "โครงการ" + assetType + " - winwin asset";
    let page = location.pathname.substr(7);
    switch (page) {
      case "":
        setAssetType("ทั้งหมด");
        break;
      case "house":
        setAssetType("บ้านเดี่ยว");
        break;
      case "townhome":
        setAssetType("ทาวน์โฮม");
        break;
      case "condominium":
        setAssetType("คอนโด");
        break;
      default:
        break;
    }
  });

  useEffect(() => {
    let assetsFilter = Assets;
    if (assetType !== "ทั้งหมด") {
      assetsFilter = Assets.filter((asset) => asset.type.includes(assetType));
    }
    setAssets(assetsFilter);
  }, [assetType]);

  return (
    <BodyPage>
      <Container>
        <h1>
          <b>แนะนำโครงการ</b>
        </h1>
        <div>
          <Row justify="center">
            <Col>
              <Link to="/assets">
                <Menu selected={assetType === "ทั้งหมด"}>ทั้งหมด</Menu>
              </Link>
            </Col>
            <Col>
              <Link to="/asset/house">
                <Menu selected={assetType === "บ้านเดี่ยว"}>บ้านเดี่ยว</Menu>
              </Link>
            </Col>
            <Col>
              <Link to="/asset/townhome">
                <Menu selected={assetType === "ทาวน์โฮม"}>ทาวน์โฮม</Menu>
              </Link>
            </Col>
            <Col>
              <Link to="/asset/condominium">
                <Menu selected={assetType === "คอนโด"}>คอนโด</Menu>
              </Link>
            </Col>
          </Row>
        </div>
        <Row gutter={12}>
          {assets.map((asset) => {
            return (
              <Col span={24} lg={8} style={{ marginTop: "30px" }}>
                <Link to={`/asset/${asset.id}`}>
                  <AssetCard asset={asset} />
                </Link>
              </Col>
            );
          })}
        </Row>
      </Container>
    </BodyPage>
  );
};

export default AssetsSuggest;
