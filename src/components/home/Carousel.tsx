import React, { HTMLAttributes } from "react";
import { Carousel } from "antd";
import styled from "styled-components";

const CarouselCircle = styled(Carousel)`
  .slick-dots li button {
    width: 10px;
    height: 10px;
    border-radius: 5px;
  }
  .slick-dots li {
    margin-right: 0px;
    margin-left: 0px;
  }
  .slick-dots li.slick-active {
      width: 16px;
  }
`;
const ContentStyle = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
  @media screen and (min-width: 992px) {
    height: 450px;
  }
`;

type AdsProps = {
  ads: Array<{
    name: string;
    image: string;
  }>;
};

const Ads: React.FC<AdsProps> = ({ ads }) => {
  return (
    <div>
      <CarouselCircle autoplay={false}>
        {ads.map((oneads) => {
          return (
            <ContentStyle src={`/img/Ads/${oneads.image}`} alt={oneads.name} />
          );
        })}
      </CarouselCircle>
    </div>
  );
};

export default Ads;
