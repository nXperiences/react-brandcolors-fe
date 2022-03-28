import "./components/stylesheets/brands.scss";

import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Sidebar from "./../../components/side-bar";
import Content from "./../../components/main-content";
import BrandSearchBox from "./components/brand-search-box";
import BrandParamFilters from "./components/brand-param-filter";
import BrandExportTools from "./components/brand-export-tools";
import BrandList from "./components/brand-list";
import BrandCollectedList from "./components/brand-collected-list";
import BrandContext from "./brand-context";
import { forceCheck } from "react-lazyload";

import brandsData from "./data/brands.json";

const getBrandsArray = (keyword) => {
  let arr = [];
  Object.keys(brandsData).map((key) => arr.push(brandsData[key]));

  if (!keyword) return arr;
  return arr.filter((brand) => brand.title.toLowerCase().includes(keyword));
};

function Brands() {
  const [brands, bindBrands] = useState(getBrandsArray(false));
  const [selectedBrands, changeSelectedBrands] = useState([]);
  const [copiedColor, changeCopiedColor] = useState(false);
  const [brandKeyword, changeBrandKeyword] = useState(false);

  const context = {
    brands,
    selectedBrands,
    changeSelectedBrands,
    copiedColor,
    changeCopiedColor,
    brandKeyword,
    changeBrandKeyword,
  };

  useEffect(() => {
    bindBrands(
      brandKeyword
        ? getBrandsArray(brandKeyword.toLowerCase())
        : getBrandsArray()
    );
  }, [brandKeyword]);

  useEffect(() => {
    forceCheck();
  }, [brands]);

  return (
    <BrandContext.Provider value={context}>
      <Sidebar />
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Content
                headerComponents={[
                  <BrandSearchBox key="brandSearchBox" />,
                  <BrandExportTools key="brandExportTools" />,
                ]}
                bodyComponents={[<BrandList key="brandList" />]}
              />
            }
          ></Route>
          <Route
            path="/c/:slugs"
            element={
              <Content
                headerComponents={[
                  <BrandParamFilters key="brandParamFilters" />,
                  <BrandExportTools key="brandExportTools" />,
                ]}
                bodyComponents={[
                  <BrandCollectedList key="brandCollectedList" />,
                ]}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </BrandContext.Provider>
  );
}
export default Brands;
