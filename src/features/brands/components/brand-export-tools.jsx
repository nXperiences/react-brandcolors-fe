import React, { useContext, useState, useEffect } from "react";
import BrandContext from "../brand-context";
import { GrDownload, GrLink, GrClose } from "react-icons/gr";
import { Link } from "react-router-dom";

function BrandExportTools() {
  const { brands, selectedBrands, changeSelectedBrands } =
    useContext(BrandContext);

  const [downloadUrl, changeDownloadUrl] = useState("");
  const [downloadFormat, changeDownloadFormat] = useState("css");

  useEffect(() => {
    if (selectedBrands.length > 0) {
      let output = "";

      selectedBrands.map((slug) => {
        let brand = brands.find((brand) => brand.slug === slug);

        brand.colors.map((color, key) => {
          switch (downloadFormat) {
            case "scss":
              output += `$bc-${slug}-${key}: #${color};\r\n`;
              break;
            case "less":
              output += `@bc-${slug}-${key}: #${color};\r\n`;
              break;
            default: // css
              output += `--bc-${slug}-${key}: #${color};\r\n`;
              break;
          }
          return true;
        });

        return true;
      });

      const blob = new Blob([output]);
      const url = URL.createObjectURL(blob);
      changeDownloadUrl(url);

      return () => {
        URL.revokeObjectURL(url);
        changeDownloadUrl("");
      };
    }
  }, [brands, selectedBrands, downloadFormat]);

  if (selectedBrands.length === 0) return null;

  return (
    <div className="brand-export">
      <div className="export-actions">
        <select
          defaultValue="CSS"
          onChange={(event) => changeDownloadFormat(event.target.value)}
        >
          <option value="css">CSS</option>
          <option value="scss">SCSS</option>
          <option value="less">LESS</option>
        </select>
        <a
          href={downloadUrl}
          download={"brandcolors-".concat(Date.now(), ".", downloadFormat)}
        >
          <GrDownload />
        </a>
        <Link to={"/c/".concat(selectedBrands)}>
          <GrLink />
        </Link>
      </div>
      <div className="export-info" onClick={() => changeSelectedBrands([])}>
        <GrClose />
        <span>{selectedBrands.length} brands collected</span>
      </div>
    </div>
  );
}

export default BrandExportTools;
