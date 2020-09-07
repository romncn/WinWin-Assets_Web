import React from "react";
import { Card, Row, Col } from "antd";
import { styled } from "../../style/Theme";

const CardAsset = styled(Card)`
  min-height: 374px;
  cursor: pointer;
  border-radius: 8px;
  box-shadow: 0px 8px 10px rgba(0, 0, 0, 0.14), 0px 3px 14px rgba(0, 0, 0, 0.12);
  .ant-card-body {
    padding: 10px;
  }
  .ant-card-cover img {
    border-radius: 8px 8px 0px 0px;
  }
`;

const ImageCover = styled.img`
  width: 100%;
  height: 270px;
  object-fit: cover;
`;

const CardHover = styled.div`
  position: absolute;
  z-index: 1;
  top: 0px;
  width: 96.5%;
  height: 100%x;
  padding: 0px 10px 0px 10px;
  border-radius: 8px;
  cursor: pointer;
  opacity: 0;
  background-color: ${(props) => props.theme.color.basecolor};
  &:hover {
    opacity: 1;
  }
`;

type AssetsProps = {
  asset: {
    name: string;
    type: Array<string>;
    location: string;
    detail: Array<{
      name: string;
    }>;
    image: Array<string>;
  };
};

const AssetCard: React.FunctionComponent<AssetsProps> = ({ asset }) => {
  return (
    <div>
      <CardAsset
        cover={
          <ImageCover alt="example" src={`/img/assets/${asset.image[0]}`} />
        }
      >
        <div>
          <h3>{asset.name}</h3>
          <h5>
            <span>ประเภท : </span>
            {asset.type.map((type, key) => {
              return (
                <span>
                  {type}
                  {key === asset.type.length - 1 ? "" : ", "}
                </span>
              );
            })}
          </h5>
        </div>
      </CardAsset>
      <CardHover>
        <Row align="middle" style={{ height: "374px" }}>
          <Col>
            <h3 style={{ color: "white" }}>{asset.name}</h3>
            <h5 style={{ color: "white" }}>
              <span>ประเภท : </span>
              {asset.type.map((type, key) => {
                return (
                  <span>
                    {type}
                    {key === asset.type.length - 1 ? "" : ", "}
                  </span>
                );
              })}
            </h5>
            <img src="/img/arrownext.png" />
          </Col>
        </Row>
      </CardHover>
    </div>
  );
};

export default AssetCard;
