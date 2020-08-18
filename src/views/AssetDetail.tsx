import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Assets from "../data/Assets.json";


//components
import Detail from "../components/AssetDetail/Detail";

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

  let { name } = useParams();

  useEffect(() => {
    let asset = Assets.filter((asset) => asset.id === name);
    if (asset[0] === undefined) {
    } else {
      setAsset(asset[0]);
    }
  },[]);

  return (
    <div>
      <Detail
        name={asset.name}
        type={asset.type}
        location={asset.location}
        detail={asset.detail}
      />
    </div>
  );
};

export default AssetDetail;
