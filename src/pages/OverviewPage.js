import { Fragment } from "react";

import AllProducts from "../components/products/AllProducts";
import ProductSummary from "../components/products/ProductSummary";

function OverviewPage() {
    return (
      <Fragment>
        <ProductSummary/>
        <AllProducts/>
      </Fragment>
    );
  }
  
  export default OverviewPage;