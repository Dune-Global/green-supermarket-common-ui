import React from "react";

type Props = {};

const BrandIcon = (props: Props) => {
  return (
    <div className="text-left">
      <span className="text-green-600 text-base font-medium  leading-normal">
        GREEN
      </span>
      <span className="text-zinc-900 text-base font-medium leading-normal">
        {" "}
        SUPERMARKET
      </span>
    </div>
  );
};

export default BrandIcon;
