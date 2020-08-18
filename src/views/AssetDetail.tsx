import React from "react";
import { useParams } from "react-router-dom";
import { styled } from "../style/Theme";

const Text = styled.span`
  color: ${(props) => props.theme.color.base};
`;

const TextSub = styled.span`
  color: ${(props) => props.theme.color.sub};
`;

const AssetDetail: React.SFC = (props) => {
  let { name } = useParams();
  //   console.log("name", (name+"").replace("_", " "));
  return (
    <>
      <Text>Asset Detail</Text>
      <TextSub>SSSSS</TextSub>
    </>
  );
};

export default AssetDetail;
