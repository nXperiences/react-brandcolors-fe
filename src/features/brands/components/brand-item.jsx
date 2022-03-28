import { getColor } from "./../utils/fore-color";
import React, { useContext } from "react";
import BrandContext from "../brand-context";
import Clipboard from "react-clipboard.js";

function BrandItem({ brand }) {
  const { selectedBrands, changeSelectedBrands, changeCopiedColor } =
    useContext(BrandContext);

  const isSelectedBrand = () =>
    selectedBrands && selectedBrands.includes(brand.slug);

  const onSelectedBrandsChanged = () => {
    if (isSelectedBrand()) {
      let filtered = selectedBrands.filter((slug) => slug !== brand.slug);
      changeSelectedBrands(filtered);
    } else {
      changeSelectedBrands([...selectedBrands, brand.slug]);
    }
  };

  const className = "brand-item ".concat(
    `${isSelectedBrand() ? "selected" : ""}`
  );
  // const className = "brand-item";

  return (
    <div className={className}>
      <h5 onClick={onSelectedBrandsChanged}>{brand.title}</h5>
      <div className="color-palette">
        {brand.colors.map((color, index) => {
          return (
            <Clipboard
              key={index}
              data-clipboard-text={color}
              component="span"
              onSuccess={() => changeCopiedColor(color)}
              style={{
                "--bg-color": "#".concat(color),
                "--fore-color": "#".concat(getColor(color)),
              }}
            >
              {color}
            </Clipboard>
          );
        })}
      </div>
    </div>
  );
}

export default BrandItem;
