import React from "react";
import { Link } from "react-router-dom";
import { Container } from "../components/Grid";
import { Row, Col } from "antd";
import AssetTypeBar from "../components/AssetTypeBar";
import AssetCard from "../components/AssetCard";
import styled from "styled-components";

const SeeAllAssets = styled.div`
  padding-top: 30px;
  text-align: right;
  a {
    &:hover {
      border-radius: 8px;
      background-color: #F7F7F7;
    }
  }
`;

type AssetTypeProps = {
  selected: string;
  onChangeAssetType(type: string): void;
  assets: Array<{
    id: string;
    name: string;
    type: Array<string>;
    location: string;
    detail: Array<{
      name: string;
    }>;
    image: Array<string>;
  }>;
};

const ShowAssets: React.FC<AssetTypeProps> = React.memo(
  ({ selected, onChangeAssetType, assets }) => {
    return (
      <div>
        <Container>
          <h1>
            <b>แนะนำโครงการ</b>
          </h1>
          <AssetTypeBar
            selected={selected}
            onChangeAssetType={onChangeAssetType}
          />
          <div>
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
            <SeeAllAssets>
              <h1>
                <Link to="/assets" style={{color:"#404143"}}>{"ดูทั้งหมด >>"}</Link>
              </h1>
            </SeeAllAssets>
          </div>
        </Container>
      </div>
    );
  }
);

export default ShowAssets;
