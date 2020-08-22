import React, { useState, useEffect } from "react";
import { useHistory, Redirect } from "react-router-dom";
import { Row, Col } from "antd";
import { Container, BodyPage } from "../components/components/Grid";
import AssetTypeBar from "../components/components/AssetTypeBar";
import AssetCard from "../components/components/AssetCard";
import Assets from "../data/Assets.json";

type TypeAssetProps = {
  type: string;
};

const AssetsSuggest: React.FC<TypeAssetProps> = ({ type }) => {
  let history = useHistory();
  const [assetType, setAssetType] = useState<string>(type);
  const [assets, setAssets] = useState(Assets);
  const [redirect, setRedirect] = useState<boolean>(false);
  const onChangeAssetType = (type: string) => {
    setAssetType(type);
    setRedirect(true);
  };
  useEffect(() => {
    let assetsFilter = Assets;
    if (assetType !== "ทั้งหมด") {
      assetsFilter = Assets.filter((asset) => asset.type.includes(assetType));
    }
    setAssets(assetsFilter);
    console.log("assets: ", assetsFilter);
  }, [assetType]);
  if (redirect) {
    switch (assetType) {
      case "ทั้งหมด":
        history.push("/assets");
        history.go(0);
        break;
      case "บ้านเดี่ยว":
        history.push("/asset/house");
        history.go(0);
        break;
      case "ทาวน์โฮม":
        history.push("/asset/townhome");
        history.go(0);
        break;
      case "คอนโด":
        history.push("/asset/condominium");
        history.go(0);
        break;
      default:
        break;
    }
  }
  return (
    <BodyPage>
      <Container>
        <h1>
          <b>แนะนำโครงการ</b>
        </h1>
        <AssetTypeBar
          selected={assetType}
          onChangeAssetType={onChangeAssetType}
        />
        <Row gutter={12}>
          {assets.map((asset) => {
            return (
              <Col span={24} lg={8} style={{ marginTop: "30px" }}>
                <div>
                  <AssetCard asset={asset} />
                </div>
              </Col>
            );
          })}
        </Row>
      </Container>
    </BodyPage>
  );
};

export default AssetsSuggest;
