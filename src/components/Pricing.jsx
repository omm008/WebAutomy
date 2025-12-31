import React from "react";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "$999",
    description: "Perfect for local businesses just getting started.",
    features: [
      "5-Page Fast React Website",
      "Google My Business Setup",
      "Basic SEO Optimization",
      "Contact Form",
      "1 Month Support",
    ],
    cta: "Get Started",
    popular: false,
  },
  {
    name: "Growth Engine",
    price: "$1,999",
    description: "Everything you need to scale and capture leads.",
    features: [
      "10-Page Premium Website",
      "WhatsApp 'Click-to-Chat' Widget",
      "Social Media Setup (SMO)",
      "Speed Optimization (90+ Score)",
      "3 Months Support",
    ],
    cta: "Most Popular",
    popular: true,
  },
  {
    name: "Automation Empire",
    price: "Custom",
    description: "Full-scale automation for high volume businesses.",
    features: [
      "Custom Web App Development",
      "WhatsApp API Chatbot",
      "CRM Integration (HubSpot/Zoho)",
      "Bulk Messaging Dashboard",
      "Dedicated Manager",
    ],
    cta: "Contact Us",
    popular: false,
  },
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-24 bg-light relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-gray-600 text-lg">
            No hidden fees. Choose the plan that fits your growth stage.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative p-8 rounded-2xl border transition-all duration-300 hover:-translate-y-2 hover:shadow-xl ${
                plan.popular
                  ? "bg-white border-primary shadow-lg scale-105 z-10"
                  : "bg-white border-gray-100"
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-primary to-secondary text-white px-4 py-1 rounded-full text-sm font-semibold shadow-md">
                  Best Value
                </div>
              )}

              <h3 className="text-xl font-bold text-dark mb-2">{plan.name}</h3>
              <div className="mb-4">
                <span className="text-4xl font-bold text-dark">
                  {plan.price}
                </span>
                {plan.price !== "Custom" && (
                  <span className="text-gray-500">/project</span>
                )}
              </div>
              <p className="text-gray-600 mb-6 text-sm">{plan.description}</p>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-accent shrink-0" />
                    <span className="text-gray-600 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-3 rounded-xl font-semibold transition-colors ${
                  plan.popular
                    ? "bg-primary hover:bg-indigo-700 text-white shadow-lg shadow-indigo-200"
                    : "bg-slate-100 hover:bg-slate-200 text-dark"
                }`}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
