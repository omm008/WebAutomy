import React from "react";
import Pricing from "../components/Pricing";
import PageTransition from "../components/PageTransition";

const PricingPage = () => {
  return (
    <PageTransition>
      <div className="pt-32">
        <Pricing />
      </div>
    </PageTransition>
  );
};
export default PricingPage;
