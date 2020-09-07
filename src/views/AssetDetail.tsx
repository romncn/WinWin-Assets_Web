import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BodyPage } from "../components/components/Grid";

import Assets from "../data/Assets.json";

//components
import ImageShow from "../components/AssetDetail/ImageShow";
import Detail from "../components/AssetDetail/Detail";
import ContactAdmin from "../components/AssetDetail/ContactAdmin";
import AssetsSuggest from "../components/AssetDetail/AssetsSuggest";

export interface IAsset {
  id: string;
  name: string;
  type: Array<string>;
  location: string;
  detail: Array<{
    name: string;
    size: number;
  }>;
  image: Array<string>;
}

const AssetDetail: React.SFC = () => {
  const [asset, setAsset] = useState<IAsset>({
    id: "",
    name: "",
    type: [""],
    location: "",
    detail: [{ name: "", size: 0 }],
    image: [""],
  });
  const [reload, setReload] = useState(false);

  let { name } = useParams();

  useEffect(() => {
    document.title = "โครงการ"+asset.name+" - winwin asset";
    SetAssetDetail();
  });
  useEffect(() => {
    document.title = "โครงการ"+asset.name+" - winwin asset";
    SetAssetDetail();
  }, [reload]);

  const SetAssetDetail = () => {
    let asset = Assets.filter((asset) => asset.id === name);
    if (asset[0] === undefined) {
    } else {
      setAsset(asset[0]);
    }
  };
  const nextAsset = () => {
    setAsset({
      id: "",
      name: "",
      type: [""],
      location: "",
      detail: [{ name: "", size: 0 }],
      image: [""],
    });
    setReload(!reload);
  };

  if (asset.id === "") {
    console.log(asset);
    return <div></div>;
  } else {
    return (
      <div>
        <BodyPage>
          <ImageShow image={asset.image} />
          <div style={{ paddingTop: "50px" }}>
            <Detail
              name={asset.name}
              type={asset.type}
              location={asset.location}
              detail={asset.detail}
            />
          </div>
          <div style={{ paddingTop: "50px" }}>
            <ContactAdmin assetname={asset.name} />
          </div>
          <div style={{ paddingTop: "50px" }}>
            <AssetsSuggest
              assets={Assets}
              id={asset.id}
              nextAsset={nextAsset}
            />
          </div>
        </BodyPage>
      </div>
    );
  }
};

export default AssetDetail;
