import React, { useState, useEffect } from "react";
import Button from "../components/components/Button";
import Carousel from "../components/home/Carousel";
import Welcome from "../components/home/Welcome";
import ShowAssets from "../components/home/ShowAssets";
import Portfolio from "../components/home/Portfolio";
import Vision from "../components/home/Vision";
import Service from "../components/home/Service";
import Ads from "../data/Ads.json";
import Assets from "../data/Assets.json";
import LayoutWithBG from "../components/components/LayoutWithBG";

const Home: React.FC = () => {
  const [assetType, setAssetType] = useState<string>("ทั้งหมด");
  const [assets, setAssets] = useState(Assets);
  const onChangeAssetType = (type: string) => {
    setAssetType(type);
  };
  useEffect(() => {
    document.title = "หน้าหลัก - winwin asset";
    let assetsFilter = Assets;
    if (assetType !== "ทั้งหมด") {
      assetsFilter = Assets.filter((asset) => asset.type.includes(assetType));
    }
    if (assetsFilter.length > 6) {
      assetsFilter = assetsFilter.slice(0, 6);
    }
    setAssets(assetsFilter);
    console.log("assets: ", assetsFilter);
  }, [assetType]);
  return (
    <LayoutWithBG>
      <Carousel ads={Ads} />
      <Welcome />
      <ShowAssets
        selected={assetType}
        onChangeAssetType={onChangeAssetType}
        assets={assets}
      />
      {/* <Portfolio /> */}
      <Vision />
      <Service />
    </LayoutWithBG>
  );
};

export default Home;
