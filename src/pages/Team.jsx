import React from "react";
import PageTransition from "../components/PageTransition";

const Team = () => {
  return (
    <PageTransition>
      <div className="pt-32 container mx-auto px-4 text-center">
        <h1 className="text-5xl font-bold text-dark mb-12">
          Meet the <span className="text-primary">Builders</span>
        </h1>

        {/* Simple Team Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {[1, 2, 3].map((item) => (
            <div
              key={item}
              className="p-6 border border-gray-100 rounded-2xl bg-white hover:shadow-xl transition-all"
            >
              <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4"></div>
              <h3 className="text-xl font-bold">Team Member {item}</h3>
              <p className="text-primary">Lead Developer</p>
            </div>
          ))}
        </div>
      </div>
    </PageTransition>
  );
};
export default Team;
