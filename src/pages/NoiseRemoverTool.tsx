
import { useState, useRef, useEffect } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import NoiseRemoverInterface from '@/components/tools/noise-remover/NoiseRemoverInterface';
import { motion } from 'framer-motion';

const NoiseRemoverTool = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <section className="py-16 relative overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0 -z-10 bg-gradient-to-b from-gray-50 to-white"></div>
          <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-white to-transparent"></div>
          <div className="absolute -top-20 -right-20 w-80 h-80 bg-indigo-100 rounded-full opacity-20 blur-3xl"></div>
          <div className="absolute top-1/3 -left-16 w-64 h-64 bg-blue-100 rounded-full opacity-20 blur-3xl"></div>
          
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-center mb-12"
            >
              <h1 className="text-4xl md:text-5xl font-heading font-light mb-6 text-gray-900">
                Audio <span className="font-medium">Noise Remover</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Remove unwanted noise from your audio recordings with our AI-powered noise cancellation technology
              </p>
              
              {/* Animated Line */}
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto mt-8"></div>
            </motion.div>

            <NoiseRemoverInterface />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default NoiseRemoverTool;
