import BrandContext from "../brand-context";
import { useContext, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { GrLinkPrevious } from "react-icons/gr";

function BrandParamFilters() {
  const { changeSelectedBrands } = useContext(BrandContext);
  const { slugs } = useParams();

  useEffect(() => {
    let arr = slugs.split(",");
    changeSelectedBrands(arr);
  }, [slugs, changeSelectedBrands]);

  return (
    <div className="brand-param-filter">
      <Link
        to="/"
        className="lnk-goto-back"
        onClick={() => changeSelectedBrands([])}
      >
        <GrLinkPrevious/>
        <span>All Brands</span>
      </Link>
    </div>
  );
}
export default BrandParamFilters;
