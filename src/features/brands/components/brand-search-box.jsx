import React from "react";
import { GrSearch } from "react-icons/gr";
import BrandContext from "../brand-context";

function BrandSearch(props) {
  const { changeBrandKeyword } = React.useContext(BrandContext);
  return (
    <div className="brand-search-box">
      <span className="search-icon">
        <GrSearch />
      </span>
      <input
        type="text"
        placeholder="Search Brands"
        onChange={(event) => changeBrandKeyword(event.target.value)}
      />
    </div>
  );
}

export default BrandSearch;
