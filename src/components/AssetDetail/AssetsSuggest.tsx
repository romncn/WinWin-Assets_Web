import React from "react";
import { Link } from "react-router-dom";
import { Row, Col } from "antd";
import { Container } from "../components/Grid";
import AssetCard from "../components/AssetCard";

type AssetsProps = {
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
  id: string;
  nextAsset(): void;
};

const AssetsSuggest: React.FunctionComponent<AssetsProps> = ({
  assets,
  id,
  nextAsset,
}) => {
  const allAsset = assets.filter((asset) => asset.id !== id);
  const assetsSuggest = allAsset.slice(0, 3);

  return (
    <div>
      <Container>
        <h1 style={{ margin: "0px" }}>โครงการเพิ่มเติม</h1>
        <Row gutter={12}>
          {assetsSuggest.map((asset) => {
            return (
              <Col span={24} lg={8} style={{ marginTop: "20px" }}>
                <Link to={`/asset/${asset.id}`} onClick={() => nextAsset()}>
                  <AssetCard asset={asset} />
                </Link>
              </Col>
            );
          })}
        </Row>
        <div style={{ paddingTop: "30px", textAlign: "right" }}>
          <h2>{"ดูทั้งหมด >>"}</h2>
        </div>
      </Container>
    </div>
  );
};

export default AssetsSuggest;
