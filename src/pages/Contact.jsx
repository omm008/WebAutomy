import React from "react";
// import ContactForm from "../components/ContactForm"; // We will assume you have this or use placeholder
import PageTransition from "../components/PageTransition";

const Contact = () => {
  return (
    <PageTransition>
      <div className="pt-32 container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-5xl font-bold text-dark mb-8 text-center">
            Let's Talk
          </h1>
          {/* <ContactForm /> */}
        </div>
      </div>
    </PageTransition>
  );
};
export default Contact;
