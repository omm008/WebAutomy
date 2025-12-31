import React from "react";
import Hero from "../components/Hero";
import Services from "../components/Services";
import PageTransition from "../components/PageTransition";

const Home = () => {
  return (
    <PageTransition>
      <Hero />
      <Services /> {/* Show a preview on home */}
    </PageTransition>
  );
};
export default Home;
