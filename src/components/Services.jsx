import React from "react";
import { Layout, MessageSquare, TrendingUp, ArrowRight } from "lucide-react";

const services = [
  {
    icon: <Layout className="w-8 h-8 text-white" />,
    title: "High-Speed Websites",
    description:
      "We build React-based websites that load in under 1 second. Better SEO, better user experience, and zero bloat.",
    color: "bg-blue-500",
  },
  {
    icon: <MessageSquare className="w-8 h-8 text-white" />,
    title: "WhatsApp Automation",
    description:
      "Turn your traffic into chats. We set up auto-replies, lead capture bots, and bulk messaging systems safely.",
    color: "bg-green-500",
  },
  {
    icon: <TrendingUp className="w-8 h-8 text-white" />,
    title: "Growth & SEO",
    description:
      "Get found on Google. We optimize your GMB profile and site structure to target high-value local clients.",
    color: "bg-purple-500",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-primary font-semibold tracking-wide uppercase text-sm mb-2">
            Our Expertise
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-dark mb-4">
            Everything You Need to <span className="text-accent">Scale</span>
          </h3>
          <p className="text-gray-600 text-lg">
            Most agencies just design. We build systems that capture, convert,
            and close leads automatically.
          </p>
        </div>

        {/* Services Grid (Glassmorphism Design) */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative p-8 rounded-3xl border border-white/50 bg-white/40 backdrop-blur-xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 overflow-hidden"
            >
              {/* Glowing Blob effect on Hover */}
              <div
                className={`absolute -right-10 -top-10 w-32 h-32 ${service.color} opacity-10 blur-3xl group-hover:opacity-40 transition-opacity duration-500`}
              ></div>

              {/* Icon Container */}
              <div
                className={`${service.color} w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-md shadow-gray-200 transform group-hover:rotate-6 transition-transform duration-300`}
              >
                {service.icon}
              </div>

              {/* Content */}
              <h4 className="text-2xl font-bold text-dark mb-3">
                {service.title}
              </h4>
              <p className="text-gray-600 mb-8 leading-relaxed font-light">
                {service.description}
              </p>

              {/* Arrow Button */}
              <div className="flex items-center gap-2 text-sm font-bold text-primary cursor-pointer group-hover:gap-3 transition-all">
                Learn More <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services; // <--- This was likely missing!
