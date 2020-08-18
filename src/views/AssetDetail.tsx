import React from "react";
import { useParams } from "react-router-dom";

const AssetDetail: React.SFC = (props) => {
  let { name } = useParams();
  //   console.log("name", (name+"").replace("_", " "));
  return <div>Asset Detail</div>;
};

export default AssetDetail;
