import React, { useContext, useEffect } from "react";
import BrandContext from "../brand-context";
import BrandItem from "./brand-item";
import BrandItemLoader from "./brand-item-loader";
import BrandColorCopied from "./brand-color-copied";
import LazyLoad from "react-lazyload";

function BrandCollectedList(props) {
  const { brands, selectedBrands, copiedColor, changeCopiedColor } =
    useContext(BrandContext);

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
        {selectedBrands.map((slug, index) => {
          let brand = brands.find((brand) => brand.slug === slug);
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

export default BrandCollectedList;
