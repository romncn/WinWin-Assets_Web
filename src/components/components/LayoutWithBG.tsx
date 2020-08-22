import React from "react";

const LayoutWithBG: React.FC = ({ children }) => {
  return (
    <div>
      {children}
      <img src="/img/bg.png" width="100%" />
    </div>
  );
};

export default LayoutWithBG;
