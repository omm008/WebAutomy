import React from "react";
import Services from "../components/Services";
import PageTransition from "../components/PageTransition";

const ServicesPage = () => {
  return (
    <PageTransition>
      <div className="pt-32 pb-20 px-4 text-center">
        <h1 className="text-5xl font-bold text-dark mb-6">Our Capabilities</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Deep dive into how we engineer growth.
        </p>
      </div>
      <Services />
    </PageTransition>
  );
};
export default ServicesPage;
