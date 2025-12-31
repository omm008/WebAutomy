import React from "react";
import { ArrowRight, PlayCircle } from "lucide-react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-gray-950 text-white">
      {/* Background Blobs (Decoration) */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-50 animate-pulse"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-72 h-72 bg-accent/20 rounded-full blur-3xl opacity-50"></div>

      <div className="container mx-auto px-4 relative z-10 text-center">
        {/* Animated Content Wrapper */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-gray-200 shadow-sm mb-8">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
            <span className="text-sm font-medium text-black">
              Accepting New Clients in US, UK & Aus
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl font-bold text-gray-50 mb-6 leading-tight tracking-tight">
            Don't Just Get Leads. <br />
            Close Them{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-blue-400">
              Automatically.
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl text-gray-600 mb-10 leading-relaxed max-w-2xl mx-auto">
            We build high-converting websites and custom WhatsApp automation
            systems that help small businesses grow without the burnout.
          </p>

          {/* Buttons */}
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
            <button className="group bg-primary hover:bg-indigo-700 text-white text-lg font-semibold py-4 px-8 rounded-full transition-all shadow-xl shadow-indigo-200 flex items-center gap-2">
              Start Your Project
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>

            <button className="group bg-white border border-gray-200 hover:border-primary/30 text-dark text-lg font-semibold py-4 px-8 rounded-full transition-all flex items-center gap-2 hover:shadow-lg">
              <PlayCircle className="w-5 h-5 text-gray-400 group-hover:text-primary transition-colors" />
              See How It Works
            </button>
          </div>
        </motion.div>

        {/* Floating "Stats" Card (Visual Proof) */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mt-16 relative mx-auto max-w-5xl"
        >
          {/* We will add a dashboard image or 3D graphic here later */}
          <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 p-2 md:p-4 rotate-1 hover:rotate-0 transition-transform duration-500">
            <div className="bg-slate-50 rounded-xl h-64 md:h-96 flex items-center justify-center border border-dashed border-gray-300">
              <p className="text-gray-400 font-medium">
                ✨ Hero Image / Dashboard Mockup Goes Here
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
