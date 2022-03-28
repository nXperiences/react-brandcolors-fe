import React, { useContext, useEffect } from "react";
import BrandContext from "../brand-context";
import BrandItemLoader from "./brand-item-loader";
import BrandItem from "./brand-item";
import BrandColorCopied from "./brand-color-copied";
import LazyLoad from "react-lazyload";

function BrandList(props) {
  const { brands, copiedColor, changeCopiedColor } = useContext(BrandContext);

  useEffect(() => {
    if (copiedColor) {
      let timeout = setTimeout(() => changeCopiedColor(false), 800);
      return () => clearTimeout(timeout);
    }
  }, [copiedColor, changeCopiedColor]);

  return (
    <>
      {copiedColor && <BrandColorCopied color={copiedColor} />}
      <div className="brand-list">
        {brands.map((brand, index) => {
          return (
            <LazyLoad key={index} placeholder={<BrandItemLoader/>} once overflow>
              <BrandItem brand={brand} />
            </LazyLoad>
          );
        })}
      </div>
    </>
  );
}

export default BrandList;
